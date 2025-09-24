"use client"

import { motion } from "framer-motion"
import { Download, DownloadCloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import JSZip from "jszip"

interface GalleryImage {
  id: string
  src: string
  caption?: string // Made caption optional
  alt: string
}

interface GallerySectionProps {
  title: string
  images: GalleryImage[]
  dayNumber: number
}

export default function GallerySection({ title, images, dayNumber }: GallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isDownloading, setIsDownloading] = useState(false)

  const downloadImage = async (imageUrl: string, filename: string) => {
    try {
      const response = await fetch(imageUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error downloading image:", error)
    }
  }

  const downloadAllImages = async () => {
    setIsDownloading(true)
    try {
      const zip = new JSZip()

      for (let i = 0; i < images.length; i++) {
        const image = images[i]
        try {
          const response = await fetch(image.src)
          const blob = await response.blob()
          zip.file(`day-${dayNumber}-photo-${i + 1}.jpg`, blob)
        } catch (error) {
          console.error(`Error adding image ${i + 1} to zip:`, error)
        }
      }

      const content = await zip.generateAsync({ type: "blob" })
      const url = window.URL.createObjectURL(content)
      const link = document.createElement("a")
      link.href = url
      link.download = `romantic-journey-day-${dayNumber}-gallery.zip`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error creating zip file:", error)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h2>
          <p className="text-muted-foreground mb-8 text-pretty">
            Beautiful photo collection from Day {dayNumber} of our romantic journey
          </p>

          <Button
            onClick={downloadAllImages}
            disabled={isDownloading}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
          >
            {isDownloading ? (
              <>
                <DownloadCloud className="mr-2 h-4 w-4 animate-spin" />
                Downloading...
              </>
            ) : (
              <>
                <DownloadCloud className="mr-2 h-4 w-4" />
                Download All Photos (ZIP)
              </>
            )}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => setSelectedImage(image.src)}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation()
                        downloadImage(image.src, `day-${dayNumber}-${image.id}.jpg`)
                      }}
                      variant="secondary"
                      size="sm"
                      className="bg-white/90 hover:bg-white text-foreground"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Unduh
                    </Button>
                  </div>
                </div>
                {image.caption && (
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground text-center text-pretty">{image.caption}</p>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Gallery image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <Button
                onClick={() => setSelectedImage(null)}
                variant="secondary"
                size="sm"
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-foreground"
              >
                ✕
              </Button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
