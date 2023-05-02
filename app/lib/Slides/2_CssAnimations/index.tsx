import { useEffect, useState } from "react";
import CodeSnippet from "~/lib/CodeSnippet";
import { oneState, reactCode } from "./codeSample";
import { GrRotateLeft } from "react-icons/gr";

export default function CssExamples() {
  // const [animState, setAnimState] = useState<0 | 1 | 2 | 3>(0);
  const [activeClass, setActiveClass] = useState("toaster-hidden");

  useEffect(() => {
    setActiveClass("toaster-visible");
  }, []);

  return (
    <div className="slide !max-w-screen-lg">
      <h1>Intro Animations</h1>
      <figure
        className="flex flex-col justify-around items-center gap-8"
        style={{ marginBottom: "0.5em" }}
      >
        <button
          onClick={() => setActiveClass("toaster-hidden")}
          className={["toaster", activeClass].join(" ")}
        >
          Toast is ready! (click me to hide)
        </button>
        <button
          onClick={() => setActiveClass("toaster-visible")}
          className="btn"
        >
          <GrRotateLeft className="text-lg" />
        </button>
      </figure>
      <section className="flex gap-2">
        <CodeSnippet language="scss">{oneState}</CodeSnippet>
        <CodeSnippet>{reactCode}</CodeSnippet>
      </section>
      # Points about intro Animations - People don't like to wait before they
      can interact with your site, long intro animations can be frustrating -
      Usually when people hear intro
      {/* <p>Show multiple states, explain issues</p>
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
      </p> */}
    </div>
  );
}
