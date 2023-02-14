import AnimateProp from "./AnimateProp";
import CssExamples from "./CssAnimations";
import EnterAnimation from "./EnterAnimation";
import Gestures from "./EnterAnimation copy";
import HeroBreakdown from "./HeroBreakdown";
import HeroExample from "./HeroExample";
import Intro from "./Intro";
import ListExample from "./ListExample";
import ListExampleMotion from "./ListExampleMotion";
import MotionComponent from "./MotionComponent";
import Outline from "./Outline";

export const slides = [
  {
    title: "Outline",
    component: <Outline />,
  },
  {
    title: "Intro",
    component: <Intro />,
  },
  {
    title: "CSS",
    component: <CssExamples />,
  },
  {
    title: "Motion Component",
    component: <MotionComponent />,
  },
  {
    title: "Entry Animation",
    component: <EnterAnimation />,
  },
  {
    title: "Hero Animation",
    component: <HeroExample />,
  },
  {
    title: "Hero Breakdown",
    component: <HeroBreakdown />,
  },
  {
    title: "Animate Props",
    component: <AnimateProp />,
  },
  {
    title: "List Example",
    component: <ListExample />,
  },
  {
    title: "List Example Proper",
    component: <ListExampleMotion />,
  },
  {
    title: "Gestures",
    component: <Gestures />,
  },
];
