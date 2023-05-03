export const modalSample = `<AnimatePresence>
  {isOpen && (
    <motion.div
      className="overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="content"
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 300 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>`;

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
