import { motion } from "framer-motion";
import { useState } from "react";
import colors from "daisyui/src/colors/themes";
import CodeSnippet from "~/lib/CodeSnippet";
import { ButtonExample } from "./codeSample";

export default function Gestures() {
  const [gestureState, setGestureState] = useState({
    hover: "",
    tap: "",
    drag: "",
  });

  return (
    <div className="slide">
      <h1>Gestures</h1>
      <figure className="flex justify-center items-center">
        <motion.div
          animate={{
            scale: 1,
            borderRadius: "0%",
            rotate: 0,
            backgroundColor: colors["[data-theme=emerald]"].primary,
          }}
          whileHover={{
            scale: 1.2,
            borderRadius: "25%",
            rotate: 0,
            backgroundColor: colors["[data-theme=emerald]"].secondary,
          }}
          whileTap={{
            scale: 0.9,
            borderRadius: "50%",
            rotate: 90,
          }}
          onHoverStart={() =>
            setGestureState({ ...gestureState, hover: "started" })
          }
          onHoverEnd={() =>
            setGestureState({ ...gestureState, hover: "ended" })
          }
          onTapStart={() =>
            setGestureState({ ...gestureState, tap: "started" })
          }
          onTapCancel={() =>
            setGestureState({ ...gestureState, tap: "cancelled" })
          }
          onTap={() => setGestureState({ ...gestureState, tap: "successful" })}
          transition={{ type: "spring" }}
          className="w-40 h-40 bg-primary"
        />
      </figure>
      <p>
        <code>whileHover</code>:{" "}
        <span className="font-bold">{gestureState.hover} </span>
      </p>
      <p>
        <code>whileTap</code>:{" "}
        <span className="font-bold">{gestureState.tap} </span>
      </p>
      {/* <p>Drag: {gestureState.drag} </p> */}
      <p>
        Motion components automatically manage the interplay between these{" "}
        <code>while</code> props.
      </p>
      <p>
        e.g. if hovering starts and stops while the tap gesture is active, the
        tap gesture receives priority and any properties defined on both will
        remain in their tapped state.
      </p>
      <h2>Fancy Buttons</h2>
      <div className="flex gap-4 justify-between">
        <motion.button
          className="px-4 py-2 bg-secondary rounded self-center text-secondary-content"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring" }}
        >
          Bouncy Button
        </motion.button>
        <CodeSnippet>{ButtonExample}</CodeSnippet>
      </div>
    </div>
  );
}
