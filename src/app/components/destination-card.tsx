"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

interface DestinationCardProps {
  title: string
  description: string
  image: string
  location: string
  googleMapsUrl: string
  rating: number
  reviews: {
    tiktok?: string
    youtube?: string
    google?: string
  }
  index: number
  timeSlot?: string
}

export default function DestinationCard({
  title,
  description,
  image,
  location,
  googleMapsUrl,
  rating,
  reviews,
  index,
  timeSlot,
}: DestinationCardProps) {
  const [showReviews, setShowReviews] = useState(false)

  return (
    <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border-0 shadow-lg bg-gradient-to-br from-white to-gray-50/50">
      <div className="relative">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-64 object-cover" />

        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center space-x-2 shadow-lg border border-white/20">
          <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
            <Star className="h-3 w-3 text-white fill-current" />
          </div>
          <span className="text-sm font-bold text-gray-800">{rating}</span>
        </div>

        {timeSlot && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl px-4 py-2 flex items-center space-x-2 shadow-xl">
            <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2784/2784459.png"
                alt="Time"
                className="w-4 h-4 brightness-0 invert"
              />
            </div>
            <span className="text-sm font-bold text-white">{timeSlot}</span>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      <CardContent className="p-6">
        <h3 className="font-serif text-xl font-bold text-gray-800 mb-3 line-clamp-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{description}</p>

        <div className="flex items-center text-gray-500 mb-5">
          <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mr-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
              alt="Location"
              className="w-3 h-3 brightness-0 invert"
            />
          </div>
          <span className="text-sm font-medium">{location}</span>
        </div>

        <div className="flex gap-3 mb-4">
          <Button
            onClick={() => window.open(googleMapsUrl, "_blank")}
            className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 rounded-xl py-3 shadow-lg hover:shadow-xl transition-all duration-200"
            size="sm"
          >
            <div className="w-5 h-5 rounded-lg bg-white/20 flex items-center justify-center mr-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
                alt="Maps"
                className="w-3 h-3 brightness-0 invert"
              />
            </div>
            Maps
          </Button>

          <Button
            onClick={() => setShowReviews(!showReviews)}
            className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-0 rounded-xl py-3 shadow-lg hover:shadow-xl transition-all duration-200"
            size="sm"
          >
            <div className="w-5 h-5 rounded-lg bg-white/20 flex items-center justify-center mr-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                alt="Reviews"
                className="w-3 h-3 brightness-0 invert"
              />
            </div>
            Reviews
          </Button>
        </div>

        {showReviews && (
          <div className="pt-4 border-t border-gray-200">
            <div className="flex gap-2 flex-wrap">
              {reviews.tiktok && (
                <Button
                  onClick={() => window.open(reviews.tiktok, "_blank")}
                  variant="ghost"
                  size="sm"
                  className="text-xs bg-gradient-to-r from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 text-pink-700 border border-pink-200 rounded-lg px-3 py-2"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png"
                    alt="TikTok"
                    className="w-4 h-4 mr-2"
                  />
                  TikTok
                </Button>
              )}
              {reviews.youtube && (
                <Button
                  onClick={() => window.open(reviews.youtube, "_blank")}
                  variant="ghost"
                  size="sm"
                  className="text-xs bg-gradient-to-r from-red-50 to-red-100 hover:from-red-100 hover:to-red-200 text-red-700 border border-red-200 rounded-lg px-3 py-2"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                    alt="YouTube"
                    className="w-4 h-4 mr-2"
                  />
                  YouTube
                </Button>
              )}
              {reviews.google && (
                <Button
                  onClick={() => window.open(reviews.google, "_blank")}
                  variant="ghost"
                  size="sm"
                  className="text-xs bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 text-blue-700 border border-blue-200 rounded-lg px-3 py-2"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                    alt="Google"
                    className="w-4 h-4 mr-2"
                  />
                  Google
                </Button>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
