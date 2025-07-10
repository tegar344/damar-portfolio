"use client"

import { motion } from "framer-motion"

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Circles */}
      <motion.div
        className="absolute w-4 h-4 bg-emerald-400/30 rounded-full"
        style={{ top: "20%", left: "10%" }}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-6 h-6 bg-cyan-400/20 rounded-full"
        style={{ top: "60%", right: "15%" }}
        animate={{
          y: [0, 30, 0],
          x: [0, -15, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute w-3 h-3 bg-teal-400/40 rounded-full"
        style={{ bottom: "30%", left: "20%" }}
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Floating Shapes */}
      <motion.div
        className="absolute w-8 h-8 border-2 border-emerald-300/30 rotate-45"
        style={{ top: "40%", left: "80%" }}
        animate={{
          rotate: [45, 225, 45],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-6 h-6 border-2 border-cyan-300/30 rounded-full"
        style={{ top: "80%", right: "30%" }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </div>
  )
}
