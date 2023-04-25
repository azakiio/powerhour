import { motion } from "framer-motion";
import Logo from "./logo";
import bg from "./street.jpg";

const links = ["Work", "Capabilities", "Careers", "About", "Contact us"];

export default function HeroExample() {
  return (
    <div className="w-full h-screen relative">
      <motion.img
        src={bg}
        className="absolute inset-0 z-[-1] h-full w-full object-cover"
        initial={{ scale: 1.5 }}
        animate={{ scale: 1, transition: { duration: 3 } }}
      />
      <motion.div
        className="absolute inset-0 bg-black/40 z-[-1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
      />
      <div className="flex flex-col items-center justify-center h-full gap-6">
        <div className="max-w-sm w-full text-white">
          <Logo />
        </div>
        <div className="flex gap-4 text-white text-lg">
          {links.map((link, i) => (
            <motion.a
              key={link}
              className="px-2 py-1 outline-current outline-2 focus-visible:outline focus-visible:rounded-lg"
              href="#"
              initial={{ opacity: 0, y: 200 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { type: "spring", delay: 7 + i * 0.2 },
              }}
            >
              {link}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
