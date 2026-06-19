import { lazy, Suspense, useCallback, useEffect, useRef } from "react";
import type { Application, SPEObject } from "@splinetool/runtime";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
  followCursor?: boolean;
}

const HEAD_NAMES = [
  "Head",
  "head",
  "Robot Head",
  "RobotHead",
  "Helmet",
  "helmet",
  "Face",
  "face",
];

export function SplineScene({
  scene,
  className,
  followCursor = false,
}: SplineSceneProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<Application | null>(null);
  const headRef = useRef<SPEObject | null>(null);
  const frameRef = useRef<number | null>(null);
  const initialRotationRef = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef({ x: 0, y: 0 });

  const handleLoad = useCallback(
    (app: Application) => {
      appRef.current = app;

      if (!followCursor) return;

      const allObjects = app.getAllObjects();
      const head =
        HEAD_NAMES.map((name) => app.findObjectByName(name)).find(Boolean) ??
        allObjects.find((object) => /\b(head|helmet|face)\b/i.test(object.name));

      if (!head) return;

      headRef.current = head;
      initialRotationRef.current = {
        x: head.rotation.x,
        y: head.rotation.y,
      };
      targetRotationRef.current = {
        x: head.rotation.x,
        y: head.rotation.y,
      };
    },
    [followCursor],
  );

  useEffect(() => {
    if (!followCursor) return;

    const handlePointerMove = (event: PointerEvent) => {
      const wrapper = wrapperRef.current;
      const bounds = wrapper?.getBoundingClientRect();
      const initial = initialRotationRef.current;
      const normalizedX = bounds
        ? ((event.clientX - bounds.left) / bounds.width - 0.5) * 2
        : (event.clientX / window.innerWidth - 0.5) * 2;
      const normalizedY = bounds
        ? ((event.clientY - bounds.top) / bounds.height - 0.5) * 2
        : (event.clientY / window.innerHeight - 0.5) * 2;

      targetRotationRef.current = {
        x: initial.x + normalizedY * 0.38,
        y: initial.y + normalizedX * 0.72,
      };
    };

    const resetTarget = () => {
      targetRotationRef.current = { ...initialRotationRef.current };
    };

    const animate = () => {
      const head = headRef.current;
      if (head) {
        const target = targetRotationRef.current;
        head.rotation.x += (target.x - head.rotation.x) * 0.09;
        head.rotation.y += (target.y - head.rotation.y) * 0.09;
      }
      frameRef.current = window.requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", resetTarget);
    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("mouseleave", resetTarget);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [followCursor]);

  return (
    <div ref={wrapperRef} className="h-full w-full">
      <Suspense
        fallback={
          <div
            className="flex h-full w-full items-center justify-center"
            aria-label="Loading interactive 3D scene"
          >
            <span className="spline-loader" />
          </div>
        }
      >
        <Spline scene={scene} className={className} onLoad={handleLoad} />
      </Suspense>
    </div>
  );
}
