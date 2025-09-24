"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import PhotoSlideshow from "./photo-slideshow"

export default function HeroSection() {
  const scrollToItinerary = () => {
    const element = document.getElementById("itinerary")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const heroImages = [
    "/assets/background1.jpg",
    "/assets/background2.jpg",
    "/assets/background3.jpg",
    // "/sunrise-bromo-mountain-romantic-couple.jpg",
    // "/desert-sand-dunes-romantic-couple.jpg",
    // "/green-hills-savanna-romantic-landscape.jpg",
    // "/tall-waterfall-cliff-romantic-nature.jpg",
  ]

  return (
    <section className="relative min-h-screen pt-16 flex items-center justify-center overflow-hidden">
      <PhotoSlideshow images={heroImages} />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 z-5"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10"
        >
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
            <span className="drop-shadow-2xl">Our 3-Day Trip to</span>
            <br />
            <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-red-300 bg-clip-text text-transparent drop-shadow-lg">
              Yogyakarta
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-2xl mx-auto drop-shadow-lg font-light">
            Make memories on a beautiful 3-day escape in Yogyakarta.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
        >
          <div className="bg-white/15 backdrop-blur-lg border border-white/25 rounded-2xl p-6 shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
                <img src="https://cdn-icons-png.flaticon.com/512/2693/2693507.png" alt="Calendar" className="w-7 h-7" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3</div>
                <div className="text-sm text-white/80 font-medium">Days</div>
              </div>
            </div>
          </div>

          <div className="bg-white/15 backdrop-blur-lg border border-white/25 rounded-2xl p-6 shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
                <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Location" className="w-7 h-7" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">14</div>
                <div className="text-sm text-white/80 font-medium">Destinations</div>
              </div>
            </div>
          </div>

          <div className="bg-white/15 backdrop-blur-lg border border-white/25 rounded-2xl p-6 shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
                <img src="https://cdn-icons-png.flaticon.com/512/2721/2721688.png" alt="Money" className="w-7 h-7" />
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-white">Rp 2.5M</div>
                <div className="text-sm text-white/80 font-medium">Total Cost</div>
              </div>
            </div>
          </div>

          <div className="bg-white/15 backdrop-blur-lg border border-white/25 rounded-2xl p-6 shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-lg">
                <img src="https://cdn-icons-png.flaticon.com/512/2784/2784459.png" alt="Clock" className="w-7 h-7" />
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-white">72</div>
                <div className="text-sm text-white/80 font-medium">Hours</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-16"
        >
          <Button
            onClick={scrollToItinerary}
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-10 py-4 text-lg font-semibold rounded-2xl shadow-2xl shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300 hover:scale-105 border-0"
          >
            Start Journey
          </Button>
        </motion.div>

        <motion.button
          onClick={scrollToItinerary}
          className="text-white/90 hover:text-white transition-all duration-300 hover:scale-110"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center space-y-2">
            <ChevronDown className="h-6 w-6 drop-shadow-lg" />
            <div className="text-xs font-medium drop-shadow">Scroll Down</div>
          </div>
        </motion.button>
      </div>
    </section>
  )
}
