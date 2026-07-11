"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface AnimatedEditorProps {
  children: ReactNode;
}

export function AnimatedEditor({
  children,
}: AnimatedEditorProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}