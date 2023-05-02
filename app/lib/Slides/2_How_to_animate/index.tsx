import { CSSProperties, useState } from "react";
import CodeSnippet from "~/lib/CodeSnippet";
import FormInput from "~/lib/Components/FormInput";
import { multipleStates } from "./codeSample";

export default function AnimationsBreakdown() {
  const [animState, setAnimState] = useState<0 | 1 | 2 | 3>(0);
  const [transitionObject, setTransitionObject] = useState<CSSProperties>({});

  return (
    <div className="slide">
      <h1>How to Animate</h1>
      {/* <h4>Animations can be broken down into 5 categories</h4>
      <ul>
        <li>Micro-interactions</li>
        <li>State changes</li>
        <li>Structure & Navigation</li>
        <li>Loading and progress</li>
        <li>Branding & Storytelling</li>
      </ul> */}
      <blockquote>
        Fundamentally, an animation consists of a set of possible states, and
        how to transition between those states
      </blockquote>
      <h2>1. States</h2>
      <p>
        These are the possible states, like before, they are discrete and state
        changes happen instantly
      </p>
      <figure>
        <div
          className={`box box-state-${animState}`}
          style={transitionObject}
        />
        <div className="btn-group pt-6">
          <button onClick={() => setAnimState(0)} className="btn btn-sm">
            State 0
          </button>
          <button onClick={() => setAnimState(1)} className="btn btn-sm">
            State 1
          </button>
          <button onClick={() => setAnimState(2)} className="btn btn-sm">
            State 2
          </button>
          <button onClick={() => setAnimState(3)} className="btn btn-sm">
            State 3
          </button>
        </div>
      </figure>

      <CodeSnippet language="scss">
        {multipleStates(animState, transitionObject)}
      </CodeSnippet>
      <h2>2. Transitions</h2>
      {/* TODO: convert to accordion title */}
      <ul>
        <li>
          The <code>transition</code> property specifies how to transition
          between the states
        </li>
        <li>
          It takes 4 parameters, but only <code>transition-duration</code> is
          required
        </li>
        <li>
          I've always heard <code>transition-property</code> was required, but
          it defaults to <code>all</code>{" "}
          <em>(though you should still set it explicitly)</em>
        </li>
      </ul>

      <div className="flex flex-col gap-2">
        <FormInput
          title="transition-property"
          value={transitionObject?.transitionProperty as string}
          changeHandler={(e) =>
            setTransitionObject({
              ...transitionObject,
              transitionProperty: e.currentTarget.value,
            })
          }
        />
        <FormInput
          title="transition-duration"
          value={transitionObject?.transitionDuration as string}
          changeHandler={(e) =>
            setTransitionObject({
              ...transitionObject,
              transitionDuration: e.currentTarget.value,
            })
          }
        />
        <FormInput
          title="transition-timing-function"
          value={transitionObject?.transitionTimingFunction as string}
          changeHandler={(e) =>
            setTransitionObject({
              ...transitionObject,
              transitionTimingFunction: e.currentTarget.value,
            })
          }
        />
        <FormInput
          title="transition-delay"
          value={transitionObject?.transitionDelay as string}
          changeHandler={(e) =>
            setTransitionObject({
              ...transitionObject,
              transitionDelay: e.currentTarget.value,
            })
          }
        />
        <div className="flex gap-2">
          <button
            className="btn btn-sm btn-info"
            onClick={() =>
              setTransitionObject({
                transitionProperty: "all",
                transitionDuration: "0s",
                transitionTimingFunction: "ease",
                transitionDelay: "0s",
              })
            }
          >
            Defaults
          </button>
          <button
            className="btn btn-sm btn-error"
            onClick={() => setTransitionObject({})}
          >
            Clear
          </button>
        </div>
      </div>

      <h2>3. Triggers</h2>
      <p>click, hover, scroll, visible, mount, etc.</p>
      <p>
        Basically any event that can be listened to, can be used as a trigger
        because you just need to add the corresponding class
      </p>

      <small>
        Speaking of that, let's talk about one of the most common triggers:
      </small>
    </div>
  );
}
