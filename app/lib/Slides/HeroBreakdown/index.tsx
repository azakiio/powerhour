import { motion } from "framer-motion";
import { useState } from "react";
import { GrRotateLeft } from "react-icons/gr";
import CodeSnippet from "~/lib/CodeSnippet";
import { paths } from "../HeroExample/logoPaths";
import { BackgroundCode, LinksCode } from "./codeSample";
import Logo from "./logo";
import bg from "./street.jpg";

const links = ["Work", "Capabilities", "Careers", "About", "Contact us"];
const examples = [
  { title: "Background", component: <Example1 /> },
  { title: "Links", component: <Example2 /> },
  { title: "Logo", component: <Example3 /> },
];

export default function HeroBreakdown() {
  const [exampleIndex, setExampleIndex] = useState(0);

  return (
    <div className="slide">
      <h1>Hero Breakdown</h1>
      <div className="flex gap-4 justify-center">
        {examples.map(({ title }, i) => (
          <button key={title} onClick={() => setExampleIndex(i)} className="btn btn-sm">
            {title}
          </button>
        ))}
      </div>
      {examples[exampleIndex].component}
    </div>
  );
}

function Example1() {
  const [reset, setReset] = useState(0);
  return (
    <>
      <figure key={`bg-${reset}`} className="relative overflow-clip rounded-xl mx-auto">
        <motion.img
          src={bg}
          className="w-full"
          initial={{ scale: 1.5 }}
          animate={{ scale: 1, transition: { duration: 3 } }}
        />
        <motion.div
          className="absolute inset-0 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4, transition: { duration: 2 } }}
        />
        <button
          onClick={() => setReset(reset + 1)}
          className="absolute bottom-4 right-4 btn btn-ghost btn-circle btn-sm text-white">
          <GrRotateLeft className="text-lg" />
        </button>
      </figure>
      <CodeSnippet>{BackgroundCode}</CodeSnippet>
    </>
  );
}

function Example2() {
  const [reset, setReset] = useState(0);
  return (
    <>
      <figure key={`bg-${reset}`} className="w-[32rem] relative rounded-xl mx-auto border-4">
        <div className="flex gap-4 text-white text-lg pt-8 pb-14 justify-center">
          {links.map((link, i) => (
            <motion.a
              key={link}
              className="px-2 py-1 outline-current outline-2 focus-visible:outline focus-visible:rounded-lg"
              href="#"
              initial={{ opacity: 0, y: 200 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1 + i * 0.2, type: "spring" },
              }}>
              {link}
            </motion.a>
          ))}
        </div>
        <button
          onClick={() => setReset(reset + 1)}
          className="absolute bottom-1 right-1 btn btn-ghost btn-circle btn-sm">
          <GrRotateLeft className="text-lg" />
        </button>
      </figure>
      <CodeSnippet>{LinksCode}</CodeSnippet>
    </>
  );
}

function Example3() {
  const [reset, setReset] = useState(0);
  return (
    <>
      <figure key={`bg-${reset}`} className="w-[32rem] relative rounded-xl mx-auto py-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="299.5 0 193 31"
          stroke="#000"
          strokeWidth={1}>
          {paths.map((path, i) => (
            <motion.path
              key={i}
              initial={{ pathLength: 0, fill: "#00000000" }}
              animate={{
                pathLength: 1,
                fill: "#000000FF",
                transition: {
                  pathLength: {
                    delay: 1 + 0.3 * i,
                    duration: 4,
                  },
                  fill: { delay: 6, duration: 1 },
                },
              }}
              d={path}
            />
          ))}
        </svg>
        <button
          onClick={() => setReset(reset + 1)}
          className="absolute bottom-1 right-1 btn btn-ghost btn-circle btn-sm">
          <GrRotateLeft className="text-lg" />
        </button>
      </figure>
      <CodeSnippet>{LinksCode}</CodeSnippet>
    </>
  );
}
