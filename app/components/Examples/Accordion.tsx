import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";

export default function Accordion({ title, content }: AccordionProps) {
  const [active, setActive] = useState(false);

  return (
    <div className="border-b py-4">
      <button
        onClick={() => setActive(!active)}
        className="flex items-center justify-between w-full">
        <div className="text-lg font-bold">{title}</div>
        <motion.div
          animate={{ rotate: active ? -180 : 0, transition: { type: "spring" } }}
          className="text-xl">
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
            transition={{ type: "spring", damping: 20 }}>
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
        title="Also an accordion"
        content="I love cheese, especially say cheese manchego. Croque monsieur cut the cheese hard cheese feta gouda paneer smelly cheese queso. Ricotta macaroni cheese cream cheese mascarpone st. agur blue cheese pepper jack chalk and cheese cheese slices. Cheeseburger mozzarella lancashire dolcelatte rubber cheese."
      />
      <Accordion
        title="I'm just here to complete the trifecta"
        content="Parmesan feta cheeseburger. Gouda feta st. agur blue cheese fromage frais paneer feta lancashire camembert de normandie. Bocconcini jarlsberg brie monterey jack when the cheese comes out everybody's happy cheese and wine lancashire chalk and cheese. Cheddar."
      />
    </div>
  );
}

type AccordionProps = {
  title: string;
  content: string;
};
