import CodeSnippet from "~/lib/CodeSnippet";
import { gsapExample, reactSpring } from "./codeSample";

export default function Outro() {
  return (
    <div className="slide !max-w-screen-lg">
      <h1>When to use Framer</h1>
      <div className="grid grid-cols-2">
        <div>
          <h4 className="!text-primary">Pros</h4>
          <ul>
            <li>Clean declarative syntax</li>
            <li>
              Able to animate many common patterns
              <ul>
                <li>Mounting/Unmounting animations</li>
                <li>Layout animations</li>
                <li>Scroll-based animations</li>
                <li>Orchestration</li>
              </ul>
            </li>
            <li>
              Very solid support
              <ul>
                <li>Backed by a company</li>
                <li>
                  Popular and large community{" "}
                  <em>(2 Million npm downloads per week)</em>
                </li>
              </ul>
            </li>
            <li>SSR compatible</li>
          </ul>
        </div>
        <div>
          <h4 className="!text-accent">Cons</h4>
          <ul>
            <li>Extra bundle size</li>
            <li>
              Somewhat couples your animations and structure (compared to GSAP
              like syntax)
            </li>
            <li>React only</li>
          </ul>
        </div>
      </div>

      <h2>Alternatives</h2>
      <p>
        <a href="https://airbnb.design/lottie/">Lottie</a> for SVGs
      </p>
      <p>Pure CSS for most gestures (hover, focus, active, etc.)</p>
      <p>
        <a href="https://greensock.com/">GSAP</a>,{" "}
        <a href="https://animejs.com/">anime.js</a>,{" "}
        <a href="https://motion.dev/">motion-on</a>e, for non-react animations
      </p>

      <div className="flex gap-4">
        <CodeSnippet>{reactSpring}</CodeSnippet>
        <CodeSnippet>{gsapExample}</CodeSnippet>
      </div>
    </div>
  );
}
