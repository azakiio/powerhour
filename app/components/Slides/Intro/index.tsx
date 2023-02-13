import { useState } from "react";
import { AccordionExample } from "~/components/Examples/Accordion";
import List from "~/components/Examples/List";
import Toggle from "~/components/Examples/Toggle";

export default function Intro() {
  const [enableAnims, setEnableAnims] = useState(false);

  return (
    <div className="slide">
      <h1>Why Animations?</h1>
      <p>
        Interacting with most modern websites, involves many state changes. Usually, as a result of
        some user action.
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
        <figcaption>Adding or removing an item from a list (array of current items)</figcaption>
      </figure>
      <h4>By default, switching between these discrete states happens instantly.</h4>
      <p>
        It's jarring and sometimes hard to keep track of what just happened. Things in the real
        world don't behave like that
      </p>
      {/* It's because in the real world things don't just appear and vanish or teleport to new locations. */}
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
        which essentially means the amount of mental effort required to interact with your
        application. Animations, when done well, can reduce that cognitive load by providing
        context, familiarity, and consistency.
      </p>
      <p>
        By simulating the experience of interacting with (familiar) physical objects, the interface
        becomes more pleasant to work with.
      </p>
      <h4>Animations can be broken down into 5 categories</h4>
      <ul>
        <li>Micro-interactions</li>
        <li>State changes</li>
        <li>Structure & Navigation</li>
        <li>Loading and progress</li>
        <li>Branding & Storytelling</li>
      </ul>
      <p>
        Ok we talked about why animations are important but let's talk about how we can animate
        things
      </p>
      <p>
        Although <code>state changes</code> is a category here, all of these animations involve some
        sort of state change at some level.
        <blockquote>
          Fundamentally, an animation consists of a set of possible states, and how to transition
          between those states
        </blockquote>
      </p>
      <p>Imagine you are trying to design a multi-purpose animation library. What would you do?</p>
      <li>
        The possible states of your system are often times dictated by the requirements of the
        application. So, the library should be able to animate between any given set of states
      </li>
      <li>Sensible API for specifying how to transitions between states</li>

      <p>Let's look at how it's done in CSS</p>
    </div>
  );
}
