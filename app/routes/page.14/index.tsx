import MenuExample from "~/lib/Components/Menu";

export default function LayoutAnimations() {
  return (
    <div className="slide">
      <h1>Variants</h1>
      <MenuExample />
      <p>
        Setting animate as an object is useful for simple, single-component
        animations. But sometimes we want to create animations that propagate
        throughout the DOM, and orchestrate those animations in a declarative
        way. We can do so with variants.
      </p>
    </div>
  );
}
