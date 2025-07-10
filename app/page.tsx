"use client"

import { AnimatedNavigation } from "@/components/animated-navigation"
import { AnimatedHero } from "@/components/animated-hero"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCard, AnimatedSkillBadge, AnimatedProjectCard } from "@/components/animated-cards"
import { FloatingElements } from "@/components/floating-elements"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MapPin, Mail, Phone, Globe, User, Award, Briefcase, GraduationCap, Linkedin, Github } from "lucide-react"

export default function HomePage() {
  const technicalSkills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Git",
    "Docker",
  ]

  const softSkills = ["Kepemimpinan", "Komunikasi", "Pemecahan Masalah", "Kerja Tim", "Kreativitas", "Adaptabilitas"]

  const projects = [
    {
      title: "Platform E-Commerce",
      description: "Solusi e-commerce full-stack dengan React, Node.js, dan PostgreSQL",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe API"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Aplikasi Manajemen Tugas",
      description: "Aplikasi manajemen tugas kolaboratif dengan update real-time",
      technologies: ["Next.js", "Socket.io", "MongoDB", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Dashboard Cuaca",
      description: "Dashboard cuaca interaktif dengan visualisasi data",
      technologies: ["Vue.js", "Chart.js", "Weather API", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-cyan-50 relative">
      <FloatingElements />
      <AnimatedNavigation />
      <AnimatedHero />

      {/* About Section */}
      <AnimatedSection className="py-16 px-4" delay={0.2}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Tentang Saya</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Developer berpengalaman dengan passion dalam menciptakan aplikasi web yang robust dan menyelesaikan
              tantangan teknis yang kompleks.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedCard delay={0.3}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                    <User className="h-5 w-5 text-emerald-600" />
                  </motion.div>
                  Informasi Pribadi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <MapPin className="h-4 w-4 text-slate-500" />
                  <span className="text-slate-700">Jakarta, Indonesia</span>
                </motion.div>
                <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Mail className="h-4 w-4 text-slate-500" />
                  <span className="text-slate-700">damar.khalandra@gmail.com</span>
                </motion.div>
                <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Phone className="h-4 w-4 text-slate-500" />
                  <span className="text-slate-700">+62 856-7220-186</span>
                </motion.div>
                <motion.div className="flex items-center gap-3" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Globe className="h-4 w-4 text-slate-500" />
                  <span className="text-slate-700">Tersedia untuk Kerja Remote</span>
                </motion.div>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.5}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                    <Award className="h-5 w-5 text-cyan-600" />
                  </motion.div>
                  Keunggulan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">
                  Full-stack developer dengan pengalaman 3+ tahun dalam teknologi web modern. Berkomitmen untuk menulis
                  kode yang bersih dan maintainable serta memberikan pengalaman pengguna yang luar biasa. Memiliki
                  kemampuan problem-solving yang kuat dan passion untuk terus belajar.
                </p>
              </CardContent>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection className="py-16 px-4 bg-white/50" delay={0.4}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Keahlian & Expertise</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Beragam keahlian yang dikembangkan melalui pengalaman dan pembelajaran berkelanjutan.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <AnimatedCard delay={0.2}>
              <CardHeader>
                <CardTitle className="text-center">Keahlian Teknis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((skill, index) => (
                    <AnimatedSkillBadge key={skill} delay={index * 0.1}>
                      <Badge variant="secondary" className="hover:bg-emerald-100 transition-colors cursor-pointer">
                        {skill}
                      </Badge>
                    </AnimatedSkillBadge>
                  ))}
                </div>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <CardHeader>
                <CardTitle className="text-center">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill, index) => (
                    <AnimatedSkillBadge key={skill} delay={index * 0.1}>
                      <Badge
                        variant="outline"
                        className="hover:bg-teal-50 transition-colors cursor-pointer border-teal-200"
                      >
                        {skill}
                      </Badge>
                    </AnimatedSkillBadge>
                  ))}
                </div>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.6}>
              <CardHeader>
                <CardTitle className="text-center">Bahasa</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <motion.div
                    className="flex justify-between"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-slate-700">Bahasa Indonesia</span>
                    <Badge className="bg-emerald-600 hover:bg-emerald-700">Native</Badge>
                  </motion.div>
                  <motion.div
                    className="flex justify-between"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-slate-700">Bahasa Inggris</span>
                    <Badge variant="secondary" className="bg-cyan-100 text-cyan-800 hover:bg-cyan-200">
                      Lancar
                    </Badge>
                  </motion.div>
                </div>
              </CardContent>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Portfolio Section */}
      <AnimatedSection className="py-16 px-4" delay={0.6}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Portofolio</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Showcase dari proyek-proyek terbaru dan keahlian teknis saya dalam pengembangan web.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <AnimatedProjectCard key={project.title} {...project} delay={index * 0.2} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection className="py-16 px-4" delay={0.8}>
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Pengalaman</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Perjalanan profesional dan pencapaian utama.</p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            <AnimatedCard delay={0.3}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                        <Briefcase className="h-5 w-5 text-emerald-600" />
                      </motion.div>
                      Pengalaman Profesional
                    </CardTitle>
                    <CardDescription>Posisi Saat Ini</CardDescription>
                  </div>
                  <Badge className="bg-emerald-600 hover:bg-emerald-700">2023 - Sekarang</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Saat ini fokus pada pengembangan solusi inovatif dan berkontribusi pada proyek-proyek bermakna yang
                  memberikan dampak positif.
                </p>
              </CardContent>
            </AnimatedCard>

            <AnimatedCard delay={0.5}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                        <GraduationCap className="h-5 w-5 text-cyan-600" />
                      </motion.div>
                      Pendidikan
                    </CardTitle>
                    <CardDescription>Latar Belakang Akademis</CardDescription>
                  </div>
                  <Badge variant="outline" className="border-teal-200 text-teal-700">
                    Selesai
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700">
                  Fondasi pendidikan yang kuat dengan pembelajaran berkelanjutan dan pengembangan profesional.
                </p>
              </CardContent>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-cyan-600" delay={1}>
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Mari Terhubung
          </motion.h2>
          <motion.p
            className="text-emerald-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Saya selalu tertarik dengan peluang baru dan percakapan yang bermakna.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="secondary" size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50" asChild>
                <a href="mailto:damar.khalandra@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Kirim Email
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-emerald-600"
                asChild
              >
                <a href="https://linkedin.com/in/damar-khalandra" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="https://github.com/damar-khalandra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-emerald-200 transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/damar-khalandra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-emerald-200 transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://damar-khalandra.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-emerald-200 transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Globe className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <motion.footer
        className="bg-slate-800 text-white py-8 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto text-center">
          <p className="text-slate-400">© 2024 Damar Tri Khalandra. Semua hak dilindungi.</p>
        </div>
      </motion.footer>
    </div>
  )
}
