import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import CodeSnippet from "~/lib/CodeSnippet";
import { framer_v1, framer_v2 } from "./codeSample";

export default function FramerAccordion() {
  const [reset, setReset] = useState(0);
  const [isOpen1, setOpen1] = useState(false);
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen3, setOpen3] = useState(false);
  const [isOpen4, setOpen4] = useState(false);

  return (
    <div className="slide">
      <h1>Framer Accordion</h1>

      <p>
        Let's look at how we can animate Accordions in framer by taking
        advantage of the default mounting animation
      </p>

      <div className="border-b py-4">
        <button
          onClick={() => setOpen1(!isOpen1)}
          className="flex items-center justify-between w-full"
        >
          <div className="text-lg font-bold">Naive Accordion (again)</div>
          <motion.div
            animate={{
              rotate: isOpen1 ? -180 : 0,
            }}
            transition={{ duration: 1 }}
            className="text-xl"
          >
            <FaCaretDown />
          </motion.div>
        </button>
        {isOpen1 && (
          <motion.div
            className="overflow-hidden"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 1 }}
          >
            <div>
              <CodeSnippet>{framer_v1}</CodeSnippet>
              <ul>
                <li>It can be that easy</li>
                <li>Animate using a conditional render for the contents</li>
                <li>
                  Framer motion can animate <code>auto</code>
                </li>
                <li>But what about closing?</li>
              </ul>
            </div>
          </motion.div>
        )}
      </div>

      <div className="border-b py-4">
        <button
          onClick={() => setOpen2(!isOpen2)}
          className="flex items-center justify-between w-full"
        >
          <div className="text-lg font-bold">Exit Animation</div>
          <motion.div
            animate={{
              rotate: isOpen2 ? -180 : 0,
            }}
            transition={{ duration: 1 }}
            className="text-xl"
          >
            <FaCaretDown />
          </motion.div>
        </button>
        <AnimatePresence>
          {isOpen2 && (
            <motion.div
              className="overflow-hidden"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="pt-4">
                <CodeSnippet>{framer_v2}</CodeSnippet>
                <p>
                  It's required to enable exit animations because React lacks a
                  lifecycle method that:
                </p>
                <ul>
                  <li>
                    Notifies components when they're going to be unmounted and
                  </li>
                  <li>
                    Allows them to defer that unmounting until after an
                    operation is complete (for instance an animation)
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
