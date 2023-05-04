import figmaLogo from "./figma.svg";
import framerTimeline from "./timeline.png";
import webflowLogo from "./webflow.svg";
import framerLogo from "./framer.webp";
import motionLogo from "./motion.webp";
import { FaEquals, FaPlusCircle } from "react-icons/fa";

export default function MotionComponent() {
  return (
    <div className="slide">
      <h1 className="text-center">Framer Motion</h1>
      <img src={motionLogo} className="w-20 mx-auto" />
      <p>
        <b>
          A production-ready declarative motion library for React. Created and
          maintained by{" "}
          <a href="https://www.framer.com/" target="_blank" rel="noreferrer">
            Framer
          </a>
        </b>
      </p>

      <h2>What is Framer?</h2>

      <img src={framerTimeline} />

      <ol>
        <li>
          Framer started as a technical prototyping tool for designers who could
          code.
        </li>

        <li>
          Added a visual canvas so everyone could use it and became a
          collaborative web application.
        </li>

        <li>
          Added ability to ship your designs directly from the canvas to
          production.
        </li>
      </ol>

      <p>
        <b>Basically:</b>
      </p>
      <div className="not-prose flex items-center gap-4 justify-center">
        <img src={figmaLogo} className="w-16" alt="Figma" />
        <FaPlusCircle className="w-6 h-6" />
        <img src={webflowLogo} className="w-16" alt="Webflow" />
        <FaEquals className="w-6 h-6" />
        <img src={framerLogo} className="w-20" alt="Framer" />
      </div>

      <p>
        <b>Framer</b> is a paid product, but its animations and interactions are
        powered by <b>Framer Motion</b> which is{" "}
        <a href="https://github.com/framer/motion">open-source</a> and sitting
        at 18.5k stars on GitHub.
      </p>
    </div>
  );
}
