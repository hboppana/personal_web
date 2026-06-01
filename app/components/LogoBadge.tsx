"use client";

import { useState } from "react";

/**
 * Circular logo indicator for the Experience stepper. Falls back to short
 * initials until the real logo image is dropped into /public/logos.
 */
export default function LogoBadge({
  src,
  alt,
  fallback,
}: {
  src: string;
  alt: string;
  fallback: string;
}) {
  const [error, setError] = useState(false);

  return (
    <span className="grid size-10 shrink-0 place-items-center overflow-hidden bg-background">
      {error ? (
        <span className="text-[0.6rem] font-bold tracking-tight text-muted">
          {fallback}
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-contain"
          onError={() => setError(true)}
        />
      )}
    </span>
  );
}
