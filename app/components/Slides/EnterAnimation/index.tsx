import { motion } from "framer-motion";
import { useState } from "react";
import CodeSnippet from "~/components/CodeSnippet";
import { codeSample1 } from "./codeSample";
import { GrRotateLeft } from "react-icons/gr";

export default function EnterAnimation() {
  const [reset, setReset] = useState(0);
  const [active, setActive] = useState(false);

  return (
    <div className="slide">
      <h1>Intro Animations</h1>
      <p>
        When a <code>motion</code> component is mounted, it will automatically animate to the values
        in <code>animate</code> if they're different from what's defined in <code>style</code> or{" "}
        <code>initial</code>.
      </p>
      <section className="flex gap-10 items-stretch">
        <figure
          className="flex flex-col justify-between items-center flex-[1]"
          style={{ marginBottom: "0.5em" }}>
          <motion.div
            key={reset}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { type: "spring" },
            }}
            className="w-40 h-40 rounded-full bg-primary"
          />
          <button
            className="btn btn-primary btn-square self-end"
            onClick={() => setReset(reset + 1)}>
            <GrRotateLeft className="text-lg" />
          </button>
        </figure>
        <CodeSnippet style={{ flex: "1" }}>{codeSample1}</CodeSnippet>
      </section>
      <p>
        Think of initial and animate as CSS objects that define the starting state and ending state
        of your animation.
      </p>

      <h4>Before we go on, can we just appreciate how simple it can be.</h4>
      <ul>
        <li>clean declarative syntax (no css classes)</li>
        <li>looks very smooth out of the box (no easings/duration)</li>
      </ul>
      <button onClick={() => setActive(!active)}>Start</button>
      <div className="cssBox" style={{ transform: `translateX(${active ? "200" : "0"}px)` }}></div>
      <div className="cssBox" style={{ transform: `translateX(${active ? "200" : "0"}px)` }}></div>
    </div>
  );
}
