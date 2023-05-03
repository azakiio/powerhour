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

export const framer_v1 = `{isOpen && (
  <motion.div             
    initial={{ height: 0 }}
    animate={{ height: "auto" }}
    transition={{ duration: 1 }}
  >
    {children}
  </motion.div>
)}`;

export const framer_v2 = `<AnimatePresence>
  {isOpen && (
    <motion.div             
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  )}
</AnimatePresence>`;
