export const scrollExample = `const { scrollYProgress } = useScroll()

return <motion.div style={{ scaleX: scrollYProgress }} />`;

export const elementProgress = (
  offset1 = "",
  offset2 = ""
) => `const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["${offset1}", "${offset2}"]
  })
  
  return  <div ref={ref}>`;

export const whileInView = `<motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
  />`;
export const whileInViewOnce = `<motion.div
  initial={{ opacity: 0, x: -100 }}
  whileInView={{
    opacity: 1,
    x: 0,
    transition: { delay: 1 },
  }}
  viewport={{ once: true }}
/>`;

export const whileInViewHalf = `<motion.div
  initial={{ opacity: 0, x: -100 }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  viewport={{ amount: 0.5 }}
/>`;

export const whileInViewAll = `<motion.div
  initial={{ opacity: 0, x: -100 }}
  whileInView={{
    opacity: 1,
    x: 0,
  }}
  viewport={{ amount: 1 }}
/>`;
