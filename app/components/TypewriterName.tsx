"use client";

import { useEffect, useState } from "react";

type TypewriterNameProps = {
  name: string;
};

const startDelayMs = 350;
const stepMs = 60;

export default function TypewriterName({ name }: TypewriterNameProps) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let intervalId: number | undefined;

    const timeoutId = window.setTimeout(() => {
      setVisibleCount(0);
      setIsDone(false);

      intervalId = window.setInterval(() => {
        setVisibleCount((current) => {
          const next = Math.min(current + 1, name.length);
          if (next === name.length) {
            window.clearInterval(intervalId);
            setIsDone(true);
          }
          return next;
        });
      }, stepMs);
    }, startDelayMs);

    return () => {
      window.clearTimeout(timeoutId);
      if (intervalId !== undefined) window.clearInterval(intervalId);
    };
  }, [name]);

  return (
    <span aria-label={name} className="typewriter-text">
      <span aria-hidden="true" className="typewriter-measure">
        {name}
      </span>
      <span aria-hidden="true" className="typewriter-live">
        {name.slice(0, visibleCount)}
        <span
          className={
            isDone
              ? "typewriter-caret typewriter-caret-done"
              : "typewriter-caret"
          }
        />
      </span>
    </span>
  );
}
