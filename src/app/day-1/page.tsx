import DestinationCard from "../components/destination-card"
import Footer from "../components/footer"
import GallerySection from "../components/gallery-section"
import Navbar from "../components/navbar"
import SuggestionForm from "../components/suggestion-form"

const day1Destinations = [
  {
    title: "Lempuyangan Station",
    description:
    "Perjalanan ke Lempuyangan Station dari Pasar Senen Station (572 km/7 jam 30 menit menit).",
    image: "/assets/Lempuyangan.avif",
    location: "Jln. Lempuyangan No.1 RT 01/RW 01, Bausasran, Danurejan, Yogyakarta City, Special Region of Yogyakarta",
    googleMapsUrl: "https://maps.app.goo.gl/GQs8od91sVzrKm7S7",
    rating: 4.9,
    timeSlot: "06:47 - 06:50 AM", // Added time slots to all destinations
    reviews: {
      tiktok: "https://www.tiktok.com/@omahtukangan493/video/7300521730135674117?q=stasiun%20lempuyangan&t=1751006371871",
      youtube: "",
      google: "",
    },
  },
  {
    title: "RedDoorz @ Mantrijeron 2",
    description:
    "Perjalanan ke RedDoorz @ Mantrijeron 2 dari Lempuyangan Station (4,8 km/16 menit).",
    image: "/assets/Reddorz.avif",
    location: "Jl. DI Panjaitan, Mantrijeron, Kec. Mantrijeron, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55143",
    googleMapsUrl: "https://maps.app.goo.gl/Qxduo7NvwyQ1F5in7",
    rating: 4.6,
    timeSlot: "06:50 - 07:00 AM",
    reviews: {
      tiktok: "https://tiktok.com/search/whispering-sands",
      youtube: "",
      google: "",
    },
  },
  {
    title: "Makam Mama nya Salma",
    description:
    "Perjalanan ke Makam Mama nya Salma dari RedDoorz @ Mantrijeron 2 (1,9 km/6 menit).",
    image: "/assets/Kuburan.avif",
    location: "",
    googleMapsUrl: "",
    rating: 4.5,
    timeSlot: "07:00 - 07:30 AM",
    reviews: {
      tiktok: "",
      youtube: "",
      google: "",
    },
  },
  {
    title: "Pasar Ngasem",
    description:
    "Perjalanan ke Pasar Ngasem dari Pemakaman Karangkajen (3,7 km/7 menit), di sana kita sarapan dan mencoba makanan tradisional.",
    image: "/assets/Pasar Ngasem.avif",
    location: "Jl. Polowijan No.11, Patehan, Kecamatan Kraton, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55133",
    googleMapsUrl: "https://maps.app.goo.gl/yZ2h5rjZSCxfeSYj7",
    rating: 4.7,
    timeSlot: "07:30 - 08:00 AM",
    reviews: {
      tiktok: "https://www.tiktok.com/@zoomeeku/video/7519763934887431431?q=pasar%20ngasem&t=1751006775409",
      youtube: "",
      google: "",
    },
  },
  {
    title: "Taman Sari",
    description:
    "",
    image: "/assets/Taman Sari.avif",
    location: "Patehan, Kraton, Yogyakarta City, Special Region of Yogyakarta 55133",
    googleMapsUrl: "https://maps.app.goo.gl/C9f3GQ6fe5hBh5dm6",
    rating: 4.7,
    timeSlot: "08:00 - 09:15 AM",
    reviews: {
      tiktok: "https://www.tiktok.com/@dhiyanahasanah/video/7398743045727997189?q=taman%20sari&t=1751087893725",
      youtube: "",
      google: "",
    },
  },
  {
    title: "Yogyakarta Palace",
    description:
    "Perjalanan ke Keraton Yogyakarta dari Taman Sari (1,2 km/5 menit), di Keraton Jogja kita Tur museum, bangsal, alun-alun 1 jam",
    image: "/assets/Keraton Yogyakarta.avif",
    location: "Jl. Rotowijayan Blok No. 1, Panembahan, Kecamatan Kraton, Kota Yogyakarta, Daerah Istimewa Yogyakarta",
    googleMapsUrl: "https://maps.app.goo.gl/huQeYuJHytm71iQZA",
    rating: 4.7,
    timeSlot: "09:15 - 10:15 PM",
    reviews: {
      tiktok: "https://www.tiktok.com/@suaraci/video/7446412572640955653?q=keraton%20yogyakarta%20wisata&t=1751083124545",
      youtube: "",
      google: "",
    },
  },
  {
    title: "Tempo Gelato",
    description:
    "Perjalanan ke Tempo Gelato dari Keraton Yogyakarta (2,9 km/10 menit), di Tempo Gelato kita nikmati gelato dan menikmati makan siang di sekitaran Tempo Gelato (2 jam 10 menit)",
    image: "/assets/Gelato.avif",
    location: "Jl. Prawirotaman No.38B, Brontokusuman, Kec. Mergangsan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55153",
    googleMapsUrl: "https://maps.app.goo.gl/TpJKEobE4JYPZ35c6",
    rating: 4.7,
    timeSlot: "10:15 - 12:25 PM",
    reviews: {
      tiktok: "https://www.tiktok.com/@faradilalma/video/7436421062688066871?q=tempo%20gelato%20prawirotaman&t=1751086907063",
      youtube: "",
      google: "",
    },
  },
  {
    title: "PICTNIQ",
    description:
    "Perjalanan ke PICTNIQ dari Tempo Gelato (17,7 km/35 menit), di PICTNIQ Land kita Foto di mini landmark dunia, duduk santai, snack (2 jam)",
    image: "/assets/PICTNIQ.avif",
    location: "5F4P+J3M, Jl. Ngoro Ngoro Ombo, Ngandong, Patuk, Kec. Patuk, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta 55862",
    googleMapsUrl: "https://maps.app.goo.gl/xiQmcqv2NbLeKFeh7",
    rating: 4.7,
    timeSlot: "13:00 - 15:00 PM",
    reviews: {
      tiktok: "https://www.tiktok.com/@nsaalw/video/7493813559512567045?q=pictiniq%20jogja&t=1751166745876",
      youtube: "",
      google: "",
    },
  },
  {
    title: "Pasar Prawirotaman",
    description:
    "Perjalanan ke Pasar Prawirotaman dari Pictniq (16,8 km/33 menit), di Pasar Prawirotaman kita Eksplor toko batik, suvenir, kerajinan, Makan sore di area Prawirotaman 1 jam",
    image: "/assets/Pasar prawirotaman.avif",
    location: "Jl. Parangtritis No.103, Brontokusuman, Kec. Mergangsan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55153",
    googleMapsUrl: "https://maps.app.goo.gl/ysFEtqsmBeS3iMwT7",
    rating: 4.7,
    timeSlot: "15:00 - 15:33 PM",
    reviews: {
      tiktok: "https://www.tiktok.com/@javafoodie/video/7267924631707798790?q=Pasar%20Prawirotaman&t=1751087665728",
      youtube: "",
      google: "",
    },
  },
  {
    title: "Jalan Malioboro",
    description:
    "Perjalanan ke Malioboro dari Pasar Prawirotaman (2,9 km/10 menit), Makan malam di Malioboro (1 jam)",
    image: "/assets/Malioboro.avif",
    location: "6928+G3G, Jl. Ketandan Kulon, Ngupasan, Kec. Gondomanan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55122",
    googleMapsUrl: "https://maps.app.goo.gl/bDDMqPBwNkikmWgD6",
    rating: 4.7,
    timeSlot: "15:33 - 19:00 PM",
    reviews: {
      tiktok: "https://www.tiktok.com/@davidstwnn/video/7280798673016016133?q=MALIOBORO&t=1751088550628",
      youtube: "",
      google: "",
    },
  },
]

const day1Gallery = [
  {
    id: "Stasiun-Lempuyangan",
    src: "/assets/Lempuyangan.avif",
    caption: "Stasiun Lempuyangan",
    alt: "",
  },
  {
    id: "RedDoorz @ Mantrijeron 2",
    src: "/assets/Reddorz.avif",
    caption: "RedDoorz @ Mantrijeron 2",
    alt: "",
  },
  {
    id: "Makam Mama nya Salma",
    src: "/assets/Kuburan.avif",
    caption: "Makam Mama nya Salma",
    alt: "",
  },
  {
    id: "Pasar Ngasem",
    src: "/assets/Pasar Ngasem.avif",
    caption: "Pasar Ngasem",
    alt: "",
  },
  {
    id: "Taman Sari",
    src: "/assets/Taman Sari.avif",
    caption: "Taman Sari",
    alt: "",
  },
  {
    id: "Taman Sari 2",
    src: "/assets/Taman Sari 2.avif",
    caption: "Taman Sari",
    alt: "",
  },
  {
    id: "Taman Sari 3",
    src: "/assets/Taman Sari 3.avif",
    caption: "Taman Sari",
    alt: "",
  },
  {
    id: "Taman Sari 4",
    src: "/assets/Taman Sari 4.avif",
    caption: "Taman Sari",
    alt: "",
  },
  {
    id: "Taman Sari 5",
    src: "/assets/Taman Sari 5.avif",
    caption: "Taman Sari",
    alt: "",
  },
  {
    id: "Taman Sari 6",
    src: "/assets/Taman Sari 6.avif",
    caption: "Taman Sari",
    alt: "",
  },
  {
    id: "Taman Sari 7",
    src: "/assets/Taman Sari 7.avif",
    caption: "Taman Sari",
    alt: "",
  },
  {
    id: "Taman Sari 8",
    src: "/assets/Taman Sari 8.avif",
    caption: "Taman Sari",
    alt: "",
  },
  {
    id: "Taman Sari 9",
    src: "/assets/Taman Sari 9.avif",
    caption: "Taman Sari",
    alt: "",
  },
  {
    id: "Taman Sari 10",
    src: "/assets/Taman Sari 10.avif",
    caption: "Taman Sari",
    alt: "",
  },
  {
    id: "Taman Sari 11",
    src: "/assets/Taman Sari 11.avif",
    caption: "Taman Sari",
    alt: "",
  },
  {
    id: "Yogyakarta Palace",
    src: "/assets/Keraton Yogyakarta.avif",
    caption: "Yogyakarta Palace",
    alt: "",
  },
  {
    id: "Tempo Gelato",
    src: "/assets/Gelato.avif",
    caption: "Tempo Gelato",
    alt: "",
  },
  {
    id: "PICTNIQ",
    src: "/assets/PICTNIQ.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 2",
    src: "/assets/PICTNIQ 2.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 3",
    src: "/assets/PICTNIQ 3.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 4",
    src: "/assets/PICTNIQ 4.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 5",
    src: "/assets/PICTNIQ 5.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 6",
    src: "/assets/PICTNIQ 6.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 7",
    src: "/assets/PICTNIQ 7.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 8",
    src: "/assets/PICTNIQ 8.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 9",
    src: "/assets/PICTNIQ 9.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 10",
    src: "/assets/PICTNIQ 10.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 11",
    src: "/assets/PICTNIQ 11.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 12",
    src: "/assets/PICTNIQ 12.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 13",
    src: "/assets/PICTNIQ 13.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 14",
    src: "/assets/PICTNIQ 14.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 15",
    src: "/assets/PICTNIQ 15.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 16",
    src: "/assets/PICTNIQ 16.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 17",
    src: "/assets/PICTNIQ 17.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 18",
    src: "/assets/PICTNIQ 18.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 19",
    src: "/assets/PICTNIQ 19.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 20",
    src: "/assets/PICTNIQ 20.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 21",
    src: "/assets/PICTNIQ 21.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 22",
    src: "/assets/PICTNIQ 22.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 23",
    src: "/assets/PICTNIQ 23.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 24",
    src: "/assets/PICTNIQ 24.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 25",
    src: "/assets/PICTNIQ 25.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 26",
    src: "/assets/PICTNIQ 26.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 27",
    src: "/assets/PICTNIQ 27.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 28",
    src: "/assets/PICTNIQ 28.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 29",
    src: "/assets/PICTNIQ 29.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 30",
    src: "/assets/PICTNIQ 30.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "PICTNIQ 31",
    src: "/assets/PICTNIQ 31.avif",
    caption: "PICTNIQ",
    alt: "",
  },
  {
    id: "Pasar Prawirotaman",
    src: "/assets/Pasar prawirotaman.avif",
    caption: "Pasar Prawirotaman",
    alt: "",
  },
  {
    id: "Jalan Malioboro",
    src: "/assets/Malioboro.avif",
    caption: "Jalan Malioboro",
    alt: "",
  },
  {
    id: "Jalan Malioboro 2",
    src: "/assets/Malioboro 2.avif",
    caption: "Jalan Malioboro",
    alt: "",
  },
]

export default function Day1Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-pink-50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mb-6">
              <span className="text-white font-bold text-2xl">1</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">Day 1</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Begin your journey with stunning natural sights and memorable moments
            </p>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {day1Destinations.map((destination, index) => (
              <DestinationCard key={destination.title} {...destination} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection title="Gallery of Day One" images={day1Gallery} dayNumber={1} />

      <SuggestionForm dayNumber={1} />

      <Footer />
    </main>
  )
}
