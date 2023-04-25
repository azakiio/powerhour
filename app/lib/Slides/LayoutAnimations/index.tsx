import { useState } from "react";
import CodeSnippet from "~/lib/CodeSnippet";
import { AccordionExample } from "~/lib/Examples/FramerAccordions";
import List from "~/lib/Examples/List";
import Toggle from "~/lib/Examples/Toggle";

export default function LayoutAnimations() {
  return (
    <div className="slide">
      <h1>Layout Animations</h1>
      <p>CSS layouts are difficult and expensive to animate.</p>
      <p>
        Animating a style like <code>height</code> between <code>100px</code> and <code>500px</code>{" "}
        is conceptually straightforward, but suffers from poor performance because we're triggering
        the browser layout systems every animation frame.
      </p>
      <p>
        Sometimes it doesn't even make sense. What does it actually mean to animate{" "}
        <code>justify-content</code>
        between <code>flex-start</code> and <code>flex-end</code>? Framer Motion can animate between
        any CSS layout by using performant transforms instead of the layout system.
      </p>
      <p>
        To enable Framer Motion's layout animations, we simply set the layout prop of a motion
        component.
      </p>
      <CodeSnippet>{`<motion.div layout />`}</CodeSnippet>
      Any layout change that happens as the result of a re-render will be animated. That could be
      any combination of:
      <ul>
        <li>Reordering of a list. </li>
        <li>A style set on the component itself, for example a change in width or position. </li>
        <li>A change in the parent's layout, e.g. flexbox or grid.</li>
        <li>Or any other change in the component's layout.</li>
      </ul>
      <List />
    </div>
  );
}
