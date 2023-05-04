export default function Outline() {
  return (
    <div className="slide">
      <h1>Outline</h1>
      <blockquote className="text-base-content/80">
        Use <kbd className="kbd kbd-sm">{`[`}</kbd>
        {` and `}
        <kbd className="kbd kbd-sm">{"]"}</kbd> to navigate between pages
      </blockquote>
      <h3>Simple Animations</h3>
      <ul>
        <li>
          The <code>animate</code> Prop
        </li>
        <li>
          Enter animations + Transitions
          <ul>
            <li>Why springs are better than easing curves</li>
            <li>Property specific transitions</li>
          </ul>
        </li>
        <li>
          List example (Exit animations)
          <ul>
            <li>
              In React, when a component is removed from the tree, it's removed
              instantly.
            </li>
            <li>
              <code>{`<AnimatePresence />`}</code> Component keep components in
              the DOM while they perform an exit animation.
            </li>
          </ul>
        </li>
        <li>
          <b>Design Pattern:</b> Accordion
        </li>
        <li>Keyframes - (idle animations)</li>
      </ul>
      <h3>Gestures</h3>
      <ul>
        <li>
          Respond to <code>hover</code>, <code>tap</code> and <code>focus</code>{" "}
          with animations
          <ul>
            <li>Interactive example</li>
            <li>Gesture Events</li>
            <li>Use-cases (why not use css here?)</li>
            <li>
              <a href="https://dribbble.com/shots/3773846-Hero-Image-freebie-Radio">
                example
              </a>
            </li>
            <ul>
              <li>Spring physics</li>
              <li>
                Propagation (more on this in <b>Variants</b>)
              </li>
            </ul>
          </ul>
        </li>
        <li>
          The <code>inView</code> state (scroll based animations)
          <ul>
            <li>
              why are scroll animations such a pain (dealing with offsets)
            </li>
            <li>smart animation conditions (intersection observer)</li>
          </ul>
        </li>
        <li>
          <code>drag</code> and <code>pan</code> gestures
          <ul>
            <li>
              Drag props (directionLock, dragConstraints, dragElastic) + example
            </li>
          </ul>
        </li>
      </ul>
      <h3>Variants</h3>
      <ul>
        <li>What are variants</li>
        <li>
          Propagation
          <ul>
            <li>
              If a motion component has children, changes in variant will flow
              down through the component hierarchy until a child component
              defines its own <code>animate</code> property.
            </li>
          </ul>
        </li>
        <li>
          Orchestration
          <ul>
            <li>
              <code>when</code>, <code>delayChildren</code>, and{" "}
              <code>staggerChildren</code>
            </li>
          </ul>
        </li>
        <li>
          Dynamic Variants
          <ul>
            <li>
              <b>Design Pattern:</b> Carousel
            </li>
          </ul>
        </li>
      </ul>
      <h3>Layout Animations</h3>
      <ul>
        <li>Introduction</li>
        <li>Layout Prop</li>
        <li>
          Shared Layout (<code>{`<LayoutGroup />`}</code>)
        </li>
        <li>Reorder</li>
      </ul>
    </div>
  );
}
