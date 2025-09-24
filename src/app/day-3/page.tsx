import DestinationCard from "../components/destination-card"
import Footer from "../components/footer"
import GallerySection from "../components/gallery-section"
import Navbar from "../components/navbar"
import SuggestionForm from "../components/suggestion-form"

const day3Destinations = [
  {
    title: "Pulang ke Jakarta dari Yogyakarta",
    description:
    "Pulang ke Jakarta dari Yogyakarta",
    image: "https://i.pinimg.com/1200x/5a/3d/59/5a3d5933baee1994151add6629b461ef.jpg",
    location: "Stasiun Tugu Yogyakarta",
    googleMapsUrl: "https://maps.app.goo.gl/r7XDyYXnhEHP9pnB9",
    rating: 4.6,
    // timeSlot: "13:30 - 17:00 PM",
    reviews: {
      tiktok: "#",
      youtube: "#",
      google: "#",
    },
  },
]

const day3Gallery = [
  {
    id: "Pulang ke Jakarta dari Yogyakarta",
    src: "https://i.pinimg.com/1200x/5a/3d/59/5a3d5933baee1994151add6629b461ef.jpg",
    caption: "Pulang ke Jakarta dari Yogyakarta",
    alt: "",
  },
]

export default function Day3Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-pink-50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mb-6">
              <span className="text-white font-bold text-2xl">3</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">Day 3</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We return to Jakarta, cherishing the memories of breathtaking beaches and scenic landscapes
            </p>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {day3Destinations.map((destination, index) => (
              <DestinationCard key={destination.title} {...destination} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection title="Galeri Hari Ketiga" images={day3Gallery} dayNumber={3} />

      {/* Suggestion Form */}
      <SuggestionForm dayNumber={3} />

      <Footer />
    </main>
  )
}
