import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
  key?: string;
}

const WORDS = ["Design", "Create", "Inspire"];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const duration = 2700; // 2700ms as per guide

  useEffect(() => {
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const currentVal = Math.floor(progress * 100);

      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        // Delay of 400ms then onComplete
        const timer = setTimeout(() => {
          onComplete();
        }, 400);
        return () => clearTimeout(timer);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [onComplete]);

  // Cycle center words every 900ms (duration / number of words = 2700 / 3 = 900ms)
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 900);

    return () => clearInterval(wordInterval);
  }, []);

  return (
    <motion.div
      id="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-8 md:p-16 select-none"
    >
      {/* Top Left: Title Label */}
      <div className="flex justify-between items-start w-full">
        <motion.span
          id="loading-label"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-xs text-muted uppercase tracking-[0.3em] font-medium"
        >
          Portfolio • Michael Smith
        </motion.span>
        <span className="text-xs text-muted/60 font-mono tracking-widest hidden md:inline">
          EST. ©2026
        </span>
      </div>

      {/* Center Animated Word */}
      <div id="loading-center-container" className="flex items-center justify-center h-24 my-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={wordIndex}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 0.85 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-7xl lg:text-8xl font-display italic text-text-primary text-center tracking-wide"
          >
            {WORDS[wordIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Container: Progress and Counter */}
      <div className="w-full mt-auto space-y-6">
        <div className="flex justify-between items-end">
          <div className="text-xs text-muted font-mono uppercase tracking-wider">
            Optimizing Assets...
          </div>
          <div
            id="loading-counter"
            className="text-7xl md:text-9xl font-display text-text-primary tracking-tighter tabular-nums select-none leading-none"
          >
            {String(count).padStart(3, "0")}
          </div>
        </div>

        {/* Progress Bar */}
        <div id="loading-progress-bg" className="h-[2px] w-full bg-stroke/40 rounded-full overflow-hidden">
          <div
            id="loading-progress-bar"
            className="h-full accent-gradient origin-left transition-transform duration-75 ease-out"
            style={{
              transform: `scaleX(${count / 100})`,
              boxShadow: "0 0 12px rgba(137, 170, 204, 0.45)",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
