import { CSSProperties, ReactNode, useState } from "react";
import { FaCaretDown } from "react-icons/fa";

export default function AccordionCSS({
  title,
  children,
  closedState,
  openState,
}: Props) {
  const [active, setActive] = useState(false);

  return (
    <div className="border-b py-4">
      <button
        onClick={() => setActive(!active)}
        className="flex items-center justify-between w-full"
      >
        <div className="text-lg font-bold">{title}</div>
        <div
          className="text-xl duration-1000"
          style={active ? { rotate: "-180deg" } : { rotate: "0deg" }}
        >
          <FaCaretDown />
        </div>
      </button>
      <div className="overflow-hidden">
        <div className="duration-1000" style={active ? openState : closedState}>
          {children}
        </div>
      </div>
    </div>
  );
}

type Props = {
  title: string;
  children: ReactNode;
  closedState: CSSProperties;
  openState: CSSProperties;
};
