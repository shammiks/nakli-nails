import { Link } from "react-router-dom"
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock, Sparkles } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-pink-400 to-rose-400 p-2 rounded-lg">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-playfair font-bold text-gray-800 dark:text-white">Nakli Nails</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-300">
              Canada's premier boutique nail salon, delivering creative and customized nail artistry with passion and
              precision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800 dark:text-white">Quick Links</h3>
            <div className="space-y-2">
              {["Gallery", "Services", "Booking", "About", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="block text-gray-600 hover:text-pink-500 transition-colors duration-300 text-sm dark:text-gray-300"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800 dark:text-white">Popular Services</h3>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <p>Gel Manicures</p>
              <p>Nail Art Design</p>
              <p>Acrylic Extensions</p>
              <p>Spa Pedicures</p>
              <p>Chrome Finishes</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800 dark:text-white">Get in Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <MapPin className="h-4 w-4 text-pink-500" />
                <span>123 Beauty Street, Toronto, ON</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <Phone className="h-4 w-4 text-pink-500" />
                <span>(416) 555-NAIL</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <Mail className="h-4 w-4 text-pink-500" />
                <span>hello@naklinails.ca</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <Clock className="h-4 w-4 text-pink-500" />
                <span>Mon-Sat: 9AM-7PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 text-center dark:border-gray-600">
          <p className="text-gray-600 text-sm dark:text-gray-300">
            © {new Date().getFullYear()} Nakli Nails. All rights reserved. Made with 💖 in Canada.
          </p>
        </div>
      </div>
    </footer>
  )
}
