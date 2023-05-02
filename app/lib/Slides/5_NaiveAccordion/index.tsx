import { useEffect, useState } from "react";
import CodeSnippet from "~/lib/CodeSnippet";
import AccordionCSS from "~/lib/Components/AccordionCSS";
import FormInput from "~/lib/Components/FormInput";
import { AccordionCode, marginTopCSS, maxHeightCSS } from "./codeSample";

export default function NaiveAccordion() {
  const [height, setHeight] = useState("auto");
  const [active, setActive] = useState(false);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    if (active) {
      setScale(1);
    } else {
      setScale(0);
    }
  }, [active]);

  return (
    <div className="slide">
      <h1>Accordions!</h1>

      <CodeSnippet>{AccordionCode}</CodeSnippet>

      <div className="accordion">
        <button onClick={() => setActive(!active)}>
          <div className="font-bold text-lg">{"title"}</div>
        </button>

        {active && (
          <div
            className="duration-700"
            style={{ transform: `scaleY(${scale})`, transformOrigin: "top" }}
          >
            Lot's of content here, Very important stuff
          </div>
        )}
      </div>

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
