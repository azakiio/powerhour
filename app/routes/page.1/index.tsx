import { useState } from "react";
import CodeSnippet from "~/lib/CodeSnippet";
import { AccordionExample } from "~/lib/Examples/FramerAccordions";
import List from "~/lib/Examples/List";
import Toggle from "~/lib/Examples/Toggle";
import { sideBar } from "../page.13/codeSample";

export default function Intro() {
  const [enableAnims, setEnableAnims] = useState(false);

  return (
    <div className="slide">
      <h1>Why Animations?</h1>
      <p>
        Essentially, animations allow us to communicate with users without text
        and across cultures and languages.
      </p>
      <p>
        Interacting with most modern websites, involves many state changes.
        Usually, as a result of some user action.
      </p>
      <h3>States are discrete</h3>
      <figure>
        <Toggle enabled={enableAnims} />
        <figcaption>Flipping a toggle (on or off)</figcaption>
      </figure>

      <h3>Switching between these states happens instantly.</h3>
      <figure>
        <AccordionExample enabled={enableAnims} />
        <figcaption>Opening an accordion (open or closed)</figcaption>
      </figure>
      <figure>
        <List enabled={enableAnims} />
        <figcaption>
          Adding or removing an item from a list (array of current items)
        </figcaption>
      </figure>
      <p>
        Let's enable animations and try those examples again.
        <Toggle active={enableAnims} setActive={setEnableAnims} />
      </p>
      <p>
        That communication can come in the form of feedback for an action, (like
        shown above) or just keeping the user informed of what's happening.
      </p>
      <p>
        Animations (when done well) minimize the mental effort required to use a
        digital product by providing context, familiarity, and consistency.
      </p>
    </div>
  );
}
