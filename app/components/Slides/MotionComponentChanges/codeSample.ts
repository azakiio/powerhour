export const MotionComponentCode = (data: any) =>
  `<motion.div
  className="box"
  animate={{
    x: ${data.x},
    y: ${data.y},
    scale: ${data.scale},
    rotate: ${data.rotate}
  }}
/>`
