import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "./logo";
import bg from "./street.jpg";

const links = ["Work", "Capabilities", "Careers", "About", "Contact us"];

export default function HeroBreakdown() {
  const [reset, setReset] = useState(0);

  return (
    <div className="slide">
      <h1>Hero Breakdown</h1>
      <div className="w-[32rem] relative overflow-clip">
        <motion.img
          src={bg}
          className="w-full"
          initial={{ scale: 1.5 }}
          animate={{ scale: 1, transition: { duration: 3 } }}
        />
        <motion.div
          className="absolute inset-0 bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }}
        />
      </div>
    </div>
  );
}
