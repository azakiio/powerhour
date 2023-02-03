import CodeSnippet from "~/components/CodeSnippet";
import { codeSample } from "./codeSample";

export default function MotionComponent() {
  return (
    <div className="prose-bg">
      <h1>
        The <code>{`<motion />`}</code> Component
      </h1>
      {/* <h3>The bread and butter of this library.</h3> */}
      <h4>
        Motion components are DOM primitives optimised for <b>animations</b> and <b>gestures</b>.
      </h4>
      <p>There's a motion component for every HTML and SVG element</p>
      <CodeSnippet>{codeSample}</CodeSnippet>
      <h4>They work exactly like their static counterparts, but offer props for:</h4>
      <ul>
        <li>Simple Animations</li>
        <li>
          Responding to <code>hover</code>, <code>tap</code>, <code>drag</code> and <code>pan</code>{" "}
          gestures
        </li>
        <li>Animate elements entering the viewport</li>
        <li>Deeply animate throughout React trees via variants</li>
      </ul>
      <small>
        notes: The motion component is the bread and butter of this library. Think of it as a plain
        HTML or SVG element, supercharged with animation capabilities. Animating a dom element comes
        down to converting it to the corresponding motion component. And passing props
      </small>
    </div>
  );
}
