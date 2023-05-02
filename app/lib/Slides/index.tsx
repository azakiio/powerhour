import Outline from "./0_Outline";
import Intro from "./1_WhyAnimations";
import CssExamples from "./4_Toast";
import IntroExample from "./3_AccordionCSS";
import IntroAnimation from "./4_IntroAnimation";
import MotionComponent from "./4_MotionComponent";
import AnimateProp from "./AnimateProp";
import AnimationsBreakdown from "./2_How_to_animate";
import Gestures from "./Gestures";
import HeroBreakdown from "./HeroBreakdown";
import HeroExample from "./3_HeroExample";
import LayoutAnimations from "./LayoutAnimations";
import ListExample from "./ListExample";
import ListExampleMotion from "./ListExampleMotion";
import MenuExample from "./Variants";
let uid = 0;

export const slides = [
  <Outline key={uid++} />,
  <Intro key={uid++} />,
  <AnimationsBreakdown key={uid++} />,
  <HeroExample key={uid++} />,
  <CssExamples key={uid++} />,
  <MotionComponent key={uid++} />,
  <IntroAnimation key={uid++} />,
  <IntroExample key={uid++} />,
  <HeroBreakdown key={uid++} />,
  <AnimateProp key={uid++} />,
  <ListExample key={uid++} />,
  <ListExampleMotion key={uid++} />,
  <Gestures key={uid++} />,
  <LayoutAnimations key={uid++} />,
  <MenuExample key={uid++} />,
];
