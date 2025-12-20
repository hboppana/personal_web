'use client';

import { useEffect, useRef, useState } from 'react';

type ResumePreviewProps = {
  pdfUrl: string;
  className?: string;
};

export default function ResumePreview({ pdfUrl, className }: ResumePreviewProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    let cancelled = false;
    let resizeObserver: ResizeObserver | undefined;
    let lastRenderTask: { cancel?: () => void } | undefined;

    const run = async () => {
      setStatus('loading');

      try {
        const pdfjsLib = await import('pdfjs-dist');

        // Configure worker for bundler environments (Next.js).
        pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
          'pdfjs-dist/build/pdf.worker.min.mjs',
          import.meta.url
        ).toString();

        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);

        if (cancelled) return;

        const render = async () => {
          const container = containerRef.current;
          const canvas = canvasRef.current;
          if (!container || !canvas) return;

          const cssWidth = container.clientWidth;
          const cssHeight = container.clientHeight;
          if (!cssWidth || !cssHeight) return;

          const unscaledViewport = page.getViewport({ scale: 1 });
          const fitScale = Math.min(
            cssWidth / unscaledViewport.width,
            cssHeight / unscaledViewport.height
          );

          const viewport = page.getViewport({ scale: fitScale });
          const outputScale = window.devicePixelRatio || 1;

          const context = canvas.getContext('2d', { alpha: false });
          if (!context) return;

          // Cancel any in-flight render before starting a new one.
          lastRenderTask?.cancel?.();

          canvas.width = Math.floor(viewport.width * outputScale);
          canvas.height = Math.floor(viewport.height * outputScale);
          canvas.style.width = `${Math.floor(viewport.width)}px`;
          canvas.style.height = `${Math.floor(viewport.height)}px`;

          context.setTransform(outputScale, 0, 0, outputScale, 0, 0);
          context.imageSmoothingEnabled = true;

          const renderTask = page.render({
            canvasContext: context,
            viewport,
            canvas,
          });

          lastRenderTask = renderTask as unknown as { cancel?: () => void };
          await renderTask.promise;
        };

        // Initial render + rerender on resize (responsive).
        await render();
        if (cancelled) return;

        resizeObserver = new ResizeObserver(() => {
          void render();
        });
        if (containerRef.current) resizeObserver.observe(containerRef.current);

        setStatus('ready');
      } catch {
        if (!cancelled) setStatus('error');
      }
    };

    void run();

    return () => {
      cancelled = true;
      resizeObserver?.disconnect();
      lastRenderTask?.cancel?.();
    };
  }, [pdfUrl]);

  return (
    <div
      ref={containerRef}
      className={
        className ??
        'relative grid h-[26rem] w-full place-items-center overflow-hidden'
      }
    >
      <canvas ref={canvasRef} className="block" />

      {status === 'loading' && (
        <div className="absolute inset-0 grid place-items-center bg-black/20">
          <span className="text-sm text-white/70">Loading preview…</span>
        </div>
      )}

      {status === 'error' && (
        <div className="absolute inset-0 grid place-items-center bg-black/20 px-6 text-center">
          <div>
            <p className="text-sm font-medium text-white/80">
              Couldn’t load the preview.
            </p>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-sm font-semibold text-purple-300 hover:text-purple-200"
            >
              Open PDF
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
