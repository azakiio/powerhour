import { AnimatePresence, Variants, motion } from "framer-motion";
import Logo from "./logo";
import bg from "./street.jpg";
import { useState } from "react";

const links = ["About", "States", "Transitions", "Triggers", "Cons"];

const variants: Variants = {
  initial: { height: 0, opacity: 0 },
  animate: { height: "auto", opacity: 1 },
  exit: { height: 0, opacity: 0 },
};

export default function HeroExample() {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className="w-full h-screen relative overflow-hidden">
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
            <motion.button
              key={link}
              className="px-2 py-1 outline-current outline-2 focus-visible:outline focus-visible:rounded-lg"
              onClick={() => setActiveTab(link)}
              initial={{ opacity: 0, y: 200 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { type: "spring", delay: 7 + i * 0.2 },
              }}
            >
              {link}
            </motion.button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          {activeTab === "About" && (
            <motion.div
              key={activeTab}
              className="prose text-white"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <p>
                This is what most people think of when they hear{" "}
                <b>Intro Animation.</b> The states and transitions here are bit
                more involved, and we'll go over them in detail later on. But
                what I want to focus on two things here:
              </p>
              <p>
                <b>The Trigger:</b> How does the animation start?
              </p>
              <p>
                <b>The Animation:</b> Animation is like salt, the right amount
                can make a dish shine, too much will spoil it.
              </p>
            </motion.div>
          )}
          {activeTab === "Cons" && (
            <motion.div
              key={activeTab}
              className="prose text-white"
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <p>
                This animation may be cool the first few times, but will get
                frustrating pretty quickly. Why? Animations are powerful because
                they draw attention, but doing so without a purpose is just
                distracting. Also, people don't like to wait before interacting
                with a site.
              </p>
              <ul>
                <li>
                  Ask yourself, what purpose this animation has (usability VS
                  aesthetics)
                </li>
                <li>
                  If you do have a long animation, make sure it doesn't block
                  user interactions.
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
