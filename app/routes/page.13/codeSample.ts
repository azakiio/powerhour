export const motionProps = `<motion.div
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

export const sideBar = `<AnimatePresence>
  {isOpen && (
    <motion.div
      className="sidebar"
      variants={sidebarVariants}
      initial="closed"
      animate="open"
      exit="closed"
    >
      {menuItems.map((item) => (
        <motion.div 
          key={item.id} 
          variants={itemVariants}
        >
          {item.name}
        </motion.div>
      ))}
    </motion.div>
  )}
</AnimatePresence>`;

export const sidebarVariants_v1 = `const sidebarVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 20,
    },
  },
  closed: {
    opacity: 0,
    x: "-100%",
  },
};

const itemVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 20 },
};`;
