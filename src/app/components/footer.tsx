import { Heart, MapPin, Calendar, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-muted/50 to-muted py-16 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-serif font-bold text-2xl text-foreground">Risaa in Yogyakarta</span>
            </div>
            <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">
              Enjoy a memorable journey with your partner. Each destination is chosen to provide a warm and delightful experience
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-pink-500" />
                <span>3-Day Trip</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-purple-500" />
                <span>14 Destinations</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg text-foreground mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-pink-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/day-1" className="text-muted-foreground hover:text-pink-600 transition-colors">
                  Day 1
                </Link>
              </li>
              <li>
                <Link href="/day-2" className="text-muted-foreground hover:text-pink-600 transition-colors">
                  Day 2
                </Link>
              </li>
              <li>
                <Link href="/day-3" className="text-muted-foreground hover:text-pink-600 transition-colors">
                  Day 3
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-bold text-lg text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-pink-500 flex-shrink-0" />
                <span className="text-sm">support@rizkymaulana.web.id</span>
              </li>
              {/* <li className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-purple-500 flex-shrink-0" />
                <span className="text-sm">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-pink-500 flex-shrink-0" />
                <span className="text-sm">Jawa Timur, Indonesia</span>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-center md:text-left">
              © 2025 Risaa Journey.
            </p>

            {/* <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <button className="hover:text-pink-600 transition-colors">Privacy Policy</button>
              <button className="hover:text-pink-600 transition-colors">Terms of Service</button>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
