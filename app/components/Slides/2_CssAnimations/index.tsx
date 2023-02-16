import { useState } from "react";
import CodeSnippet from "~/components/CodeSnippet";
import Range from "../AnimateProp/Range";
import { cssTransition } from "./codeSample";

export default function CssExamples() {
  const [animState, setAnimState] = useState(0);

  return (
    <div className="slide">
      <h1>Animations in CSS</h1>
      <div className="grid">
        <CodeSnippet language="css">{cssTransition}</CodeSnippet>
        <div className="btn-group">
          <button onClick={() => setAnimState(0)} className="btn">Initial</button>
          <button onClick={() => setAnimState(1)} className="btn">State 1</button>
          <button onClick={() => setAnimState(2)} className="btn">State 2</button>
          <button onClick={() => setAnimState(3)} className="btn">State 3</button>
        </div>
        <figure>
          <div className={`box box-state-${animState}`} />
        </figure>
      </div>
      <p>
        We've all seen something like this before. first specify the property that will Animate next
        we specify the duration and optionally,
      </p>
      {/* <div
        className="cssBox ease-out"
        style={{ transform: `translateX(${active ? "200" : "0"}px) rotate(30deg)` }}></div>
      <div
        className="cssBox ease-linear"
        style={{ transform: `translateX(${active ? "400" : "0"}px) rotate(30deg)` }}></div> */}
    </div>
  );
}
