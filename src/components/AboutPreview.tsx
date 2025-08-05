import { Link } from "react-router-dom"
import { Heart, Award, Users, Sparkles } from "lucide-react"

export default function AboutPreview() {
  const stats = [
    { icon: <Users className="h-6 w-6" />, number: "500+", label: "Happy Clients" },
    { icon: <Award className="h-6 w-6" />, number: "3+", label: "Years Experience" },
    { icon: <Sparkles className="h-6 w-6" />, number: "1000+", label: "Designs Created" },
    { icon: <Heart className="h-6 w-6" />, number: "5★", label: "Average Rating" },
  ]

  return (
    <section className="py-20 professional-gradient dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h2 className="text-4xl font-playfair font-bold dark:text-white">
                The Story Behind <span className="gradient-text">Nakli Nails</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed dark:text-gray-300">
                Founded with a passion for creativity and excellence, Nakli Nails has become Canada's premier
                destination for luxury nail artistry.
              </p>
              <p className="text-gray-600 leading-relaxed dark:text-gray-300">
                Our journey began with a simple belief: every client deserves to feel confident and beautiful. We
                combine artistic vision with technical expertise to create nail designs that are not just beautiful, but
                uniquely you.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-white p-6 rounded-2xl shadow-lg text-center card-hover dark:bg-gray-700"
                >
                  <div className="bg-gradient-to-r from-pink-400 to-rose-400 w-12 h-12 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold gradient-text mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-primary inline-block">
              Learn More About Us
            </Link>
          </div>

          {/* Image */}
          <div className="relative animate-slide-up delay-300">
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://imgs.search.brave.com/spIDKc2QYFoUB-U8j6OokepbqeOkIjvqZFBIxsLM-7U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTUv/OTc4LzgyMS9zbWFs/bC9lbGVnYW50LXJl/ZC1tYW5pY3VyZS1z/aG93Y2FzaW5nLWxv/bmctZ2xvc3N5LW5h/aWxzLWFnYWluc3Qt/YS1zcGFya2xpbmct/YmFja2dyb3VuZC1m/cmVlLXBob3RvLmpw/ZWc?height=500&width=400"
                alt="Nail Artist at Work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent"></div>
            </div>

            {/* Floating Quote */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs dark:bg-gray-800">
              <p className="text-sm text-gray-600 italic mb-2 dark:text-gray-300">
                "Every nail tells a story, and we're here to make yours beautiful."
              </p>
              <p className="text-sm font-semibold text-pink-500">- Founder, Nakli Nails</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
