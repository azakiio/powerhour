import { motion } from "framer-motion";
import { useState } from "react";
import { GrRotateLeft } from "react-icons/gr";

export default function Gestures() {
  const [reset, setReset] = useState(0);

  return (
    <div className="slide">
      <h1>Gestures</h1>
      <section className="flex gap-10 items-stretch">
        <figure
          className="flex flex-col justify-between items-center flex-[1]"
          style={{ marginBottom: "0.5em" }}>
          <motion.div
            key={reset}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="w-40 h-40 rounded-full bg-primary"
          />
        </figure>
      </section>
    </div>
  );
}
