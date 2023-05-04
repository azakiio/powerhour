import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import CodeSnippet from "~/lib/CodeSnippet";
import { LayoutExample1 } from "./codeSample";

let uid = 0;
const options = [
  "write some docs",
  "start writing blog post",
  "buy some milk",
  "mow the lawn",
  "feed the turtle",
  "fix some bugs",
];

// function to sample from the option array
const randomOption = () => options[Math.floor(Math.random() * options.length)];

let initialTodos = [
  { id: uid++, done: false, description: randomOption() },
  { id: uid++, done: false, description: randomOption() },
  { id: uid++, done: true, description: randomOption() },
  { id: uid++, done: false, description: randomOption() },
  { id: uid++, done: false, description: randomOption() },
  { id: uid++, done: false, description: randomOption() },
];

export default function ListExampleMotion() {
  const [isLayout, setLayout] = useState(false);
  const [isHeight, setHeight] = useState(false);
  const [isPop, setPop] = useState(false);

  const [todos, setTodos] = useState(initialTodos);
  const add = (input: any) => {
    const todo = {
      id: uid++,
      done: false,
      description: input.value || randomOption(),
    };

    setTodos([...todos, todo]);
    input.value = "";
  };

  // add a new todo item to the list at a random index
  const randomAdd = () => {
    const index = Math.floor(Math.random() * todos.length);
    const todo = {
      id: uid++,
      done: false,
      description: randomOption(),
    };
    setTodos([...todos.slice(0, index), todo, ...todos.slice(index)]);
  };

  const remove = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="slide !max-w-screen-lg">
      <h1>Layout Animations</h1>

      <div className="flex gap-4 relative">
        <div className="flex-[60%]">
          <CodeSnippet>{LayoutExample1(isLayout, isHeight)}</CodeSnippet>

          <h4>CSS layouts are difficult and expensive to animate.</h4>
          <p>
            <label className="cursor-pointer label justify-start gap-2 w-fit">
              <span className="label-text text-error">Animate Height</span>
              <input
                type="checkbox"
                className="checkbox checkbox-error"
                checked={isHeight}
                onChange={() => setHeight(!isHeight)}
              />
            </label>
            Animating <code>height</code> is conceptually straightforward, but
            suffers from poor performance because we're triggering the browser
            layout systems every animation frame.
          </p>

          <h4 className="!mt-8">
            The <code>layout</code> prop
          </h4>

          <p>
            <label className="cursor-pointer label justify-start gap-2 w-fit">
              <span className="label-text text-secondary">
                Enable layout animation
              </span>
              <input
                type="checkbox"
                className="checkbox checkbox-secondary"
                checked={isLayout}
                onChange={() => setLayout(!isLayout)}
              />
            </label>
            Framer Motion can animate between any CSS layout by using performant
            transforms instead of the layout system.
          </p>
          <p>
            Any layout change that happens as the result of a re-render will be
            animated. That could be any combination of:
          </p>
          {/* <button onClick={randomAdd}>random insert</button> */}

          <h4 className="!mt-8">AnimatePresence mode</h4>
          <label className="cursor-pointer label justify-start gap-2 w-fit">
            <span className="label-text text-primary">PopLayout</span>
            <input
              type="checkbox"
              className="checkbox checkbox-primary"
              checked={isPop}
              onChange={() => setPop(!isPop)}
            />
          </label>
          <p>
            <code>"sync"</code>: <b>(Default)</b> Children animate in/out as
            soon as they're added/removed.
          </p>
          <p>
            <code>"popLayout"</code>: Exiting children will be "popped" out of
            the page layout. This allows surrounding elements to move to their
            new layout immediately.
          </p>
        </div>

        <div className="flex-[40%] sticky top-6 h-fit">
          <input
            className="input input-bordered w-full mb-6 border-2"
            placeholder="what needs to be done?"
            onKeyUp={(e) => e.key === "Enter" && add(e.target)}
          />
          <div className="flex flex-col gap-2">
            <AnimatePresence
              initial={false}
              mode={isPop ? "popLayout" : "sync"}
            >
              {todos.map(({ id, done, description }) => (
                <motion.div
                  layout={isLayout}
                  key={id}
                  className="border-2 border-primary py-2 overflow-hidden px-4 flex justify-between gap-4 rounded-lg"
                  initial={isHeight ? { height: 0 } : { opacity: 0, x: 100 }}
                  animate={isHeight ? { height: "auto" } : { opacity: 1, x: 0 }}
                  exit={isHeight ? { height: 0 } : { opacity: 0, x: 100 }}
                >
                  <div className="font-bold">{description}</div>
                  <button
                    className="btn btn-circle btn-outline btn-primary btn-sm border-2"
                    onClick={() => remove(id)}
                  >
                    <FaCheck />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
      {/* <div className="fixed right-0 bottom-0 flex flex-col gap-2 m-4">
        <AnimatePresence initial={false}>
        {todos.map(({ id, done, description }) => (
          <motion.button
          key={id}
          className="rounded-lg bg-primary px-4 py-2 text-primary-content"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          onClick={() => remove(id)}
          >
          <div>{description}</div>
          </motion.button>
          ))}
          </AnimatePresence>
        </div> */}
    </div>
  );
}
