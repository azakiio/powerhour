import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import CodeSnippet from "~/lib/CodeSnippet";
import { LayoutExample1 } from "./codeSample";

let uid = 0;
let initialTodos = [
  { id: uid++, done: false, description: "write some docs" },
  { id: uid++, done: false, description: "start writing blog post" },
  { id: uid++, done: true, description: "buy some milk" },
  { id: uid++, done: false, description: "mow the lawn" },
  { id: uid++, done: false, description: "feed the turtle" },
  { id: uid++, done: false, description: "fix some bugs" },
];

export default function ListExampleMotion() {
  const [todos, setTodos] = useState(initialTodos);
  const add = (input: any) => {
    const todo = {
      id: uid++,
      done: false,
      description: input.value || "random",
    };

    setTodos([...todos, todo]);
    input.value = "";
  };

  const remove = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="slide">
      <h1>Layout Animations</h1>

      <figure>
        <CodeSnippet>{LayoutExample1}</CodeSnippet>
      </figure>

      <input
        className="input input-bordered w-full mb-6"
        placeholder="what needs to be done?"
        onKeyUp={(e) => e.key === "Enter" && add(e.target)}
      />
      <div className="flex flex-col gap-2">
        <AnimatePresence initial={false}>
          {todos.map(({ id, done, description }) => (
            <motion.div
              key={id}
              className="border py-2 px-4 flex justify-between gap-4"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
            >
              <div>{description}</div>
              <button onClick={() => remove(id)}>✅</button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
