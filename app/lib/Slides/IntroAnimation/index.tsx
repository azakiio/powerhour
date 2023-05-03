import { motion } from "framer-motion";

import { useState } from "react";
import { GrRotateLeft } from "react-icons/gr";
import CodeSnippet from "~/lib/CodeSnippet";
import { codeSample1 } from "./codeSample";

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
            transition={{ delay: 1 }}
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
      <p>
        Our animation states are <code>initial</code> and <code>animate</code>
      </p>
      <p>
        Our trigger here is <code>onMount</code>
      </p>
      <p>What about the transition?</p>
    </div>
  );
}
