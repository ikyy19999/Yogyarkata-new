import DestinationCard from "../components/destination-card"
import Footer from "../components/footer"
import GallerySection from "../components/gallery-section"
import Navbar from "../components/navbar"
import SuggestionForm from "../components/suggestion-form"

const day2Destinations = [
  {
    title: "Pasar Beringharjo Yogyakarta",
    description:
    "Sarapan di Pasar Beringharjo Yogyakarta (1 jam)",
    image: "/assets/Pasar Beringharjo Yogyakarta.avif",
    location: "6929+99F Ps. Beringharjo, Jl. Pabringan, Ngupasan, Kec. Gondomanan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55122",
    googleMapsUrl: "https://maps.app.goo.gl/jozeh61U12z7pu3UA",
    rating: 4.6,
    timeSlot: "08:00 - 09:00 AM",
    reviews: {
      tiktok: "https://www.tiktok.com/@radarmalioboro/video/7515748301472320824?is_from_webapp=1&sender_device=pc&web_id=7464875937160283655",
      youtube: "",
      google: "",
    },
  },
  {
    title: "Kano Maritim Baros",
    description:
    "Perjalanan ke Kano Maritim Baros dari Pasar Beringharjo (27,7 km/50 menit), di Kano Maritim Baros kita Susur sungai, edukasi mangrove, foto-foto(1 jam 30 menit)",
    image: "/assets/KANO MARITIM BAROS.avif",
    location: "X7XP+H48, Baros, Tirtohargo, Kec. Kretek, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55772",
    googleMapsUrl: "https://maps.app.goo.gl/aCq54ubPv2kyaTU76",
    rating: 4.8,
    timeSlot: "09:00 - 11:15 AM",
    reviews: {
      tiktok: "https://www.tiktok.com/@dipo.wirodimedjo/video/7445862783087938833?q=kano%20maritim%20baros&t=1751174684773",
      youtube: "",
      google: "",
    },
  },
  {
    title: "The Rock Burger Timoho",
    description:
    "Perjalanan ke The Rock Burger Timoho dari Kano Maritim Baros (31,6 km/1 jam), di sana kita makan siang.(1 jam 9 menit)",
    image: "/assets/Burger.avif",
    location: "Jl. Melati Wetan IV, Baciro, Kec. Gondokusuman, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55225",
    googleMapsUrl: "https://maps.app.goo.gl/RkbFKFyTf9JoKCWS6",
    rating: 4.2,
    timeSlot: "11:15 - 13:30 PM",
    reviews: {
      tiktok: "https://www.tiktok.com/@infodhaharjogja/video/7173569785182129434?q=the%20rock%20burger&t=1751715411960",
      youtube: "",
      google: "",
    },
  },
  {
    title: "Jogja Heritage Track",
    description:
    "Perjalanan ke Tugu Jogja (4,4 km/15 menit), Jogja Heritage Track – city tour sejarah & budaya kota Jogja(1 jam 5 menit)",
    image: "/assets/Jogja Heritage.avif",
    location: "Jl. Jend. Sudirman, Gowongan, Kec. Jetis, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55233",
    googleMapsUrl: "https://maps.app.goo.gl/TWwpYr17zDNuFSZ87",
    rating: 4.8,
    timeSlot: "13:30 - 17:00 PM",
    reviews: {
      tiktok: "https://www.tiktok.com/@anggitafy/video/7339846995235949830?q=jogja%20jeritage%20track&t=1751176034787",
      youtube: "",
      google: "",
    },
  },
]

const day2Gallery = [
  {
    id: "Pasar Beringharjo Yogyakarta",
    src: "/assets/Pasar Beringharjo Yogyakarta.avif",
    caption: "Pasar Beringharjo Yogyakarta",
    alt: "",
  },
  {
    id: "Kano Maritim Baros",
    src: "/assets/KANO MARITIM BAROS.avif",
    caption: "Kano Maritim Baros",
    alt: "",
  },
  {
    id: "The Rock Burger Timoho",
    src: "/assets/Burger.avif",
    caption: "The Rock Burger Timoho",
    alt: "",
  },
  {
    id: "The Rock Burger Timoho 2",
    src: "/assets/Burger 2.avif",
    caption: "The Rock Burger Timoho",
    alt: "",
  },
  {
    id: "Jogja Heritage Track",
    src: "/assets/Jogja Heritage.avif",
    caption: "Jogja Heritage Track",
    alt: "",
  },
  {
    id: "Jogja Heritage Track 2",
    src: "/assets/Jogja Heritage 2.avif",
    caption: "Jogja Heritage Track",
    alt: "",
  },
  {
    id: "Jogja Heritage Track 3",
    src: "/assets/Jogja Heritage 3.avif",
    caption: "Jogja Heritage Track",
    alt: "",
  },
  {
    id: "Jogja Heritage Track 4",
    src: "/assets/Jogja Heritage 4.avif",
    caption: "Jogja Heritage Track",
    alt: "",
  },
  {
    id: "Jogja Heritage Track 5",
    src: "/assets/Jogja Heritage 5.avif",
    caption: "Jogja Heritage Track",
    alt: "",
  },
  {
    id: "Jogja Heritage Track 6",
    src: "/assets/Jogja Heritage 6.avif",
    caption: "Jogja Heritage Track",
    alt: "",
  },
  {
    id: "Jogja Heritage Track 7",
    src: "/assets/Jogja Heritage 7.avif",
    caption: "Jogja Heritage Track",
    alt: "",
  },
  {
    id: "Jogja Heritage Track 8",
    src: "/assets/Jogja Heritage 8.avif",
    caption: "Jogja Heritage Track",
    alt: "",
  },
  {
    id: "Jogja Heritage Track 9",
    src: "/assets/Jogja Heritage 9.avif",
    caption: "Jogja Heritage Track",
    alt: "",
  },
  {
    id: "Jogja Heritage Track 10",
    src: "/assets/Jogja Heritage 10.avif",
    caption: "Jogja Heritage Track",
    alt: "",
  },
  {
    id: "Jogja Heritage Track 11",
    src: "/assets/Jogja Heritage 11.avif",
    caption: "Jogja Heritage Track",
    alt: "",
  },
  {
    id: "Jogja Heritage Track 12",
    src: "/assets/Jogja Heritage 12.avif",
    caption: "Jogja Heritage Track",
    alt: "",
  },
]

export default function Day2Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-purple-50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mb-6">
              <span className="text-white font-bold text-2xl">2</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">Day 2</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Culinary delights, historical exploration, and a scenic panoramic bus ride
            </p>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {day2Destinations.map((destination, index) => (
              <DestinationCard key={destination.title} {...destination} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection title="Gallery of Day Two" images={day2Gallery} dayNumber={2} />

      <SuggestionForm dayNumber={2} />

      <Footer />
    </main>
  )
}
