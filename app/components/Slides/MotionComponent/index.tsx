export default function MotionComponent() {
  return (
    <div className="prose">
      <h1>Motion Components</h1>
      <p>
        Motion components are DOM primitives optimised for 60fps animation and
        gestures.
      </p>
      <p>
        There's a motion component for every HTML and SVG element, for instance
        motion.div, motion.circle etc.
      </p>
      <p>
        These work exactly like their static counterparts, but offer props that
        allow you to:
      </p>
      <ul>
        <li>Animate via a simple prop.</li>
        <li>Add drag, pan, hover and tap gestures.</li>
        <li>Respond to gestures with animations.</li>
        <li>Deeply animate throughout React trees via variants.</li>
      </ul>
    </div>
  );
}
