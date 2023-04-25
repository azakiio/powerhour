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

export default function ListExample() {
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
      <h1>List Example</h1>
      <div className="flex gap-4 flex-wrap">
        <div className="flex-1 prose">
          <h3>What's wrong with this?</h3>
          <ul>
            <li>Elements appear and disappear instantly</li>
            <li>Siblings shift into position right away</li>
            <li>Hard to keep track of the list</li>
            <li>
              (Show <code>Framer Motion</code> example)
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <input
            className="input input-bordered w-full mb-6"
            placeholder="what needs to be done?"
            onKeyUp={(e) => e.key === "Enter" && add(e.target)}
          />
          <div className="flex flex-col gap-2">
            {todos.map(({ id, done, description }) => (
              <div
                key={id}
                className="border py-2 px-4 flex justify-between gap-4]"
              >
                <div>{description}</div>
                <button onClick={() => remove(id)}>✅</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
