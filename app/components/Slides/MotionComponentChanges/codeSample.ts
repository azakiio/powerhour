export const MotionComponentCode = `<div className="container">
  <motion.div
    className="box"
    animate={{ x, y, rotate }}      // Pass react state to motion component
    transition={{ type: "spring" }} // We will come back to this
  />
  
  <div className="inputs">
    <Input value={x} set={setX}>
      x
    </Input>
    <Input value={y} set={setY}>
      y
    </Input>
    <Input value={rotate} set={setRotate} min={-180} max={180}>
      rotate
    </Input>
  </div>
</div>;`;
