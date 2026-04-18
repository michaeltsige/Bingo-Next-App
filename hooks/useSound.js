import { useState, useCallback } from "react";

export function useSound(initialState = true) {
  const [enabled, setEnabled] = useState(initialState);

  const toggle = useCallback(() => {
    setEnabled((prev) => !prev);
  }, []);

  const play = useCallback(
    (soundName) => {
      if (!enabled) return;
      // Placeholder for actual sound implementation
      console.log(`Playing sound: ${soundName}`);
    },
    [enabled],
  );

  return {
    enabled,
    toggle,
    play,
  };
}
