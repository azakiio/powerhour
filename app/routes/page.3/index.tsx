import { useEffect, useState } from "react";
import CodeSnippet from "~/lib/CodeSnippet";
import { AccordionCode, CSSAccordion, CSSAccordionStyles } from "./codeSample";

export default function AccordionApproaches() {
  const [height, setHeight] = useState("auto");
  const [scale, setScale] = useState(0);

  const [isOpen_1, setOpen_1] = useState(false);
  const [isOpen_2, setOpen_2] = useState(false);

  useEffect(() => {
    if (isOpen_1) {
      setScale(1);
    } else {
      setScale(0);
    }
  }, [isOpen_1]);

  return (
    <div className="slide">
      <h1>Accordions!</h1>

      <figure>
        <div className="accordion">
          <button onClick={() => setOpen_1(!isOpen_1)}>
            <div className="font-bold text-lg">Approach #1</div>
          </button>

          {isOpen_1 && (
            <div>
              <p>
                The <b>Conditional Rendering</b> accordion
              </p>
              <CodeSnippet>{AccordionCode}</CodeSnippet>
            </div>
          )}
        </div>
      </figure>

      <figure>
        <div className="accordion">
          <button onClick={() => setOpen_2(!isOpen_2)}>
            <div className="font-bold text-lg">Approach #2</div>
          </button>

          <div className="hidden aria-expanded:block" aria-expanded={isOpen_2}>
            <p>
              The <b>CSS</b> accordion
            </p>
            <CodeSnippet>{CSSAccordion}</CodeSnippet>
            <CodeSnippet language="scss">{CSSAccordionStyles}</CodeSnippet>
          </div>
        </div>
      </figure>

      <p>Which approach would you go with?</p>

      {/* <p>
        Conditional Rendering is more straightforward, but the CSS approach is
        quite a bit easier to animate
      </p> */}

      {/* <AccordionCSS
        title="I'm a naive accordion"
        closedState={{ height: "0" }}
        openState={{ height: height }}
      >
        Animate <code>height</code> from 0 to <code>auto</code>
      </AccordionCSS> */}
    </div>
  );
}
