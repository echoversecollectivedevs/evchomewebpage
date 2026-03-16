import { motion, type TargetAndTransition } from "framer-motion";
import { cn } from "@/lib/utils";

interface SoundWaveProps {
  className?: string;
  bars?: number;
  color?: string;
}

export function SoundWave({ className, bars = 7, color = "bg-primary" }: SoundWaveProps) {
  const getAnimation = (i: number): TargetAndTransition => ({
    height: ["20%", "100%", "30%", "80%", "20%"],
    transition: {
      duration: 1.2 + (i % 3) * 0.2,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: i * 0.1,
    },
  });

  return (
    <div className={cn("flex items-center justify-center gap-1.5 h-16", className)}>
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className={cn("w-1.5 rounded-full", color)}
          initial={{ height: "20%" }}
          animate={getAnimation(i)}
        />
      ))}
    </div>
  );
}
