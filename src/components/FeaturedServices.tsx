import { Link } from "react-router-dom"
import { Palette, Sparkles, Heart, Crown } from "lucide-react"

export default function FeaturedServices() {
  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Custom Nail Art",
      description: "Unique designs tailored to your personality and style preferences.",
      price: "From $45",
      color: "bg-rose-100 dark:bg-rose-900/20",
      iconColor: "bg-gradient-to-r from-pink-400 to-rose-400",
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Gel Manicures",
      description: "Long-lasting, chip-resistant gel polish in hundreds of colors.",
      price: "From $35",
      color: "bg-gray-100 dark:bg-gray-800",
      iconColor: "bg-gradient-to-r from-gray-400 to-gray-600",
    },
    {
      icon: <Crown className="h-8 w-8" />,
      title: "Luxury Extensions",
      description: "Premium acrylic and gel extensions for length and strength.",
      price: "From $65",
      color: "bg-rose-100 dark:bg-rose-900/20",
      iconColor: "bg-gradient-to-r from-pink-400 to-rose-400",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Spa Pedicures",
      description: "Relaxing foot treatments with massage and premium products.",
      price: "From $55",
      color: "bg-gray-100 dark:bg-gray-800",
      iconColor: "bg-gradient-to-r from-gray-400 to-gray-600",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-playfair font-bold mb-4 dark:text-white">
            Our <span className="gradient-text">Signature Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            Discover our most popular treatments designed to make you feel confident and beautiful
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl card-hover border border-pink-100 dark:bg-gray-800 dark:border-gray-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-16 h-16 ${service.iconColor} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{service.title}</h3>

              <p className="text-gray-600 mb-4 leading-relaxed dark:text-gray-300">{service.description}</p>

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold gradient-text">{service.price}</span>
                <Link
                  to="/booking"
                  className="text-pink-500 hover:text-pink-600 font-medium text-sm transition-colors duration-300"
                >
                  Book Now →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
