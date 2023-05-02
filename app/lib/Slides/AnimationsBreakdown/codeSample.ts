import { kebabCase } from "lodash-es";

const states = {
  0: `.box-state-0 {
  transform: translateX(0)
  background-color: $color-primary;
}`,
  1: `.box-state-1 {
  transform: translateX(20vmin) rotate(45deg);
  background-color: $color-secondary;
}`,
  2: `.box-state-2 {
  transform: translateX(40vmin) rotate(90deg);
  background-color: $color-accent;
}`,
  3: `.box-state-3 {
  transform: translateX(60vmin) rotate(135deg);
  background-color: $color-neutral;
}`,
};

export const multipleStates = (
  state: 0 | 1 | 2 | 3,
  transitionObject: Object
) => `.box {
  width: 5rem;
  height: 5rem;
  border-radius: $rounded-lg;
  ${Object.entries(transitionObject)
    .map(([key, value]) => `${kebabCase(key)}: ${value};`)
    .join("\n  ")}
}

${states[state]}`;
