import { motion, Variants } from "framer-motion";
import { useState } from "react";
import CodeSnippet from "~/lib/CodeSnippet";

import { FaMinus, FaPlus } from "react-icons/fa";
import { MdAnimation } from "react-icons/md";
import { MotionComponentCode, SpringType, TweenType } from "./codeSample";
import Range from "./Range";

export default function AnimateProp() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);

  const [stiffness, setStiffness] = useState(100);
  const [damping, setDamping] = useState(10);
  const [mass, setMass] = useState(1);

  const [isStart, setStart] = useState(true);
  const [duration, setDuration] = useState(2);
  const [ease, setEase] = useState(undefined);

  const variants: Variants = {
    start: { x: 0 },
    end: { x: 500 },
  };

  return (
    <div className="slide">
      <h1>Transitions</h1>
      <b>
        The <code>transition</code> prop defines how values animate from one
        state to another.
      </b>
      <p>
        There's a whole bunch of options here, and I encourage you to check out
        the <a href="https://www.framer.com/motion/transition/">full list</a>.
        For now, we'll focus on the main ones:
      </p>

      <h2>Type</h2>
      <div className="grid grid-cols-[20%,1fr] items-center gap-4 my-6">
        <span className="text-primary font-bold">CSS Default</span>
        <motion.div
          className="w-16 h-16 bg-primary rounded-lg"
          variants={variants}
          animate={isStart ? "start" : "end"}
          transition={{ type: "tween", duration, ease: [0.25, 0.1, 0.25, 1] }}
        />

        <span className="text-secondary font-bold">Tween</span>
        <motion.div
          className="w-16 h-16 bg-secondary rounded-lg"
          variants={variants}
          animate={isStart ? "start" : "end"}
          transition={{ type: "tween", duration, ease: undefined }}
        />

        <span className="text-accent font-bold">Spring (props)</span>
        <motion.div
          className="w-16 h-16 bg-accent rounded-lg"
          variants={variants}
          animate={isStart ? "start" : "end"}
          transition={{ type: "spring", stiffness, damping, mass }}
        />
      </div>
      <div className="flex items-center gap-4">
        <button onClick={() => setStart(!isStart)} className="btn btn-square">
          GO!
        </button>
        <div className="flex flex-col items-center">
          <div className="font-bold">Duration</div>
          <div className="flex items-center gap-2">
            <button className="btn btn-sm btn-circle">
              <FaMinus />
            </button>
            <div className="font-bold">{duration}</div>
            <button className="btn btn-sm btn-circle">
              <FaPlus />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <h4 className="text-secondary]">Tween</h4>
          <ul>
            <li>
              <b>Duration & Easing</b> based transition
            </li>
            <li>
              Default for <code>color</code>, <code>opacity</code>, etc.
            </li>
          </ul>
          <CodeSnippet>{TweenType({ duration })}</CodeSnippet>
          <b>The easing curve</b>
          <p>
            This should look familiar but here's a{" "}
            <a href="https://cubic-bezier.com/">quick overview</a>
          </p>
          <p>
            My issue with easing curves is that they're hard to visualize, what
            the animation will look like just based on the parameters
          </p>
        </div>

        <div>
          <h4 className="text-accent">Spring</h4>
          <ul>
            <li>Physics based simulation</li>
            <li>
              Default for <code>x</code>, <code>scale</code>,{" "}
              <code>height</code>, etc.
            </li>
          </ul>
          <CodeSnippet>{SpringType({ stiffness, damping, mass })}</CodeSnippet>
          <p>
            Instead of specifying a duration, you provide spring parameters:
          </p>
          <div className="flex flex-col items-center z-10">
            <Range value={stiffness} set={setStiffness} min={1} max={200}>
              Stiffness
            </Range>
            <Range value={damping} set={setDamping} min={1} max={100}>
              Damping
            </Range>
            <Range value={mass} set={setMass} min={1} max={10}>
              Mass
            </Range>
          </div>
          <p>
            not only is this easier to visualize for me, but it also let's you
            animate values where a duration doesn't make sense
          </p>
        </div>
      </div>

      <figure>
        <motion.div
          className="w-60 h-60 border-4 border-primary border-dashed rounded-lg mx-auto"
          animate={{ x, y, rotate, scale }}
          transition={{ type: "spring", stiffness, damping, mass }}
        />
      </figure>

      <div className="grid grid-cols-[1fr,1fr] items-center gap-12">
        <CodeSnippet>
          {MotionComponentCode({
            x,
            y,
            scale,
            rotate,
            stiffness,
            damping,
            mass,
          })}
        </CodeSnippet>
        <div className="flex flex-col items-center z-10">
          <Range value={x} set={setX}>
            x
          </Range>
          <Range value={y} set={setY}>
            y
          </Range>
          <Range value={scale} set={setScale} min={0.5} max={2} step={0.1}>
            scale
          </Range>
          <Range value={rotate} set={setRotate} min={-180} max={180}>
            rotate
          </Range>
        </div>
      </div>
    </div>
  );
}
