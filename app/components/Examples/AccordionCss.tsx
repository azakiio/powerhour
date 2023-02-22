import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

export default function AccordionCSS({
  title,
  content,
  enabled,
}: AccordionProps) {
  const [active, setActive] = useState(false);

  return (
    <div className="border-b py-4">
      <button
        onClick={() => setActive(!active)}
        className="flex items-center justify-between w-full"
      >
        <div className="text-lg font-bold">{title}</div>
        <div className="text-xl">
          <FaCaretDown />
        </div>
      </button>
      {/* <AnimatePresence> */}
      {/* {active && ( */}
      <div className="overflow-hidden test">
        <div
          className={`duration-[2s] ease-linear relative hello`}
          style={{ top: "25%" }}
        >
          {content}
        </div>
      </div>
      {/* )} */}
      {/* </AnimatePresence> */}
    </div>
  );
}

export function AccordionCSSExample({ enabled = true }) {
  return (
    <div className="max-w-md">
      <AccordionCSS
        enabled={enabled}
        title="I'm a negative margin accordion"
        content="animate from margin 0 to -100%. The problem is margin is based on the element's width"
      />
      <AccordionCSS
        enabled={enabled}
        title="I'm a max-height accordion"
        content="animate max-height from 0 to some large number. Problem is duration and therefore easing are off"
      />
      <AccordionCSS
        enabled={enabled}
        title="I'm a fixed height accordion"
        content="animate height from 0 to a fixed number. Animation is correct but problem is you are forced to use a fixed height."
      />
      {/* <AccordionCSS
        enabled={enabled}
        title="Meetings 🐝"
        content="Make it a priority we don't need to boil the ocean here, let's circle back tomorrow. Pre launch we need a recap by eod, cob or whatever comes first. You must be muted, move the needle, where do we stand on the latest client ask? Today shall be a cloudy day, thanks to blue sky thinking"
      />
      <AccordionCSS
        enabled={enabled}
        title="Clients ☕"
        content={`That's great, but can you make it work for ie 2. Are you busy this weekend? I know this is the final release but can we add more features. Thanks for taking the time to make the website, but i already made it in wix. Can you put "find us on facebook" by the facebook logo?`}
      /> */}
    </div>
  );
}

type AccordionProps = {
  title: string;
  content: string;
  enabled?: boolean;
};
