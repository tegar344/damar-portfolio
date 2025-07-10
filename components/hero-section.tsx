import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Download } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
          <Image
            src="/images/damar-profile.jpg"
            alt="Damar Tri Khalandra"
            fill
            className="object-cover"
            priority
            sizes="128px"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-4">Damar Tri Khalandra</h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-2 max-w-2xl mx-auto font-semibold">
          Full-Stack Web Developer
        </p>

        <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
          Passionate about creating innovative web solutions and bringing ideas to life through modern technologies.
          Specialized in building scalable applications with clean, efficient code.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            asChild
          >
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/cv.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
