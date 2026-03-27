"use client";

import { useState } from "react";

export default function RevealEmail({ email }: { email: string }) {
  const [revealed, setRevealed] = useState(false);

  if (!revealed) {
    return (
      <button
        type="button"
        onClick={() => setRevealed(true)}
        className="text-[#00A0FF] hover:underline cursor-pointer"
      >
        Click to reveal
      </button>
    );
  }

  return (
    <a href={`mailto:${email}`} className="text-[#00A0FF] hover:underline">
      {email}
    </a>
  );
}
