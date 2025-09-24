"use client"
import { useState, useEffect } from "react"
import { X, Heart, MapPin, Camera, Coffee } from "lucide-react"

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Tampilkan popup saat halaman pertama kali dimuat
    setIsOpen(true)
    // Delay untuk animasi masuk
    setTimeout(() => setIsVisible(true), 100)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => setIsOpen(false), 300)
  }

  if (!isOpen) return null

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
      isVisible ? 'bg-black/60 backdrop-blur-sm' : 'bg-black/0'
    }`}>
      <div className={`relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 
        text-gray-800 dark:text-gray-100 max-w-lg w-full mx-4 rounded-3xl shadow-2xl overflow-hidden
        transition-all duration-500 transform ${
          isVisible ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-8'
        }`}>
        
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-200/30 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-200/30 to-transparent rounded-full transform -translate-x-12 translate-y-12"></div>
        
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-110 group"
        >
          <X className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:rotate-90 transition-transform duration-200" />
        </button>

        <div className="relative p-8">
          {/* Header with animated heart */}
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 text-pink-500 mr-3 animate-pulse" />
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Welcome to Our Journey!
            </h2>
          </div>

          {/* Content with icons */}
          <div className="space-y-4 mb-6">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <span className="font-semibold">Jogja Trip 3 Days, 2 Nights</span> - Golden hour walks, 
                random inside jokes, and way too many street food stops 🌅
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <Camera className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Its soft, its messy, its us somewhere between holding hands in quiet streets 
                and laughing until the bakpia almost fell 🥐😂
              </p>
            </div>

            <div className="flex items-start space-x-3">
              <Coffee className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Stay comfy, you are one of us now ✨
              </p>
            </div>
          </div>

          {/* Authors */}
          <div className="text-center mb-6">
            <p className="text-lg font-medium bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Rizky & Salma 🌸
            </p>
          </div>

          {/* Info cards */}
          <div className="space-y-3 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-2xl p-4">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                💻 <span className="font-medium">Best Experience:</span> Desktop mode or laptop/computer recommended
              </p>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-2xl p-4">
              <p className="text-sm text-amber-800 dark:text-amber-200">
                🐛 <span className="font-medium">Found a bug?</span><br />
                Email: support@rizkymaulana.web.id<br />
                Subject: &quot;Bug in website&quot; + screenshot
              </p>
            </div>
          </div>

          {/* Action button */}
          <button
            onClick={handleClose}
            className="w-full py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 
              text-white font-medium rounded-2xl transition-all duration-300 transform hover:scale-[1.02] 
              shadow-lg hover:shadow-xl active:scale-[0.98]"
          >
            Lets Begin Our Journey 🚀
          </button>
        </div>
      </div>
    </div>
  )
}