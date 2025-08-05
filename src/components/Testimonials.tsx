"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Toronto, ON",
      rating: 5,
      text: "Absolutely amazing experience! The nail art was beyond my expectations and the attention to detail was incredible. I've never felt more confident about my nails!",
      service: "Custom Nail Art",
    },
    {
      name: "Emily Chen",
      location: "Vancouver, BC",
      rating: 5,
      text: "The team at Nakli Nails is so talented and professional. My gel manicure lasted for weeks without chipping. Definitely my go-to salon now!",
      service: "Gel Manicure",
    },
    {
      name: "Jessica Martinez",
      location: "Calgary, AB",
      rating: 5,
      text: "I love how they listen to exactly what I want and then exceed my expectations. The salon atmosphere is so relaxing and beautiful too!",
      service: "Acrylic Extensions",
    },
    {
      name: "Amanda Wilson",
      location: "Montreal, QC",
      rating: 5,
      text: "Best pedicure I've ever had! The spa treatment was so relaxing and my feet have never looked better. Worth every penny!",
      service: "Spa Pedicure",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-playfair font-bold mb-4 dark:text-white">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-lg dark:from-gray-800 dark:to-gray-700">
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-medium dark:text-gray-200">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Client Info */}
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">{testimonials[currentTestimonial].location}</p>
                <p className="text-pink-500 font-medium">{testimonials[currentTestimonial].service}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 dark:bg-gray-800"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 dark:bg-gray-800"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-pink-400 scale-125"
                    : "bg-gray-300 hover:bg-pink-200 dark:bg-gray-600 dark:hover:bg-pink-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
