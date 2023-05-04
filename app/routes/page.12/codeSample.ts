export const codeSample1 = `<motion.div
  className="circle"
  animate={{
    scale: 1,
    borderRadius: "0%",
    rotate: 0,
    backgroundColor: primary,
  }}
  whileHover={{
    scale: 1.2,
    borderRadius: "25%",
    rotate: 0,
    backgroundColor: secondary,
  }}
  whileTap={{
    scale: 0.9,
    borderRadius: "50%",
    rotate: 90,
  }}
/>`;

export const codeSample2 = `<motion.div
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1, transition: { type: "spring" } }}
  className="w-40 h-40 rounded-full bg-primary"
/>`;
