import { motion } from "framer-motion";
import { useState } from "react";

export default function EnterAnimation() {
  const [reset, setReset] = useState(0);

  return (
    <div className="prose-bg">
      <h1>Enter Animation</h1>
      <p>
        When a <code>motion</code> component is mounted, it'll automatically animate to the values
        in <code>animate</code> if they're different from those defined in <code>style</code> or{" "}
        <code>initial</code>.
      </p>
      <figure>
        <motion.div
          key={reset}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { type: "spring" } }}
          className="w-40 h-40 rounded-full bg-primary"
        />
      </figure>
      <button onClick={() => setReset(reset + 1)}>reset</button>
      <p>You can set the initial prop to false to disable enter animations.</p>
    </div>
  );
}
