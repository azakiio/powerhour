import { useState } from "react";
import CodeSnippet from "~/lib/CodeSnippet";
import { multipleStates, oneState } from "./codeSample";

export default function CssExamples() {
  const [animState, setAnimState] = useState<0 | 1 | 2 | 3>(0);
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="slide">
      <h1>Animations in CSS</h1>
      <section className="flex gap-10 items-stretch">
        <figure
          className="flex flex-col justify-around items-center flex-[1]"
          style={{ marginBottom: "0.5em" }}
        >
          <div className={`box box-${isVisible ? "visible" : "initial"}`} />
          <button onClick={() => setVisible(!isVisible)} className="btn">
            Toggle State
          </button>
        </figure>
        <CodeSnippet language="scss" style={{ flex: 2 }}>
          {oneState}
        </CodeSnippet>
      </section>

      <p>Show multiple states, explain issues</p>
      <ul>
        <li>maintain mapping of classes in react</li>
        <li>how to remove an element from the dom?</li>
        <li>show example with css</li>
      </ul>
      <div className="grid">
        <CodeSnippet language="scss">{multipleStates(animState)}</CodeSnippet>
        <div className="btn-group">
          <button onClick={() => setAnimState(0)} className="btn">
            State 0
          </button>
          <button onClick={() => setAnimState(1)} className="btn">
            State 1
          </button>
          <button onClick={() => setAnimState(2)} className="btn">
            State 2
          </button>
          <button onClick={() => setAnimState(3)} className="btn">
            State 3
          </button>
        </div>
        <figure>
          <div className={`box box-state-${animState}`} />
        </figure>
      </div>
      <p>
        We've all seen something like this before. first specify the property
        that will Animate next we specify the duration and optionally,
      </p>
    </div>
  );
}
