import { useState } from "react";
import { AccordionExample } from "~/lib/Examples/FramerAccordions";
import List from "~/lib/Examples/List";
import Toggle from "~/lib/Examples/Toggle";

export default function Intro() {
  const [enableAnims, setEnableAnims] = useState(false);

  return (
    <div className="slide">
      <h1>Why Animations?</h1>
      <p>
        Interacting with most modern websites, involves many state changes.
        Usually, as a result of some user action.
      </p>
      <h3>States are discrete</h3>
      <figure>
        <Toggle enabled={enableAnims} />
        <figcaption>Flipping a toggle (on or off)</figcaption>
      </figure>
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
      <h4>
        By default, switching between these discrete states happens instantly.
      </h4>
      <p>
        It's jarring and sometimes hard to keep track of what just happened.
        Things in the real world don't behave like that
      </p>
      <div>
        Let's enable animations and try those examples again.
        <Toggle active={enableAnims} setActive={setEnableAnims} />
      </div>
      <p>
        In design psychology, there's this idea of{" "}
        <a href="https://www.uxpin.com/studio/blog/cognitive-psychology-for-ux-design/">
          cognitive load
        </a>
        {", "}
        which essentially means the amount of mental effort required to interact
        with your application. Animations, when done well, can reduce that
        cognitive load by providing context, familiarity, and consistency.
      </p>
      <p>
        By simulating the experience of interacting with (familiar) physical
        objects, the interface becomes more pleasant to work with.
      </p>
    </div>
  );
}
