import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { FaCaretDown } from "react-icons/fa";

export default function AccordionTitle({ title, children }: AccordionProps) {
  const [active, setActive] = useState(false);

  return (
    <p>
      <button
        onClick={() => setActive(!active)}
        className="flex items-center gap-4"
      >
        <h2 className="!m-0">{title}</h2>
        <motion.div
          animate={{
            rotate: active ? -180 : 0,
            transition: { type: "spring" },
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
            transition={{ type: "spring", damping: 20 }}
          >
            <div className="pt-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </p>
  );
}

type AccordionProps = {
  title: string;
  children: ReactNode;
  enabled?: boolean;
};
