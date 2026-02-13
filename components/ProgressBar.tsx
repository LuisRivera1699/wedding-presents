"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  totalCost: number;
  totalRaised: number;
  className?: string;
}

export function ProgressBar({
  totalCost,
  totalRaised,
  className = "",
}: ProgressBarProps) {
  const percentage = totalCost > 0 ? Math.min(100, (totalRaised / totalCost) * 100) : 0;

  return (
    <div className={className}>
      <div className="flex justify-between text-sm font-body text-wedding-gray mb-1">
        <span>
          S/ {totalRaised.toLocaleString("es-PE")} de S/{" "}
          {totalCost.toLocaleString("es-PE")}
        </span>
        <span>{percentage.toFixed(0)}%</span>
      </div>
      <div className="h-2 bg-wedding-beige rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-wedding-soft rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
