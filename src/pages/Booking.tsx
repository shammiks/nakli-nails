"use client"

import type React from "react"
import { useState } from "react"
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle } from "lucide-react"

export default function Booking() {
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const services = [
    { value: "gel-manicure", label: "Gel Manicure - $35", duration: "45 min" },
    { value: "acrylic-full-set", label: "Acrylic Full Set - $65", duration: "90 min" },
    { value: "custom-nail-art", label: "Custom Nail Art - $45-85", duration: "60-120 min" },
    { value: "spa-pedicure", label: "Spa Pedicure - $55", duration: "75 min" },
    { value: "chrome-finish", label: "Chrome Finish - $55", duration: "60 min" },
    { value: "gel-extensions", label: "Gel Extensions - $70", duration: "100 min" },
  ]

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Booking submitted:", formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 shadow-2xl dark:bg-gray-800">
              <div className="bg-gradient-to-r from-green-400 to-emerald-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl font-playfair font-bold mb-4 dark:text-white">
                Booking <span className="gradient-text">Confirmed!</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 dark:text-gray-300">
                Thank you for choosing Nakli Nails! We've received your appointment request and will contact you shortly
                to confirm your booking.
              </p>
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 mb-8 dark:from-gray-700 dark:to-gray-600">
                <h3 className="font-semibold text-gray-800 mb-4 dark:text-white">Booking Details:</h3>
                <div className="space-y-2 text-left">
                  <p className="dark:text-gray-300">
                    <span className="font-medium">Service:</span>{" "}
                    {services.find((s) => s.value === formData.service)?.label}
                  </p>
                  <p className="dark:text-gray-300">
                    <span className="font-medium">Date:</span> {formData.date}
                  </p>
                  <p className="dark:text-gray-300">
                    <span className="font-medium">Time:</span> {formData.time}
                  </p>
                  <p className="dark:text-gray-300">
                    <span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({
                    service: "",
                    date: "",
                    time: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    notes: "",
                  })
                }}
                className="btn-primary"
              >
                Book Another Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-5xl font-playfair font-bold mb-4 dark:text-white">
            Book Your <span className="gradient-text">Appointment</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            Ready to transform your nails? Schedule your appointment and let us create something beautiful for you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden dark:bg-gray-800">
            <div className="bg-gradient-to-r from-pink-400 to-rose-400 p-8 text-white text-center">
              <h2 className="text-2xl font-playfair font-bold mb-2">Schedule Your Visit</h2>
              <p className="opacity-90">Fill out the form below and we'll confirm your appointment</p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-8">
              {/* Service Selection */}
              <div className="space-y-4">
                <label className="flex items-center space-x-2 text-lg font-semibold text-gray-800 dark:text-white">
                  <Calendar className="h-5 w-5 text-pink-500" />
                  <span>Select Service</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="">Choose a service...</option>
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label} ({service.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <label className="flex items-center space-x-2 text-lg font-semibold text-gray-800 dark:text-white">
                    <Calendar className="h-5 w-5 text-pink-500" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div className="space-y-4">
                  <label className="flex items-center space-x-2 text-lg font-semibold text-gray-800 dark:text-white">
                    <Clock className="h-5 w-5 text-pink-500" />
                    <span>Preferred Time</span>
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="">Select time...</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="flex items-center space-x-2 text-lg font-semibold text-gray-800 dark:text-white">
                  <User className="h-5 w-5 text-pink-500" />
                  <span>Personal Information</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                      <Mail className="h-4 w-4 text-pink-500" />
                      <span>Email Address</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
                      <Phone className="h-4 w-4 text-pink-500" />
                      <span>Phone Number</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="(416) 555-0123"
                    />
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-4">
                <label className="flex items-center space-x-2 text-lg font-semibold text-gray-800 dark:text-white">
                  <MessageSquare className="h-5 w-5 text-pink-500" />
                  <span>Special Requests or Notes</span>
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 resize-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Tell us about any specific designs, colors, or requirements you have in mind..."
                />
              </div>

              {/* Important Information */}
              <div className="bg-gray-50 rounded-xl p-6 dark:bg-gray-700">
                <h4 className="font-semibold text-gray-800 mb-3 dark:text-white">Important Information:</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Please arrive 10 minutes early for your appointment</li>
                  <li>• Cancellations must be made at least 24 hours in advance</li>
                  <li>• We'll send you a confirmation email with all the details</li>
                  <li>• For custom nail art, please bring reference images if you have them</li>
                </ul>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button type="submit" className="btn-primary text-xl px-12 py-4">
                  Book My Appointment
                </button>
                <p className="text-sm text-gray-500 mt-4 dark:text-gray-400">
                  We'll contact you within 24 hours to confirm your booking
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
