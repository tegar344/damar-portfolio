import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Mail, Phone, Globe, User, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Experienced developer with a passion for creating robust web applications and solving complex technical
            challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-blue-600" />
                Personal Info
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-slate-500" />
                <span className="text-slate-700">Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-slate-500" />
                <span className="text-slate-700">damar.khalandra@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-slate-500" />
                <span className="text-slate-700">+62 856-7220-186</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-slate-500" />
                <span className="text-slate-700">Available for Remote Work</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-600" />
                Highlights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed">
                Full-stack developer with 3+ years of experience in modern web technologies. Committed to writing clean,
                maintainable code and delivering exceptional user experiences. Strong problem-solving skills and passion
                for continuous learning.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
