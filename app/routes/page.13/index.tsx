import type { Variants } from "framer-motion";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import CodeSnippet from "~/lib/CodeSnippet";
import {
  closeTransitionCode,
  openTransitionCode,
  sideBar,
  sidebarVariants_v1,
} from "./codeSample";

const itemVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: -20 },
};

export default function LayoutAnimations() {
  const [isOpen, setIsOpen] = useState(false);

  const [openTransition, setOpenTransition] = useState({});
  const [closeTransition, setCloseTransition] = useState({});

  const sidebarVariants: Variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 18,
        ...openTransition,
      },
    },
    closed: {
      opacity: 0,
      x: "-100%",
      transition: { type: "spring", damping: 10, ...closeTransition },
    },
  };

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
      <CodeSnippet>{sideBar}</CodeSnippet>
      <CodeSnippet>{sidebarVariants_v1}</CodeSnippet>

      <p className="text-warning"></p>
      <div className="alert alert-info shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current flex-shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>
            Although the variants are objects, we only pass the keys to our{" "}
            <code>motion</code> props
          </span>
        </div>
      </div>

      <h2>Orchestration</h2>
      <p>
        When animating via variants, we get access to special orchestration
        props in our transition
      </p>

      <div className="grid grid-cols-2 gap-4 justify-items-start">
        <div>
          <h3 className="!mt-0">Open transition</h3>
          <figure>
            <CodeSnippet>
              {openTransitionCode(
                Object.entries(openTransition)
                  .map(([key, value]) => `${key}: ${value}`)
                  .join(",\n    ")
              )}
            </CodeSnippet>
          </figure>
          <div className="grid grid-cols-2 justify-items-start gap-4 pl-4">
            <code>delayChildren:</code>
            <input
              type="checkbox"
              className="checkbox"
              onChange={(e) =>
                setOpenTransition({
                  ...openTransition,
                  delayChildren: e.currentTarget.checked ? 1 : 0,
                })
              }
            />

            <code>staggerChildren:</code>
            <input
              type="checkbox"
              className="checkbox"
              onChange={(e) =>
                setOpenTransition({
                  ...openTransition,
                  staggerChildren: e.currentTarget.checked ? 0.1 : 0,
                })
              }
            />

            <code>when:</code>
            <input
              type="checkbox"
              className="checkbox"
              onChange={(e) =>
                setOpenTransition({
                  ...openTransition,
                  when: e.currentTarget.checked ? "beforeChildren" : false,
                })
              }
            />

            <code>staggerDirection:</code>
            <input
              type="checkbox"
              className="checkbox"
              onChange={(e) =>
                setOpenTransition({
                  ...openTransition,
                  staggerDirection: e.currentTarget.checked ? -1 : 1,
                })
              }
            />
          </div>
        </div>

        <div>
          <h3 className="!mt-0">Closed transition</h3>
          <figure>
            <CodeSnippet>
              {closeTransitionCode(
                Object.entries(closeTransition)
                  .map(([key, value]) => `${key}: ${value}`)
                  .join(",\n    ")
              )}
            </CodeSnippet>
          </figure>
          <div className="grid grid-cols-2 justify-items-start gap-4 pl-4">
            {/* <b>transition props:</b> */}

            <code>delayChildren:</code>
            <input
              type="checkbox"
              className="checkbox"
              onChange={(e) =>
                setCloseTransition({
                  ...closeTransition,
                  delayChildren: e.currentTarget.checked ? 1 : 0,
                })
              }
            />

            <code>staggerChildren:</code>
            <input
              type="checkbox"
              className="checkbox"
              onChange={(e) =>
                setCloseTransition({
                  ...closeTransition,
                  staggerChildren: e.currentTarget.checked ? 0.1 : 0,
                })
              }
            />

            <code>when:</code>
            <input
              type="checkbox"
              className="checkbox"
              onChange={(e) =>
                setCloseTransition({
                  ...closeTransition,
                  when: e.currentTarget.checked ? "afterChildren" : false,
                })
              }
            />

            <code>staggerDirection:</code>
            <input
              type="checkbox"
              className="checkbox"
              onChange={(e) =>
                setCloseTransition({
                  ...closeTransition,
                  staggerDirection: e.currentTarget.checked ? -1 : 1,
                })
              }
            />
          </div>
        </div>
      </div>

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
              <motion.button
                key={i}
                variants={itemVariants}
                className="flex items-center gap-2"
              >
                <div className="rounded-full border-2 border-primary-content w-8 h-8" />
                <div className="rounded border-2 border-primary-content w-1/2 h-4" />
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
