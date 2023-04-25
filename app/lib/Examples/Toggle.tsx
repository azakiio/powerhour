import { motion } from "framer-motion";
import { useState } from "react";
import colors from "daisyui/src/colors/themes";

export default function Toggle({ enabled = true, active, setActive }: ToggleProps) {
  const [backupActive, setBackupActive] = useState(false);
  if (!setActive) {
    active = backupActive;
  }

  return (
    <motion.button
      onClick={() => (setActive ? setActive(!active) : setBackupActive(!backupActive))}
      className={`flex w-10 rounded-xl`}
      animate={{
        backgroundColor: active ? colors["[data-theme=emerald]"].primary : "hsl(219.23 20.312% 25.098% / 0.3)",
        transition: enabled ? {} : { duration: 0 },
      }}
      style={{
        justifyContent: active ? "flex-end" : "flex-start",
      }}>
      <motion.div
        layout
        transition={enabled ? {} : { duration: 0 }}
        className={`w-4 h-4 m-1 rounded-full bg-white`}
      />
    </motion.button>
  );
}

type ToggleProps = {
  enabled?: boolean;
  active?: boolean;
  setActive?: (newState: boolean) => void;
};
