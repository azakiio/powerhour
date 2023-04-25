import { motion } from "framer-motion";
import { paths } from "./logoPaths";

export default function Logo() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="299.5 0 193 31"
      stroke="currentColor"
      strokeWidth={1}
    >
      {paths.map((path, i) => (
        <motion.path
          key={i}
          initial={{ pathLength: 0, fill: "#FFFFFF00" }}
          animate={{
            pathLength: 1,
            fill: "#FFFFFFFF",
            transition: {
              pathLength: {
                delay: 1 + 0.3 * i,
                duration: 4,
              },
              fill: { delay: 6, duration: 1 },
            },
          }}
          d={path}
        />
      ))}
    </motion.svg>
  );
}
