"use client";

import { useState } from "react";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
};

export default function ImageWithFallback({
  src,
  alt,
  className = "",
  fallbackClassName = "",
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        aria-label={alt}
        className={`flex items-center justify-center rounded-xl border border-[rgba(0,163,255,0.18)] bg-gradient-to-br from-[#071B3F] to-[#04122C] ${fallbackClassName}`}
      >
        <span className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gold-300/85">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
