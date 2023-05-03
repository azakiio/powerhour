import { useState } from "react";
import CodeSnippet from "~/lib/CodeSnippet";
import AccordionCSS from "~/lib/Components/AccordionCSS";
import FormInput from "~/lib/Components/FormInput";
import {
  AccordionCode,
  displayNone,
  heightCSS,
  marginTopCSS,
  maxHeightCSS,
} from "./codeSample";

export default function AccordionExample() {
  const [stuff, setStuff] = useState(0);
  const [maxHeight, setMaxHeight] = useState("500px");
  const [height, setHeight] = useState("auto");
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="slide">
      <h1>CSS Accordion</h1>

      <p>
        Let's focus on just the content for a second, how would you go about
        animating it?
      </p>

      <CodeSnippet>{AccordionCode}</CodeSnippet>

      <AccordionCSS
        title="I'm a naive accordion"
        closedState={{ height: "0" }}
        openState={{ height: height }}
      >
        <div className="pt-4" />
        <CodeSnippet language="scss">{heightCSS(height)}</CodeSnippet>
        <ul>
          <li>
            Animating <code>height</code> is the most straightforward
          </li>
          <li>
            Unfortunately, you can't animate <code>auto</code> in CSS
          </li>
          <li>
            What about <code>height: 100%</code>
          </li>
          {/* <li>
            Animating to fixed height works, but then you either have a very
            limited accordion or you have to use JS
          </li> */}
        </ul>
        <FormInput
          title="height"
          value={height}
          changeHandler={(e) => {
            setHeight(e.currentTarget.value);
          }}
        />
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

      <AccordionCSS
        title="I don't even work"
        closedState={{ maxHeight: "0", display: "none" }}
        openState={{ maxHeight: "1000px", display: "block" }}
      >
        <div className="pt-4" />
        <CodeSnippet language="scss">{displayNone(maxHeight)}</CodeSnippet>
        <p>
          Also a <code>max-height</code> accordion, but with{" "}
          <code>display: none</code> when closed so my lil children can't be
          focused
        </p>
        <ul>
          <li>
            Can't animate <code>display</code> in CSS
          </li>
          <li>There are some workarounds but none are pretty</li>
        </ul>
      </AccordionCSS>
    </div>
  );
}
