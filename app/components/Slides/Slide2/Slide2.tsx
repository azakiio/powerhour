import { useState } from "react";

let uid = 0;
let initialTodos = [
  { id: uid++, done: false, description: "write some docs" },
  { id: uid++, done: false, description: "start writing blog post" },
  { id: uid++, done: true, description: "buy some milk" },
  { id: uid++, done: false, description: "mow the lawn" },
  { id: uid++, done: false, description: "feed the turtle" },
  { id: uid++, done: false, description: "fix some bugs" },
];

export default function Slide2() {
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

  return (
    <div className="max-w-xs w-full">
      <input
        className="form-input w-full mb-8"
        placeholder="what needs to be done?"
        onKeyDown={e => e.key === "Enter" && add(e.target)}
      />
      <div className="flex flex-col gap-2">
        {todos.map(({ id, done, description }) => (
          <div key={id} className="border py-2 px-4 flex justify-between gap-4]">
            <div>{description}</div>
            <button onClick={() => setTodos(todos.filter(t => t.id !== id))}>✅</button>
          </div>
        ))}
      </div>
    </div>
  );
}
