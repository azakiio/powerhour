import type { Variants } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaHamburger } from "react-icons/fa";
import CodeSnippet from "~/lib/CodeSnippet";
import MenuExample, { MenuToggle } from "~/lib/Components/Menu";
import { sideBar, sidebarVariants_v1 } from "./codeSample";

const sidebarVariants: Variants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 18,
    },
  },
  closed: {
    opacity: 0,
    x: "-100%",
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: -20 },
};

export default function LayoutAnimations() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="slide !max-w-screen-lg">
      <h1>Variants</h1>
      <p>So far, we've been setting our motion props like this:</p>
      <CodeSnippet>{`<motion.div initial={{ x: -100 }} animate={{ x: 0 }} />`}</CodeSnippet>
      <p>
        Usings objects is useful for simple, single-component animations.
        However, it can start to get messy when you have multiple animating
        components.
      </p>
      <p>
        <code>variants</code> can help clean up our code by making common
        animations reusable, but that's not the main reason why they are so
        useful.
      </p>

      <h2>Let's build a sidebar</h2>
      <div className="flex gap-8">
        <CodeSnippet>{sideBar}</CodeSnippet>
        <CodeSnippet>{sidebarVariants_v1}</CodeSnippet>
      </div>

      <p>
        Notice we are passing string into our motion props now rather than
        objects
      </p>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-2 left-2 z-30 btn btn-circle btn-ghost"
      >
        <FaBars />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="bg-primary h-screen w-72 fixed left-0 top-0 shadow-xl p-8 pt-16 flex flex-col gap-4"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
          >
            {[...Array(10).keys()].map((i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-center gap-2"
              >
                <div className="rounded-full border-2 border-primary-content w-8 h-8" />
                <div className="rounded border-2 border-primary-content w-1/2 h-4" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
