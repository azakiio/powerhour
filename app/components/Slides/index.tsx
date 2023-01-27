import reactElementToJSXString from "react-element-to-jsx-string";
import Slide1 from "./Slide1/Slide1";
import Slide2 from "./Slide2/Slide2";

export const slides = [
  { title: "Intro", component: <Slide1 />, code: reactElementToJSXString(Slide1()) },
  {
    title: "List",
    component: <Slide2 />,
    code: `<div className="max-w-xs w-full">
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
</div>`,
  },
];
