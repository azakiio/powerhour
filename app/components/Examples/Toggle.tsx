import { motion } from "framer-motion";
import { useState } from "react";

export default function Toggle() {
  const [active, setActive] = useState(false);

  return (
    <motion.button
      onClick={() => setActive(!active)}
      className={`flex w-10 rounded-xl`}
      animate={{
        backgroundColor: active ? "hsl(141.18 50% 60%)" : "hsl(219.23 20.312% 25.098% / 0.3)",
      }}
      style={{
        justifyContent: active ? "flex-end" : "flex-start",
      }}>
      <motion.div layout={true} className={`w-4 h-4 m-1 rounded-full bg-white`} />
    </motion.button>
  );
}
