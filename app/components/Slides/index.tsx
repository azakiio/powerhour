import EnterAnimation from "./EnterAnimation";
import Intro from "./Intro";
import ListExample from "./ListExample";
import MotionComponent from "./MotionComponent";
import MotionComponentChanges from "./MotionComponentChanges";
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
    title: "Motion Components",
    component: <MotionComponentChanges />,
  },
  {
    title: "Entry Animation",
    component: <EnterAnimation />,
  },
  {
    title: "List Example",
    component: <ListExample />,
  },
];
