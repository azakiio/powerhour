import colors from "daisyui/src/colors/themes";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import CodeSnippet from "~/lib/CodeSnippet";
import {
  animatingBackground,
  elementProgress,
  scrollExample,
  whileInView,
  whileInViewAll,
  whileInViewHalf,
  whileInViewOnce,
} from "./codeSample";

import bgImage from "./paralaxBg.jpg";

export default function HeroBreakdown() {
  const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { damping: 20 });

  const bgColorRef = useRef(null);
  const parallaxRef = useRef(null);
  const { scrollYProgress: elemProgress } = useScroll({
    target: bgColorRef,
    offset: ["start end", "start start"],
  });

  const { scrollYProgress: parallaxProgress } = useScroll({
    target: parallaxRef,
    offset: ["start end", "end start"],
  });

  const parallaxSpring = useSpring(parallaxProgress, { damping: 20 });

  const parallaxDistance = useTransform(parallaxSpring, [0, 1], ["0%", "100%"]);

  elemProgress.on("change", (v) => setProgress(v));

  const bgColor = useTransform(
    elemProgress,
    [0, 1],
    [
      colors["[data-theme=emerald]"].secondary,
      colors["[data-theme=emerald]"].accent,
    ]
  );

  return (
    <div className="slide">
      <h1>Scroll animations</h1>
      <p>
        There are two main types of scroll animations, both of which can be
        achieved with Framer Motion.
      </p>
      <h2>Scroll-linked animations</h2>
      <motion.div
        style={{ scaleX, originX: 0 }}
        className="fixed top-0 left-0 w-screen h-2 bg-primary z-50"
      />
      <p>
        Scroll-linked animations are when the progress of an animation is
        directly tied to the scroll progress, like <b>progress indicators</b>{" "}
        and <b>parallax effects</b>.
      </p>
      <CodeSnippet>{scrollExample}</CodeSnippet>
      <p>
        By default, <code>useScroll</code> tracks the page scroll, but it can be
        customized with a number of options. I think one of the most powerful
        aspects of this hook is:
      </p>
      <h3>Element position</h3>
      <p>
        We can track the progress of an element within the container by passing
        its ref to the target option.
      </p>
      <CodeSnippet>{elementProgress("start end", "start start")}</CodeSnippet>

      <motion.div
        ref={bgColorRef}
        style={{ backgroundColor: bgColor }}
        className="px-8 py-4 my-4 rounded-lg text-accent-content"
      >
        <p>Progress: {progress.toFixed(5)}</p>
        <p>
          <code>offset</code> is an array of intersections
        </p>
        <p>
          An intersection describes a point when the <code>target</code> and{" "}
          <code>container</code> meet. So for example, <code>"start end"</code>{" "}
          means when the start of the target meets the end of the container.
        </p>
        <CodeSnippet>{animatingBackground}</CodeSnippet>
      </motion.div>

      <motion.div
        ref={parallaxRef}
        style={{
          // translateY: parallaxDistance,
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(https://picsum.photos/1600/900)`,
          backgroundSize: "cover",
          backgroundPositionY: parallaxDistance,
        }}
        className="px-8 py-4 my-4 rounded-lg text-white"
      >
        <p>I'm a simple parallax background</p>
        <p>
          Same idea as before, but instead of <code>useTransform</code> to a
          color, we transform to a <code>translateY</code> value
        </p>
        <p>
          Notice how we parallax across the whole viewport, because our{" "}
          <code>offset</code> here is <code>["start end", "end start"]</code>
        </p>
      </motion.div>

      <h2>Scroll-triggered animations</h2>
      <p>
        Scroll-triggered animations are normal animations that start when an
        element enters or leaves the viewport.
      </p>
      <p>
        The <code>whileInView</code> prop can be used to create scroll-triggered
        animations by defining a set of properties to animate to when the
        element is in view.
      </p>
      <motion.figure
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { type: "spring", damping: 18 },
        }}
      >
        <CodeSnippet>{whileInView}</CodeSnippet>
      </motion.figure>

      <p>
        By default, the element will animate back to <code>initial</code> when
        it leaves the viewport, but this can be customized with the{" "}
        <code>once</code> prop.
      </p>
      <motion.figure
        initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { type: "spring", damping: 18, delay: 1 },
        }}
        viewport={{ once: true }}
      >
        <CodeSnippet>{whileInViewOnce}</CodeSnippet>
      </motion.figure>
      <p>
        You may be tempted to add a delay to your animation to make sure enough
        of your element is in view before it animates.
      </p>

      <p>
        It's generally bad practice to make users wait for animations to finish
        before they can see your content.
      </p>

      <p>
        Instead you can use the <code>amount</code> prop to define how much of
        the element has to intersect with the viewport in order for it to be
        considered within view.
      </p>
      <motion.figure
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{ type: "spring", damping: 18 }}
        viewport={{ amount: 0.5 }}
      >
        I will only animate when <b>50% of me</b> is in view
        <CodeSnippet>{whileInViewHalf}</CodeSnippet>
      </motion.figure>

      <motion.figure
        initial={{ opacity: 0, x: -100 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{ type: "spring", damping: 18 }}
        viewport={{ amount: 1 }}
      >
        I will only animate when <b>all of me</b> is in view
        <CodeSnippet>{whileInViewAll}</CodeSnippet>
      </motion.figure>
      <p>
        <code>whileInView</code> uses{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
          target="_blank"
          rel="noreferrer"
        >
          Intersection Observer
        </a>{" "}
        under the hood, but with a declarative syntax
      </p>
    </div>
  );
}
