import AnimateProp from "./AnimateProp";
import EnterAnimation from "./EnterAnimation";
import HeroExample from "./HeroExample";
import Intro from "./Intro";
import ListExample from "./ListExample";
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
    title: "Animate Props",
    component: <AnimateProp />,
  },
  {
    title: "List Example",
    component: <ListExample />,
  },
];
