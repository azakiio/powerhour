export const codeSample1 = `<motion.div
  className="circle"
  initial={{ 
    scale: 0, 
    opacity: 0 
  }}
  animate={{ 
    scale: 1, 
    opacity: 1 
  }}
/>`;

export const codeSample2 = `<motion.div
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1, transition: { type: "spring" } }}
  className="w-40 h-40 rounded-full bg-primary"
/>`;
