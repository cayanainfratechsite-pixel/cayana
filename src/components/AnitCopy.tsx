"use client";

import { useEffect } from "react";

export default function AntiCopy() {
  useEffect(() => {
    const preventContextMenu = (e: MouseEvent) => e.preventDefault();

    const blockKeys = (e: KeyboardEvent) => {
      const forbidden = ['c', 'u', 's', 'p'];
      if ((e.ctrlKey && forbidden.includes(e.key.toLowerCase())) || e.key === 'F12') {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", preventContextMenu);
    document.addEventListener("keydown", blockKeys);

    return () => {
      document.removeEventListener("contextmenu", preventContextMenu);
      document.removeEventListener("keydown", blockKeys);
    };
  }, []);

  return null;
}
