"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { X } from "lucide-react"

export default function GalleryPreview() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "https://imgs.search.brave.com/cBHm48rV8uyzmxines8lidI36POK4-oJcbetZazd0CQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODExc0FldUlBTkwu/anBn?height=500&width=400",
      alt: "Pink and Gold Nail Art",
      category: "Nail Art",
    },
    {
      src: "https://imgs.search.brave.com/zax-NL5rq4AA-X19lKnhQye2f5GnW1NBlCA0rDnRqoQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFydnJkWFFZY0wu/anBn?height=500&width=400",
      alt: "French Manicure with Glitter",
      category: "Classic",
    },
    {
      src: "https://imgs.search.brave.com/zax-NL5rq4AA-X19lKnhQye2f5GnW1NBlCA0rDnRqoQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFydnJkWFFZY0wu/anBn?height=500&width=400",
      alt: "Rainbow Nail Design",
      category: "Creative",
    },
    {
      src: "https://imgs.search.brave.com/cBHm48rV8uyzmxines8lidI36POK4-oJcbetZazd0CQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODExc0FldUlBTkwu/anBn?height=500&width=400",
      alt: "Minimalist Nude Art",
      category: "Minimal",
    },
    {
      src: "https://imgs.search.brave.com/ralUewo16Yue9d3JkCTO_rq3XBMRFmpUS9f-DbRQD2o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFGT2xCaFl0Vkwu/anBn?height=500&width=400",
      alt: "Chrome Mirror Finish",
      category: "Chrome",
    },
    {
      src: "https://imgs.search.brave.com/qR541sbI6Knj8CYuSfbkoVFk-1PvZPmj8kgG2Fri3XY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFkZlBzWDNqRUwu/anBn?height=500&width=400",
      alt: "Floral Nail Art",
      category: "Floral",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-playfair font-bold mb-4 text-gray-800 dark:text-white">
            Our <span className="gradient-text">Latest Creations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            Get inspired by our recent nail art masterpieces and creative designs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer card-hover"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/gallery" className="btn-primary">
            View Full Gallery
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-pink-300 transition-colors duration-300"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden">
              <img
                src={galleryImages[selectedImage].src || "/placeholder.svg"}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mt-4 text-white">
              <h3 className="text-xl font-semibold">{galleryImages[selectedImage].alt}</h3>
              <p className="text-pink-300">{galleryImages[selectedImage].category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
