import { motion, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
import { AccordionExample } from "~/lib/Examples/FramerAccordions";
import List from "~/lib/Examples/List";
import Toggle from "~/lib/Examples/Toggle";

export default function Intro() {
  const [enableAnims, setEnableAnims] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { damping: 20 });

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
        Animations allow us to visually communicate with users across cultures
        and languages.
      </p>
      <p>
        That communication can be in the form of feedback for an action taken or
        context about the current state of the application.
      </p>
      <p>
        Subtle and relevant animations minimize the mental effort required to
        use a digital product.
      </p>

      <motion.div
        style={{ scaleX, originX: 0 }}
        className="fixed top-0 left-0 w-screen h-2 bg-primary z-50"
      />
    </div>
  );
}
