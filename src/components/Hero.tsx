import { Link } from "react-router-dom"
import { Sparkles, Star } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-rose-50 dark:from-gray-900 dark:to-gray-800">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-60 animate-pulse dark:bg-pink-800/50"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-40 animate-pulse delay-1000 dark:bg-purple-800/50"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-pink-500">
                <Star className="h-5 w-5 fill-current" />
                <span className="text-sm font-medium">Canada's Premier Nail Salon</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-playfair font-bold leading-tight text-gray-800 dark:text-white">
                Where
                <span className="gradient-text"> Creativity </span>
                Meets
                <span className="gradient-text"> Elegance</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed dark:text-gray-300">
                Transform your nails into works of art with our premium services, creative designs, and personalized
                attention to detail.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/booking" className="btn-primary text-center">
                Book Your Appointment
              </Link>
              <Link to="/gallery" className="btn-secondary text-center">
                View Our Gallery
              </Link>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">5★</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up delay-300">
            <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://imgs.search.brave.com/QqfNVsBe0OvWlvPlwiTryR0eKWFO9HfEVW4lopzIQLY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzEwLzlk/L2ZmLzEwOWRmZjBh/N2Y4YjhkZTM3MzM1/YmYxZTZiYTM1OWQz/LmpwZw?height=500&width=400"
                alt="Nakli Nails Salon Interior"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg animate-pulse dark:bg-gray-800 border dark:border-gray-600">
              <Sparkles className="h-8 w-8 text-pink-500" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-pink-400 to-rose-400 text-white p-4 rounded-xl shadow-lg">
              <div className="text-sm font-medium">Book Today!</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
