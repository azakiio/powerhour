import { useEffect, useState } from "react";
import CodeSnippet from "~/lib/CodeSnippet";
import {
  reactCode,
  toast_v1,
  toast_v2,
  toast_v3,
  uglyReact,
} from "./codeSample";
import { GiToaster } from "react-icons/gi";
import Toast from "./Toast";
import AccordionTitle from "~/lib/Components/AccordionTitle";

export default function ToastExample() {
  // const [animState, setAnimState] = useState<0 | 1 | 2 | 3>(0);
  const [toastsRight, setToastsRight] = useState(1);
  const [toastsLeft, setToastsLeft] = useState(0);

  return (
    <div className="slide">
      <h1>Intro Animations</h1>

      <CodeSnippet language="scss">{toast_v1}</CodeSnippet>
      <button
        onClick={() => setToastsRight(toastsRight + 1)}
        className="btn btn-primary gap-2"
      >
        <span>More</span> <GiToaster className="text-lg" />
      </button>
      <button onClick={() => setToastsRight(0)} className="btn btn-warning">
        Clear All
      </button>

      <AccordionTitle title="What's wrong with our Toaster?">
        <section className="flex gap-x-4 flex-wrap items-center">
          <CodeSnippet language="scss">{toast_v2}</CodeSnippet>
          <div className="flex flex-col gap-2 flex-1">
            <ul>
              <li>The elements are still taking up space in the DOM</li>
              <li>
                What if we add <code>display: none</code> to our initial class?
              </li>
            </ul>
            <button
              onClick={() => setToastsLeft(toastsLeft + 1)}
              className="btn btn-primary"
            >
              More <GiToaster className="text-lg" />
            </button>
            <button
              onClick={() => setToastsLeft(0)}
              className="btn btn-warning"
            >
              Clear All
            </button>
          </div>
        </section>
      </AccordionTitle>

      <AccordionTitle title="How to deal with this?">
        <section className="flex gap-x-4 flex-wrap items-center">
          <CodeSnippet language="scss">{toast_v3}</CodeSnippet>
          <div className="flex flex-col gap-2 flex-1">
            <ul>
              <li>The elements are still taking up space in the DOM</li>
              <li>
                What if we add <code>display: none</code> to our initial class?
              </li>
            </ul>
            <button
              onClick={() => setToastsLeft(toastsLeft + 1)}
              className="btn btn-primary"
            >
              More <GiToaster className="text-lg" />
            </button>
            <button
              onClick={() => setToastsLeft(0)}
              className="btn btn-warning"
            >
              Clear All
            </button>
          </div>
        </section>
        <CodeSnippet>{uglyReact}</CodeSnippet>
      </AccordionTitle>
      {/* <figure
        className="flex flex-col justify-around items-center gap-8"
        style={{ marginBottom: "0.5em" }}
      >
        <button onClick={() => setToasts(toasts + 1)} className="btn">
          <GrRotateLeft className="text-lg" />
        </button>
      </figure> */}

      <div className="fixed right-0 bottom-0 flex flex-col gap-2 m-4">
        {[...Array(toastsRight).keys()].map((i) => (
          <Toast key={i}>Toast is ready! (click me to hide)</Toast>
        ))}
      </div>

      <div className="fixed left-0 bottom-0 flex flex-col gap-2 m-4">
        {[...Array(toastsLeft).keys()].map((i) => (
          <Toast key={i} hiddenClass="toaster-hidden-v2">
            Sad toast don't pop :(
          </Toast>
        ))}
      </div>

      <div className="fixed right-0 top-0 flex flex-col gap-2 m-4">
        {[...Array(toastsLeft).keys()].map((i) => (
          <Toast key={i} exitAnimation={true}>
            Nice toast but ugly Toaster
          </Toast>
        ))}
      </div>
    </div>
  );
}
