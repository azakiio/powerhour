import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { FaCaretDown } from "react-icons/fa";

export default function AccordionMotion({
  title,
  children,
  enabled = true,
}: AccordionProps) {
  const [active, setActive] = useState(false);

  return (
    <div className="border-b py-4">
      <button
        onClick={() => setActive(!active)}
        className="flex items-center justify-between w-full"
      >
        <div className="text-lg font-bold">{title}</div>
        <motion.div
          animate={{
            rotate: active ? -180 : 0,
            transition: enabled ? { type: "spring" } : { duration: 0 },
          }}
          className="text-xl"
        >
          <FaCaretDown />
        </motion.div>
      </button>
      <AnimatePresence>
        {active && (
          <motion.div
            className="overflow-clip"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={
              enabled ? { type: "spring", damping: 20 } : { duration: 0 }
            }
          >
            <div className="pt-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

type AccordionProps = {
  title: string;
  children: ReactNode;
  enabled?: boolean;
};
