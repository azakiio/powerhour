
import { useState } from "react";
import { AccordionCSSExample } from "~/components/Examples/AccordionCss";

export default function IntroExample() {
  const [reset, setReset] = useState(0);
  const [active, setActive] = useState(false);

  return (
    <div className="slide">
      <h1>Intro Animations</h1>
      <AccordionCSSExample />
    </div>
  );
}
