import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";

export default function Accordion({ title, content }: AccordionProps) {
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
            <div className="pt-4">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function AccordionExample() {
  return (
    <div className="max-w-md">
      <Accordion
        title="I'm an Accordion"
        content="I love cheese, especially say cheese manchego. Croque monsieur cut the cheese hard cheese feta gouda paneer smelly cheese queso. Ricotta macaroni cheese cream cheese mascarpone st. agur blue cheese pepper jack chalk and cheese cheese slices. Cheeseburger mozzarella lancashire dolcelatte rubber cheese."
      />
      <Accordion
        title="Meetings 🐝"
        content="Make it a priority we don't need to boil the ocean here, let's circle back tomorrow. Pre launch we need a recap by eod, cob or whatever comes first. You must be muted, move the needle, where do we stand on the latest client ask? Today shall be a cloudy day, thanks to blue sky thinking"
      />
      <Accordion
        title="Clients ☕"
        content={`That's great, but can you make it work for ie 2. Are you busy this weekend? I know this is the final release but can we add more features. Thanks for taking the time to make the website, but i already made it in wix. Can you put "find us on facebook" by the facebook logo?`}
      />
    </div>
  );
}

type AccordionProps = {
  title: string;
  content: string;
};
