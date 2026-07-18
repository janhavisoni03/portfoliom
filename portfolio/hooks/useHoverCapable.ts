"use client";

import { useEffect, useState } from "react";

/** True only on devices with a fine pointer + hover support (i.e. not touch). */
export function useHoverCapable(): boolean {
  const [capable, setCapable] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    setCapable(query.matches);
    const listener = (e: MediaQueryListEvent) => setCapable(e.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  return capable;
}
