import type { ReactNode } from "react";

export type Step = {
  indicator: ReactNode;
  content: ReactNode;
};

/**
 * Minimal vertical stepper rail, themed to the site's monochrome design.
 * Each step shows an indicator (logo or animated dot) connected by a thin
 * vertical line, with content to the right.
 */
export default function Stepper({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative">
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        return (
          <li
            key={i}
            className="grid grid-cols-[2.5rem_1fr] gap-x-4 sm:gap-x-5"
          >
            {/* Rail: indicator + connecting line */}
            <div className="relative flex flex-col items-center">
              {step.indicator}
              {!isLast && <div className="mt-2 w-px flex-1 bg-rule" />}
            </div>

            {/* Content */}
            <div className={isLast ? "pt-0.5" : "pt-0.5 pb-9"}>
              {step.content}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
