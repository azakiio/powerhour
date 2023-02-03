import { motion } from "framer-motion";
import { useState } from "react";
import CodeSnippet from "~/components/CodeSnippet";

import { MotionComponentCode } from "./codeSample";
import Input from "./Input";

export default function MotionComponentChanges() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);

  return (
    <div className="prose w-full prose-code:bg-base-200">
      <h1>
        The <code>animate</code> prop
      </h1>
      <figure>
        <motion.div
          className="w-60 h-60 border-4 border-primary border-dashed rounded-lg mx-auto"
          animate={{ x, y, rotate, scale }}
          transition={{ type: "spring" }}
        />
      </figure>
      <div className="grid grid-cols-[2fr,1fr] items-center gap-12">
        <CodeSnippet>{MotionComponentCode({ x, y, scale, rotate })}</CodeSnippet>
        <div className="flex flex-col items-center z-10">
          <Input value={x} set={setX}>
            x
          </Input>
          <Input value={y} set={setY}>
            y
          </Input>
          <Input value={scale} set={setScale} min={0.5} max={2} step={0.1}>
            scale
          </Input>
          <Input value={rotate} set={setRotate} min={-180} max={180}>
            rotate
          </Input>
        </div>
      </div>
      <p>
        Elements will animate when the values passed to <code>animate</code> change
      </p>
    </div>
  );
}