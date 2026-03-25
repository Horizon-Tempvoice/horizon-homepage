"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 800);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 bg-[#080a10] z-[9999] flex items-center justify-center transition-opacity duration-500"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        className="w-12 h-12 border-4 border-[#00A0FF] border-t-transparent rounded-full"
        style={{ animation: "spin 1s linear infinite" }}
      />
    </div>
  );
}
