import type React from "react"
import type { Metadata } from "next"
import { Inter, Crimson_Text } from "next/font/google"
import DisableRightClick from "./DisableRightClick"
import "./globals.css"
import WelcomePopup from "./WelcomePopup"

const inter = Inter({ subsets: ["latin"], weight: ["300","400","500","600","700"], variable: "--font-inter" })
const crimson = Crimson_Text({ subsets: ["latin"], weight: ["400","600","700"], variable: "--font-crimson" })

export const metadata: Metadata = {
  title: "3 Days Journey in Yogyakarta",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${crimson.variable} antialiased`}>
      <body className="min-h-screen bg-background font-sans text-foreground">
        <WelcomePopup />
        <DisableRightClick />
        {children}
      </body>
    </html>
  )
}
