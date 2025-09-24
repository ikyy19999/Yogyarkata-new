"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Send, MessageSquare, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"

interface SuggestionFormProps {
  dayNumber: number
}

export default function SuggestionForm({ dayNumber }: SuggestionFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    description: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.destination.trim()) {
      alert("Kindly provide the name of the destination")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/send-suggestion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          dayNumber,
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          destination: "",
          description: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting suggestion:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Card className="border-2 border-pink-100 shadow-lg">
            <CardHeader className="text-center bg-gradient-to-r from-pink-50 to-purple-50">
              <div className="flex items-center justify-center mb-4">
                <MessageSquare className="h-8 w-8 text-pink-500 mr-3" />
                <CardTitle className="font-serif text-2xl md:text-3xl text-foreground">
                  Day {dayNumber} Suggested Destinations
                </CardTitle>
              </div>
              <p className="text-muted-foreground text-pretty">
                Got any other romantic destination ideas? Share your suggestions to complete Day {dayNumber} of the trip.
              </p>
            </CardHeader>

            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-pink-200 focus:border-pink-400 focus:ring-pink-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email (Opsional)
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-pink-200 focus:border-pink-400 focus:ring-pink-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="destination" className="text-foreground font-medium">
                    Name of Destination <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="destination"
                    name="destination"
                    type="text"
                    placeholder="E.g.: Klayar Beach, Borobudur Temple, etc"
                    value={formData.destination}
                    onChange={handleInputChange}
                    required
                    className="border-pink-200 focus:border-pink-400 focus:ring-pink-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-foreground font-medium">
                    Description of Destination (Optional)
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Why is this spot perfect for a romantic trip?"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="border-pink-200 focus:border-pink-400 focus:ring-pink-400 resize-none"
                  />
                </div>

                <div className="flex flex-col items-center space-y-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.destination.trim()}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send
                      </>
                    )}
                  </Button>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-600 text-center bg-green-50 px-4 py-2 rounded-full border border-green-200"
                    >
                      Thanks! Your feedback was submitted successfully
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-600 text-center bg-red-50 px-4 py-2 rounded-full border border-red-200"
                    >
                      Oops, something went wrong. Try again!
                    </motion.div>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
