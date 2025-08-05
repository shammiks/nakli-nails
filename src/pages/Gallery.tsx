"use client"

import { useState } from "react"
import { X, Filter } from "lucide-react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState("All")

  const categories = ["All", "Nail Art", "Classic", "Chrome", "Minimal", "Creative", "Floral"]

  const galleryImages = [
    {
      src: "https://imgs.search.brave.com/cBHm48rV8uyzmxines8lidI36POK4-oJcbetZazd0CQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODExc0FldUlBTkwu/anBn?height=500&width=400",
      alt: "Pink and Gold Elegance",
      category: "Nail Art",
    },
    {
      src: "https://imgs.search.brave.com/nEByNtGFK7C2IF3naFtj6Cw9KDBPqQ_jKwQXgo23Lqs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzcxLzY4LzMw/LzM2MF9GXzcxNjgz/MDIzX29Ud3FDU253/WnpCNUZLOXFMRGVP/YkN1aDVLZFBQUUEz/LmpwZw?height=500&width=400",
      alt: "French with Glitter",
      category: "Classic",
    },
    {
      src: "https://imgs.search.brave.com/zax-NL5rq4AA-X19lKnhQye2f5GnW1NBlCA0rDnRqoQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFydnJkWFFZY0wu/anBn?height=500&width=400",
      alt: "Rainbow Ombre",
      category: "Creative",
    },
    {
      src: "https://imgs.search.brave.com/cBHm48rV8uyzmxines8lidI36POK4-oJcbetZazd0CQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODExc0FldUlBTkwu/anBn?height=500&width=400",
      alt: "Minimalist Gold Line",
      category: "Minimal",
    },
    {
      src: "https://imgs.search.brave.com/ralUewo16Yue9d3JkCTO_rq3XBMRFmpUS9f-DbRQD2o/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFGT2xCaFl0Vkwu/anBn?height=500&width=400",
      alt: "Chrome Mirror",
      category: "Chrome",
    },
    {
      src: "https://imgs.search.brave.com/qR541sbI6Knj8CYuSfbkoVFk-1PvZPmj8kgG2Fri3XY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFkZlBzWDNqRUwu/anBn?height=500&width=400",
      alt: "Delicate Florals",
      category: "Floral",
    },
    {
      src: "https://imgs.search.brave.com/qR541sbI6Knj8CYuSfbkoVFk-1PvZPmj8kgG2Fri3XY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFkZlBzWDNqRUwu/anBn?height=500&width=400",
      alt: "Geometric Patterns",
      category: "Nail Art",
    },
    {
      src: "https://imgs.search.brave.com/X2IpAihUVkkzQ6Kooc_TdHQOnX5SJtsuVVgNeezQ-zc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjE2bHc3VUV0MUwu/anBn?height=500&width=400",
      alt: "Classic Red",
      category: "Classic",
    },
    {
      src: "https://imgs.search.brave.com/mwoPdRW5Ilf1uQXJ1Nk1NLnsQDLhb2ECBouKjNSKy4A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9uYWls/LWFydC02OTY3MzMz/LmpwZw?height=500&width=400",
      alt: "Holographic Chrome",
      category: "Chrome",
    },
    {
      src: "https://imgs.search.brave.com/lKyT1j_UNx5Bv-u-6rwnt2WUsB1DfZg8ThXKg5qg2-Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y3J5c3RhbG5haWxz/NHUuY28udWsvYy80/MTYtY2F0ZWdvcnlf/ZGVmYXVsdC9uYWls/LWFydC1wb3dkZXIu/anBn?height=500&width=400",
      alt: "Abstract Art",
      category: "Creative",
    },
    {
      src: "https://imgs.search.brave.com/AzsNIjY0QVMnSfHyX2-S8_XudfvP-pbnp2_WjSKIKI8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzYxMi82MTIveGlm/MHEvbmFpbC1hcnQv/ei9zL3kvM2QtcmVz/aW4tZmxhdC1mbG93/ZXItcGVhcmwtbWV0/YWwtYmVhZHMtbmFp/bC1hcnQtZGVjb3Jh/dGlvbi1vcmlnaW5h/bC1pbWFoMjM3NWdi/Zzg2d2tmLmpwZWc_/cT03MA?height=500&width=400",
      alt: "Simple Elegance",
      category: "Minimal",
    },
    {
      src: "https://imgs.search.brave.com/ZaBDkweCJWBR1GFewRD4IU1LEwZpohgFaR-4ePbIh5c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFRZkFIcnJhbEwu/anBn?height=500&width=400",
      alt: "Rose Florals",
      category: "Floral",
    },
  ]

  const filteredImages =
    activeFilter === "All" ? galleryImages : galleryImages.filter((img) => img.category === activeFilter)

  return (
    <div className="pt-24 pb-20 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-5xl font-playfair font-bold mb-4 dark:text-white">
            Our <span className="gradient-text">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            Explore our collection of stunning nail art designs and get inspired for your next appointment
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 text-gray-600 mb-4 dark:text-gray-300">
            <Filter className="h-5 w-5" />
            <span className="font-medium">Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-pink-50 border border-pink-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:border-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer card-hover bg-white shadow-lg dark:bg-gray-800"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-semibold mb-1">{image.alt}</h3>
                  <p className="text-sm text-pink-200">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600 dark:text-gray-300">No images found for this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-pink-300 transition-colors duration-300"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative w-full h-96 md:h-[600px] rounded-2xl overflow-hidden">
              <img
                src={filteredImages[selectedImage].src || "/placeholder.svg"}
                alt={filteredImages[selectedImage].alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center mt-6 text-white">
              <h3 className="text-2xl font-semibold mb-2">{filteredImages[selectedImage].alt}</h3>
              <p className="text-pink-300 text-lg">{filteredImages[selectedImage].category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
