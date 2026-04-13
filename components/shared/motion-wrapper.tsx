"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

type MotionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function MotionWrapper({ children, className, delay = 0 }: MotionWrapperProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
