import { AccordionExample } from "~/components/Examples/Accordion";
import List from "~/components/Examples/List";
import Toggle from "~/components/Examples/Toggle";

export default function Intro() {
  return (
    <div className="slide">
      <h1>Dealing with state changes</h1>
      <p>
        Interacting with most modern websites, involves many state changes
        (usually as a result of some user action)
      </p>
      <h3>States are usually discrete or atomic.</h3>
      <figure>
        <Toggle />
        <figcaption>Flipping a toggle (on or off)</figcaption>
      </figure>
      <figure>
        <AccordionExample />
        <figcaption>Opening an accordion (open or closed)</figcaption>
      </figure>
      <figure>
        <List />
        <figcaption>
          Adding or removing an item from a list (array of current items)
        </figcaption>
      </figure>
      <p>
        By default, switching between these discrete states happens instantly.
        It's jarring and sometimes hard to keep track of what just happened.
        It's because in the real world things don't just appear and vanish or
        teleport to new locations.
      </p>
      <Toggle />
      <p>
        Animation adds a vital human touch to digital interfaces by simulating
        the experience of interacting with a physical object in real life.
      </p>
      This makes for an easier, more natural experience for the user, and
      reduces cognitive load. From point A to B, UI animations act as
      signposts—oftentimes so subtle that you wouldn’t even know they were
      there. Animation also reduces stress by providing real-time updates and
      feedback, keeping the user informed at all times.
      <p>
        feedback for Micro-interactions keeping users informed of Navigation
        Storytelling and branding
      </p>
      <p>
        The possible states of your system are largely dictated by the
        requirements of the application. What we have control over is how to go
        between these given states.
      </p>
      <p>
        The point of animation is to <b>transition</b>between these atomic
        states
      </p>
    </div>
  );
}
