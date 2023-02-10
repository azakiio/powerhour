import Accordion, { AccordionExample } from "~/components/Examples/Accordion";
import List from "~/components/Examples/List";
import Toggle from "~/components/Examples/Toggle";

export default function Intro() {
  return (
    <div className="slide">
      <h1>Dealing with state changes</h1>
      <p>
        Interacting with most modern websites, involves many state changes (usually as a result of
        some user action)
      </p>
      <p>States are usually discrete or atomic.</p>
      <ul>
        <li>Flipping a toggle (on or off)</li>
        <li>Opening an accordion (open or closed)</li>
        <li>Adding or removing an item from a list (array of current items)</li>
        <li>Going through a Carousel (active index)</li>
      </ul>
      <Toggle />
      <AccordionExample />
      <List />
      <p>
        By default, switching between these discrete states happens instantly. As you can see, it
        can be quite jarring and sometimes even disorienting
      </p>
      <p>
        The point of animation is to <b>transition</b>between these atomic states
      </p>
      <p>
        Animation adds a vital human touch to digital interfaces by simulating the experience of
        interacting with a physical object in real life.
      </p>
      This makes for an easier, more natural experience for the user, and reduces cognitive load.
      From point A to B, UI animations act as signposts—oftentimes so subtle that you wouldn’t even
      know they were there. Animation also reduces stress by providing real-time updates and
      feedback, keeping the user informed at all times.
      <p>
        feedback for Micro-interactions keeping users informed of Navigation Storytelling and
        branding
      </p>
      <p>
        The possible states of your system are largely dictated by the requirements of the
        application. What we have control over is how to go between these given states.
      </p>
    </div>
  );
}
