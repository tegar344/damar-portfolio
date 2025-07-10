import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, Globe } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect</h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          I'm always interested in new opportunities and meaningful conversations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button variant="secondary" size="lg" asChild>
            <a href="mailto:damar.khalandra@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
            asChild
          >
            <a href="https://linkedin.com/in/damar-khalandra" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/damar-khalandra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-200 transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/damar-khalandra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-200 transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://damar-khalandra.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-200 transition-colors"
          >
            <Globe className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
