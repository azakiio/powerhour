import { useEffect, useState } from "react";
import CodeSnippet from "~/lib/CodeSnippet";
import { hidden_v1, hidden_v2, reactCode } from "./codeSample";
import { GiToaster } from "react-icons/gi";
import Toast from "./Toast";
import AccordionTitle from "~/lib/Components/AccordionTitle";

export default function CssExamples() {
  // const [animState, setAnimState] = useState<0 | 1 | 2 | 3>(0);
  const [toastsRight, setToastsRight] = useState(1);
  const [toastsLeft, setToastsLeft] = useState(0);

  return (
    <div className="slide">
      <h1>Intro Animations</h1>

      <ul>
        <li>Here's a different kind of intro animation.</li>
        <li>
          This is a case where it makes sense to draw the user's attention to a
          new element on the screen
        </li>
        <li>
          The animation is quick, simple, and doesn't get in the way of
          interacting with the rest of the site
        </li>
      </ul>

      <AccordionTitle title="Let's build a toaster">
        <section className="flex gap-x-4 flex-wrap items-center">
          <CodeSnippet language="scss">{hidden_v1}</CodeSnippet>
          <div className="flex flex-col gap-2 flex-1">
            <ul>
              <li>
                Starts with <code>.toast-hidden</code>
              </li>
              <li>
                onMount, add <code>.toast-visible</code>
              </li>
              <li>
                To hide, back to <code>.toast-hidden</code>
              </li>
              <li>
                Each state has it's own <code>transition</code> properties
              </li>
            </ul>
            <button
              onClick={() => setToastsRight(toastsRight + 1)}
              className="btn btn-primary gap-2"
            >
              <span>More</span> <GiToaster className="text-lg" />
            </button>
            <button
              onClick={() => setToastsRight(0)}
              className="btn btn-warning"
            >
              Clear All
            </button>
          </div>
        </section>
        <CodeSnippet>{reactCode}</CodeSnippet>
      </AccordionTitle>

      <AccordionTitle title="What's wrong with our Toaster?">
        <section className="flex gap-x-4 flex-wrap items-center">
          <CodeSnippet language="scss">{hidden_v2}</CodeSnippet>
          <div className="flex flex-col gap-2 flex-1">
            <ul>
              <li>The elements are still taking up space in the DOM</li>
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

      {/* <figure
        className="flex flex-col justify-around items-center gap-8"
        style={{ marginBottom: "0.5em" }}
      >
        <button onClick={() => setToasts(toasts + 1)} className="btn">
          <GrRotateLeft className="text-lg" />
        </button>
      </figure> */}

      <div className="fixed right-0 bottom-0 flex flex-col gap-2 !m-4">
        {[...Array(toastsRight).keys()].map((i) => (
          <Toast key={i} />
        ))}
      </div>

      <div className="fixed left-0 bottom-0 flex flex-col gap-2 !m-4">
        {[...Array(toastsLeft).keys()].map((i) => (
          <Toast key={i} hiddenClass="toaster-hidden-v2" />
        ))}
      </div>
    </div>
  );
}
