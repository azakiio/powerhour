export const MotionComponentCode = (data: any) =>
  `<motion.div
  className="box"
  animate={{
    x: ${data.x},
    y: ${data.y},
    scale: ${data.scale},
    rotate: ${data.rotate}
  }}
  transition={{ 
    type: "spring", 
    stiffness: ${data.stiffness}, 
    damping: ${data.damping}, 
    mass: ${data.mass} 
  }}
/>`;

export const TweenType = (data: any) =>
  `<motion.div
  transition={{ 
    type: "tween",
    duration: ${data.duration},
    ease: ${data.ease}, 
  }}
/>`;

export const SpringType = (data: any) =>
  `<motion.div
  transition={{ 
    type: "spring", 
    stiffness: ${data.stiffness}, 
    damping: ${data.damping}, 
    mass: ${data.mass} 
  }}
/>`;
