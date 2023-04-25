import { useState } from "react";
import { AccordionExample } from "~/lib/Examples/FramerAccordions";
import List from "~/lib/Examples/List";
import Toggle from "~/lib/Examples/Toggle";

export default function AnimationsBreakdown() {
  const [enableAnims, setEnableAnims] = useState(false);

  return (
    <div className="slide">
      <h1>Why Animations?</h1>
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
      </p>
      <blockquote>
        Fundamentally, an animation consists of a set of possible states, and how to transition
        between those states
      </blockquote>
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
