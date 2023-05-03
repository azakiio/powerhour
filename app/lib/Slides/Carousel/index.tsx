import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";
import CodeSnippet from "~/lib/CodeSnippet";
import { modalSample } from "./codeSample";

const images = [
  "https://images.unsplash.com/photo-1658171757201-41b9aa2b3651?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1658184145200-3358c3338585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  "https://images.unsplash.com/photo-1658186309018-1e3b880acd0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1658193624919-50e49d7847e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1572816703439-d8b34c4dc93f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80",
  "https://images.unsplash.com/photo-1658901097742-98954bfd9b4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1191&q=80",
  "https://images.unsplash.com/photo-1658901097917-f3e4f3cb5f1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80",
  "https://images.unsplash.com/photo-1642320009030-ff80041e25ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80",
  "https://images.unsplash.com/photo-1658901097893-cfe9605ca208?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1192&q=80",
  "https://images.unsplash.com/photo-1659039288596-45cf0fbaee51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1658730335794-c5edd544ccbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

export default function AnimatePresenceExample() {
  const [isOpen, setOpen] = useState(false);
  const [activeIndex, setIndex] = useState(0);

  return (
    <div className="slide">
      <h1>AnimatePresence</h1>
      <p>
        <code>AnimatePresence</code> works by detecting when{" "}
        <b>direct children</b> are removed from the React tree.
      </p>
      <p>
        Any <code>motion</code> components contained by the removed child that
        have an <code>exit</code> prop will fire that animation before the
        entire tree is finally removed from the DOM.
      </p>
      <button className="btn btn-primary btn-sm" onClick={() => setOpen(true)}>
        Open Modal
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="inset-0 bg-black/80 fixed flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", damping: 20, bounce: 0 }}
          >
            <motion.div
              className="max-w-lg bg-white px-8 py-4 rounded-lg w-full relative min-h-[40vh] flex flex-col"
              initial={{ opacity: 0, y: -300 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 300 }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className="flex justify-between">
                <div className="font-bold text-lg mx-auto">Modal Example</div>
                <button
                  className="btn btn-sm btn-circle absolute top-4 right-4"
                  onClick={() => setOpen(false)}
                >
                  X
                </button>
              </div>
              <CodeSnippet>{modalSample}</CodeSnippet>
              <p>
                This is by no means a complete modal implementation, but it
                illustrates how both <code>exit</code> animations are triggered
                when the modal is unmounted.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <p>
        In React, changing a component's <code>key</code> makes React treat it
        as an entirely new component. So the old one is unmounted before the new
        one is mounted. So by changing the <code>key</code> of a single child of{" "}
        <code>AnimatePresence</code>, we can easily make components like
        slideshows.
      </p>

      <div className="relative w-80 aspect-video">
        <AnimatePresence initial={false}>
          <motion.img
            key={images[activeIndex]}
            src={images[activeIndex]}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="absolute !m-0 w-80 aspect-video object-cover"
          />
        </AnimatePresence>
      </div>
      <button onClick={() => setIndex((activeIndex + 1) % images.length)}>
        Next
      </button>
    </div>
  );
}
