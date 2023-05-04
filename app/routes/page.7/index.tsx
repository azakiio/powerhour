import { motion } from "framer-motion";
import { useState } from "react";
import { GrRotateLeft } from "react-icons/gr";
import CodeSnippet from "~/lib/CodeSnippet";
import { codeSample1, codeSample2 } from "./codeSample";
import accordionImg from "./accordion.svg";

export default function IntroAnimations() {
  const [reset, setReset] = useState(0);
  const [active, setActive] = useState(false);

  return (
    <div className="slide">
      <h1>Intro Animations</h1>
      <p>
        When a <code>motion</code> component is mounted, it will automatically
        animate to the values in <code>animate</code> if they're different from
        what's defined in <code>style</code> or <code>initial</code>.
      </p>

      <section className="flex gap-10 items-stretch">
        <figure
          className="flex flex-col justify-between items-center flex-[1]"
          style={{ marginBottom: "0.5em" }}
        >
          <motion.div
            key={reset}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{ type: "spring", duration: 0.3 }}
            className="w-40 h-40 rounded-full bg-primary"
          />
          <button
            className="btn btn-primary btn-square self-end"
            onClick={() => setReset(reset + 1)}
          >
            <GrRotateLeft className="text-lg" />
          </button>
        </figure>
        <CodeSnippet style={{ flex: "1" }}>{codeSample1}</CodeSnippet>
      </section>
      <h4>States</h4>
      <p>
        To animate something you, define the starting state in{" "}
        <code>initial</code> and the visible state in <code>animate</code>
      </p>

      <h4>Transitions</h4>
      <p>
        Motion components also accept a <code>transition</code> prop which is
        similar to a css transition but with a few differences.
      </p>
      <p>One of them is the default value:</p>
      <CodeSnippet language="js">{codeSample2}</CodeSnippet>
      <p>
        By default, Motion will create an appropriate animation for a snappy
        transition based on the types of value being animated.
        <ul>
          <li>
            Physical properties like <code>x</code> or <code>scale</code> will
            be animated via a <b>spring simulation.</b>
          </li>
          <li>
            Whereas values like <code>opacity</code> or <code>color</code> will
            be animated with a <b>tween</b> (regular css transition).
          </li>
        </ul>
        <p>More on this later</p>
      </p>

      <h4>Triggers</h4>
      <p>
        Animation is triggered <code>onMount</code>{" "}
        <img src={accordionImg} className="w-6 inline-flex !my-0 ml-2" />
      </p>
    </div>
  );
}
