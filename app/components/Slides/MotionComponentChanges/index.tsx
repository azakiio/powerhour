import { motion } from "framer-motion";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
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
      <div className="flex flex-wrap justify-center items-center gap-12">
        <motion.div
          className="w-60 h-60 border-4 border-primary border-dashed rounded-lg"
          animate={{ x, y, rotate, scale }}
          transition={{ type: "spring" }}
        />
        <div className="flex flex-col w-64 items-center z-10">
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
        Elements will animate when the values passed to <code>animate</code>{" "}
        change
      </p>
      <div className="text-sm overflow-auto rounded-lg ">
        <SyntaxHighlighter
          language="jsx"
          style={materialDark}
          showLineNumbers={true}
          customStyle={{ borderRadius: "1rem" }}
        >
          {MotionComponentCode}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
