import { motion } from "framer-motion";
import { useState } from "react";
import { GrRotateLeft } from "react-icons/gr";

export default function Gestures() {
  const [reset, setReset] = useState(0);

  return (
    <div className="slide">
      <h1>Drag</h1>
      <p>
        A component can be made draggable with the addition of the drag prop. Lock it to either axis
        by setting drag to "x" or "y".
      </p>
      <p>
        The component can be constrained to a specific range, defined either in pixels, or by
        providing a ref to another DOM element.
      </p>
      <p>
        These constraints are elastic, and the strength of this elasticity can be configured with
        the dragElastic prop.
      </p>
    </div>
  );
}
