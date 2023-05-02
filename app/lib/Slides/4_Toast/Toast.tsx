import { useState, useEffect } from "react";

export default function Toast({ hiddenClass = "toaster-hidden" }) {
  const [activeClass, setActiveClass] = useState(hiddenClass);
  const [dismount, setDismount] = useState(false);

  useEffect(() => {
    setActiveClass("toaster-visible");
  }, []);

  if (dismount) return null;

  return (
    <button
      onClick={() => {
        setActiveClass(hiddenClass);
        // setDismount(true);
        // exitAnim && setTimeout(() => setActiveClass("toaster-none"), 200);
      }}
      className={["toaster", activeClass].join(" ")}
    >
      Toast is ready! (click me to hide)
    </button>
  );
}
