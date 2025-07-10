"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface AnimatedCardProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function AnimatedCard({ children, delay = 0, className = "" }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      className={className}
    >
      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:shadow-emerald-100">
        {children}
      </Card>
    </motion.div>
  )
}

export function AnimatedSkillBadge({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: delay,
        type: "spring",
        stiffness: 200,
      }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedProjectCard({
  title,
  description,
  technologies,
  liveUrl,
  githubUrl,
  delay = 0,
}: {
  title: string
  description: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      }}
      whileHover={{
        y: -15,
        scale: 1.03,
        transition: { duration: 0.3 },
      }}
      className="group"
    >
      <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden hover:shadow-cyan-100">
        <motion.div
          className="aspect-video bg-gradient-to-br from-emerald-100 to-cyan-100 flex items-center justify-center relative overflow-hidden"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            className="text-6xl font-bold text-emerald-300 z-10"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
          >
            &lt;/&gt;
          </motion.div>
        </motion.div>

        <CardHeader>
          <CardTitle className="text-lg group-hover:text-emerald-600 transition-colors">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <AnimatedSkillBadge key={tech} delay={index * 0.1}>
                <Badge variant="secondary" className="text-xs hover:bg-emerald-100 transition-colors">
                  {tech}
                </Badge>
              </AnimatedSkillBadge>
            ))}
          </div>

          <div className="flex gap-2">
            <motion.div className="flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                variant="outline"
                className="w-full bg-transparent border-emerald-200 hover:bg-emerald-50"
                asChild
              >
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </Button>
            </motion.div>
            <motion.div className="flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                variant="outline"
                className="w-full bg-transparent border-cyan-200 hover:bg-cyan-50"
                asChild
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  Code
                </a>
              </Button>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
