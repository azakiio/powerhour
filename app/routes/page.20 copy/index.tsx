import { useEffect, useState } from "react";
import CodeSnippet from "~/lib/CodeSnippet";
import {
  reactCode,
  toast_v1,
  toast_v2,
  toast_v3,
  uglyReact,
} from "./codeSample";
import { GiToaster } from "react-icons/gi";
import Toast from "./Toast";
import AccordionTitle from "~/lib/Components/AccordionTitle";

export default function ToastExample() {
  // const [animState, setAnimState] = useState<0 | 1 | 2 | 3>(0);
  const [toastsRight, setToastsRight] = useState(1);
  const [toastsLeft, setToastsLeft] = useState(0);

  return (
    <div className="slide">
      <h1>When to use Framer Motion</h1>

      <h4>Pros</h4>
      <ul>
        <li>Declarative syntax is intuitive to learn and use</li>
        <li>Lots of powerful features that would be hard to animate in CSS</li>
        <ul>
          <li>Mounting and Unmounting animations</li>
          <li>Layout Animations</li>
        </ul>
      </ul>
    </div>
  );
}
