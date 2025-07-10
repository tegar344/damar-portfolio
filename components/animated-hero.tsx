"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Download, ArrowDown } from "lucide-react"

export function AnimatedHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-green-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <motion.div
        className="container mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-white shadow-lg"
          variants={imageVariants}
          whileHover={{
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.3 },
          }}
        >
          <Image
            src="/images/damar-profile.jpg"
            alt="Damar Tri Khalandra"
            fill
            className="object-cover"
            priority
            sizes="128px"
          />
        </motion.div>

        <motion.h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4" variants={itemVariants}>
          <motion.span
            className="inline-block"
            whileHover={{
              scale: 1.05,
              color: "#10b981",
              transition: { duration: 0.2 },
            }}
          >
            Damar Tri Khalandra
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-slate-600 mb-2 max-w-2xl mx-auto font-semibold"
          variants={itemVariants}
        >
          <motion.span
            className="inline-block bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            Pengembang Web Full-Stack
          </motion.span>
        </motion.p>

        <motion.p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto" variants={itemVariants}>
          Bersemangat dalam menciptakan solusi web inovatif dan mewujudkan ide melalui teknologi modern. Spesialisasi
          dalam membangun aplikasi yang scalable dengan kode yang bersih dan efisien.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" variants={itemVariants}>
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 shadow-lg"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Hubungi Saya
              </a>
            </Button>
          </motion.div>
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button
              variant="outline"
              size="lg"
              className="shadow-lg bg-transparent border-emerald-300 text-emerald-700 hover:bg-emerald-50"
              asChild
            >
              <a href="/cv.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Unduh CV
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.a
            href="#about"
            className="text-slate-400 hover:text-emerald-600 transition-colors"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <ArrowDown className="h-6 w-6" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
