import colors from "daisyui/src/colors/themes";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import CodeSnippet from "~/lib/CodeSnippet";
import {
  elementProgress,
  scrollExample,
  whileInView,
  whileInViewAll,
  whileInViewHalf,
  whileInViewOnce,
} from "./codeSample";

export default function HeroBreakdown() {
  const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  const ref = useRef(null);
  const { scrollYProgress: elemProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

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
        There are two predominant types of scroll animations, both of which can
        be achieved with Framer Motion.
      </p>
      <h2>Scroll-linked animations</h2>
      <motion.div
        style={{ scaleX, originX: 0 }}
        className="fixed top-0 left-0 w-screen h-2 bg-accent z-50"
      />
      <p>
        Scroll-linked animations are when the progress of an animation is
        directly tied to the scroll progress, like <b>progress indicators</b>{" "}
        and <b>parallax effects</b>.
      </p>
      <CodeSnippet>{scrollExample}</CodeSnippet>
      <p>
        By default, useScroll tracks the page scroll, but it can be customized
        with a number of options. I think one of the most powerful aspects of
        this hook is:
      </p>
      <h3>Element position</h3>
      <p>
        We can track the progress of an element within the container by passing
        its ref to the target option.
      </p>
      <CodeSnippet>{elementProgress("start end", "start start")}</CodeSnippet>

      <motion.div
        ref={ref}
        style={{ backgroundColor: bgColor }}
        className="p-8 rounded-lg text-accent-content"
      >
        <p>Progress: {progress.toFixed(5)}</p>
        <p>offset is an array of intersections</p>
        <p>
          An intersection describes a point when the <code>target</code> and{" "}
          <code>container</code> meet. So for example, <code>"start end"</code>{" "}
          means when the start of the target meets the end of the container.
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
        By default, the element will animate back to `initial` when it leaves
        the viewport, but this can be customized with the `once` prop.
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
        Instead you can use the `amount` prop to define how much of the element
        has to intersect with the viewport in order for it to be considered
        within view.
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
        I will only animate when 50% of me is in view
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
        I will only animate when all of me is in view
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
