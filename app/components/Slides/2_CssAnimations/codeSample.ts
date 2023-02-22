const states = {
  0: `.box-state-0 {
    transition-duration: 1s;
    transform: translateX(0px, 0)
    background-color: $primary-color;
  }`,
  1: `.box-state-1 {
    transition-duration: 1s;
    transform: translateX(20vmin) rotate(45deg);
    background-color: $secondary-color;
  }`,
  2: `.box-state-2 {
    transition-duration: 3s;
    transform: translateX(40vmin) rotate(90deg);
    background-color: $accent-color;
  }`,
  3: `.box-state-3 {
    transition-duration: 1s;
    transform: translateX(60vmin) rotate(135deg);
    background-color: $neutral-color;
  }`,
};

export const multipleStates = (state: 0 | 1 | 2 | 3) => `.box {
  transition-property: transform;
  transition-duration: 2s;
  transition-timing-function: ease;  /* default */
  transition-delay: 0s;   /* default */
}

${states[state]}`;

export const oneState = `.box-invisible {
  transition-duration: 0.5s;
  transform: scale(0);
  opacity: 0;
}

.box-visible {
  transition-duration: 0.5s;
  transform: scale(1);
  opacity: 1;
}`;
