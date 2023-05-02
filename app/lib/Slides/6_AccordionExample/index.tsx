import { useState } from "react";
import CodeSnippet from "~/lib/CodeSnippet";
import AccordionCSS from "~/lib/Components/AccordionCSS";
import FormInput from "~/lib/Components/FormInput";
import { AccordionCode, marginTopCSS, maxHeightCSS } from "./codeSample";

export default function AccordionExample() {
  const [stuff, setStuff] = useState(0);
  const [maxHeight, setMaxHeight] = useState("500px");
  const [height, setHeight] = useState("auto");
  const [active, setActive] = useState(false);

  return (
    <div className="slide">
      <h1>Accordions!</h1>

      <CodeSnippet>{AccordionCode}</CodeSnippet>

      <div className="accordion">
        <button onClick={() => setActive(!active)}>
          <div className="font-bold text-lg">{"title"}</div>
        </button>

        <div className={active ? "h-full" : "h-0"}>{"children"}</div>
      </div>

      <AccordionCSS
        title="I'm a naive accordion"
        closedState={{ height: "0" }}
        openState={{ height: height }}
      >
        Animate <code>height</code> from 0 to <code>auto</code>
      </AccordionCSS>

      <AccordionCSS
        title="I'm a negative margin accordion"
        closedState={{ marginTop: "-100%" }}
        openState={{ marginTop: "0" }}
      >
        <div className="pt-4" />
        <CodeSnippet language="scss">{marginTopCSS}</CodeSnippet>
        <p>
          The problem is, percentage margins are based on the element's width.
          So if the accordion content gets longer than it's width, the{" "}
          <code> margin-top: 100%</code> isn't enough to hide everything
        </p>
        <p>If we add more content, you see how it breaks:</p>
        <div className="flex gap-4">
          <button
            onClick={() => setStuff(stuff + 1)}
            className="btn btn-success btn-sm"
          >
            Add Stuff
          </button>
          <button
            onClick={() => setStuff(0)}
            className="btn btn-warning btn-sm"
          >
            Reset Stuff
          </button>
        </div>
        {Array.from({ length: stuff }).map((_, i) => (
          <p key={i}>I'm stuff</p>
        ))}
      </AccordionCSS>
      <AccordionCSS
        title="I'm a max-height accordion"
        closedState={{ maxHeight: "0" }}
        openState={{ maxHeight: maxHeight }}
      >
        <div className="pt-4" />
        <CodeSnippet language="scss">{maxHeightCSS(maxHeight)}</CodeSnippet>
        <p>
          Animate to some <code>max-height</code> that's larger than your
          accordion
        </p>
        <FormInput
          title="max-height"
          value={maxHeight}
          changeHandler={(e) => {
            setMaxHeight(e.currentTarget.value);
          }}
        />
        <p>
          The problem: if the max-height is too small, the content will be
          hidden (and we don't know what the content will be) so to be safe we
          set a large max-height, this messes up the transition (because it's
          transitioning to the full max-height)
        </p>
      </AccordionCSS>
    </div>
  );
}
