"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Send, CheckCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: ["123 Beauty Street", "Toronto, ON M5V 3A8", "Canada"],
      color: "from-pink-400 to-rose-400",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: ["(416) 555-NAIL", "(416) 555-6245", "Text us anytime!"],
      color: "from-purple-400 to-pink-400",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: ["hello@naklinails.ca", "booking@naklinails.ca", "We reply within 24hrs"],
      color: "from-rose-400 to-pink-500",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hours",
      details: ["Mon-Fri: 9AM - 7PM", "Saturday: 9AM - 6PM", "Sunday: 10AM - 5PM"],
      color: "from-pink-500 to-purple-400",
    },
  ]

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-5xl font-playfair font-bold mb-4 dark:text-white">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            Have questions or ready to book? We'd love to hear from you. Reach out and let's create something beautiful
            together.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={info.title}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl card-hover text-center dark:bg-gray-800"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4`}
              >
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 text-sm dark:text-gray-300">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden dark:bg-gray-800">
            <div className="bg-gradient-to-r from-pink-400 to-rose-400 p-8 text-white">
              <h2 className="text-2xl font-playfair font-bold mb-2">Send Us a Message</h2>
              <p className="opacity-90">We'll get back to you as soon as possible</p>
            </div>

            <div className="p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 gradient-text">Message Sent!</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Thank you for reaching out. We'll respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-4 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="(416) 555-0123"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    >
                      <option value="">Select a subject...</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="services">Service Questions</option>
                      <option value="pricing">Pricing Information</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full p-4 border border-pink-200 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 resize-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button type="submit" className="w-full btn-primary flex items-center justify-center space-x-2">
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8 h-64 flex items-center justify-center dark:from-gray-700 dark:to-gray-600">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 dark:text-white">Find Us Here</h3>
                <p className="text-gray-600 dark:text-gray-300">123 Beauty Street, Toronto, ON</p>
                <p className="text-sm text-gray-500 mt-2 dark:text-gray-400">Interactive map coming soon</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl p-8 shadow-lg dark:bg-gray-800">
              <h3 className="text-2xl font-playfair font-bold mb-6 text-center dark:text-white">
                Follow <span className="gradient-text">Our Journey</span>
              </h3>
              <p className="text-gray-600 text-center mb-6 dark:text-gray-300">
                Stay updated with our latest designs and behind-the-scenes content
              </p>
              <div className="flex justify-center space-x-6">
                <a
                  href="#"
                  className="bg-gradient-to-r from-pink-400 to-rose-400 p-4 rounded-full text-white hover:scale-110 transition-transform duration-300"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-purple-400 to-pink-400 p-4 rounded-full text-white hover:scale-110 transition-transform duration-300"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-rose-400 to-pink-500 p-4 rounded-full text-white hover:scale-110 transition-transform duration-300"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 dark:from-gray-700 dark:to-gray-600">
              <h3 className="text-xl font-semibold mb-4 gradient-text">Before You Visit</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Remove any existing polish before your appointment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Bring reference images for custom designs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Arrive 10 minutes early to relax and prepare</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Let us know about any allergies or sensitivities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
