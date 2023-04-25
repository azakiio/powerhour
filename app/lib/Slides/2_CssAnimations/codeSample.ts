const states = {
  0: `.box-state-0 {
    transition-duration: 1s;
    transform: translateX(0px)
    background-color: $color-primary;
  }`,
  1: `.box-state-1 {
    transition-duration: 1s;
    transform: translateX(20vmin) rotate(45deg);
    background-color: $color-secondary;
  }`,
  2: `.box-state-2 {
    transition-duration: 3s;
    transform: translateX(40vmin) rotate(90deg);
    background-color: $color-accent;
  }`,
  3: `.box-state-3 {
    transition-duration: 1s;
    transform: translateX(60vmin) rotate(135deg);
    background-color: $color-neutral;
  }`,
};

export const multipleStates = (state: 0 | 1 | 2 | 3) => `.box {
  transition-property: transform;
  transition-duration: 2s;
  transition-timing-function: ease;  /* default */
  transition-delay: 0s;   /* default */
}

${states[state]}`;

export const oneState = `.box {
  transition-property: all;
  width: 5rem;
  height: 5rem;
  border-radius: $rounded-lg;
  background-color: $color-primary
}

.box-initial {
  transition-duration: 0.5s;
  transform: scale(0);
  opacity: 0;
}

.box-visible {
  transition-duration: 1s;
  transform: scale(1);
  opacity: 1;
};`;
