export const reactSpring = `import { useSpring, animated } from '@react-spring/web'

function MyComponent() {
  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  )

  return <animated.div style={props}>Hello World</animated.div>
}`;

export const gsapExample = `gsap.to(".box", {rotation: 27, x: 100, duration: 1});`;
