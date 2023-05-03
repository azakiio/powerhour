import Outline from "./0_Outline";
import WhyAnimations from "./1_WhyAnimations";
import HowToAnimate from "./2_HowToAnimate";
import ToastExample from "./4_ToastExample";
import NaiveAccordion from "./5_NaiveAccordion";
import AccordionExample from "./6_AccordionExample";

import AnimateProp from "./AnimateProp";
import AnimatePresenceExample from "./Carousel";
import FramerAccordion from "./FramerAccordion";
import Gestures from "./Gestures";
import HeroBreakdown from "./HeroBreakdown";
import IntroAnimation from "./IntroAnimation";
import LayoutAnimations from "./LayoutAnimations";
import ListExample from "./ListExample";
import ListExampleMotion from "./ListExampleMotion";
import MotionComponent from "./MotionComponent";
import MenuExample from "./Variants";
let uid = 0;

export const slides = [
  <Outline key={uid++} />,
  <WhyAnimations key={uid++} />,
  <HowToAnimate key={uid++} />,
  // <HeroExample key={uid++} />,
  <NaiveAccordion key={uid++} />,
  <AccordionExample key={uid++} />,
  <MotionComponent key={uid++} />,
  <IntroAnimation key={uid++} />,
  <FramerAccordion key={uid++} />,
  <AnimatePresenceExample key={uid++} />,
  <AnimateProp key={uid++} />,
  <ListExampleMotion key={uid++} />,
  // <ToastExample key={uid++} />,

  // <HeroBreakdown key={uid++} />,
  // <ListExampleMotion key={uid++} />,
  <Gestures key={uid++} />,
  <LayoutAnimations key={uid++} />,
  // <MenuExample key={uid++} />,
];
