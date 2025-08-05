import Hero from "../components/Hero"
import FeaturedServices from "../components/FeaturedServices"
import GalleryPreview from "../components/GalleryPreview"
import Testimonials from "../components/Testimonials"
import AboutPreview from "../components/AboutPreview"

export default function Home() {
  return (
    <div className="animate-fade-in">
      <Hero />
      <FeaturedServices />
      <GalleryPreview />
      <Testimonials />
      <AboutPreview />
    </div>
  )
}
