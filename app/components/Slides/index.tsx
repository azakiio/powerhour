import Outline from "./0_Outline";
import Intro from "./1_WhyAnimations";
import CssExamples from "./2_CssAnimations";
import MotionComponent from "./4_MotionComponent";
import IntroAnimation from "./4_IntroAnimation";
import IntroExample from "./3_AccordionCSS";
import AnimateProp from "./AnimateProp";
import Gestures from "./Gestures";
import ListExample from "./ListExample";
import ListExampleMotion from "./ListExampleMotion";
let uid = 0;

export const slides = [
  <Outline key={uid++} />,
  <Intro key={uid++} />,
  <CssExamples key={uid++} />,
  <IntroExample key={uid++} />,
  <MotionComponent key={uid++} />,
  <IntroAnimation key={uid++} />,
  // <HeroExample key={uid++} />,
  // <HeroBreakdown key={uid++} />,
  <AnimateProp key={uid++} />,
  <ListExample key={uid++} />,
  <ListExampleMotion key={uid++} />,
  <Gestures key={uid++} />,
];
