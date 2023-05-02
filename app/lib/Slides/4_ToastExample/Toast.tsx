import { useState, useEffect, ReactNode } from "react";

export default function Toast({
  children,
  hiddenClass = "toaster-hidden",
  exitAnimation = false,
}: Props) {
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
        exitAnimation && setTimeout(() => setActiveClass("toaster-none"), 200);
      }}
      className={["toaster", activeClass].join(" ")}
    >
      {children}
    </button>
  );
}

interface Props {
  children: ReactNode;
  hiddenClass?: string;
  exitAnimation?: boolean;
}
