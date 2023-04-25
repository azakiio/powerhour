import { motion } from "framer-motion";
import { useState } from "react";
import colors from "daisyui/src/colors/themes";

export default function Gestures() {
  const [gestureState, setGestureState] = useState({
    hover: "",
    tap: "",
    drag: "",
  });

  return (
    <div className="slide">
      <h1>Gestures</h1>
      <section className="flex gap-10 items-stretch">
        <figure className="flex flex-col justify-between items-center flex-[1]">
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
            onTap={() =>
              setGestureState({ ...gestureState, tap: "successful" })
            }
            transition={{ type: "spring" }}
            className="w-40 h-40 bg-primary"
          />
        </figure>
      </section>
      <p>Hover: {gestureState.hover} </p>
      <p>Tap: {gestureState.tap} </p>
      {/* <p>Drag: {gestureState.drag} </p> */}
      <p>
        <code>motion</code> components automatically manage the interplay
        between these <code>while</code> props. So for instance, if hovering
        starts and stops while the tap gesture is active, the tap gesture
        receives priority and any properties defined on both will remain in
        their tapped state.
      </p>

      <p>
        Likewise, if both gestures are defined and tapping ends, the component
        will know to animate either to the state defined in{" "}
        <code>whileHover</code>, or the component's original state, depending on
        whether tapping ends inside or outside of the component.
      </p>
    </div>
  );
}
