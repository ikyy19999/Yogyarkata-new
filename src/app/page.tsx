import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />

      {/* Itinerary preview section */}
      <section id="itinerary" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Trip Itinerary</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Every day is planned to make lasting memories together
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Day 1 Card */}
            <div className="group bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Day 1</h3>
                <p className="text-muted-foreground mb-6 text-pretty">
                  Start the day with charming destinations and romantic moments
                </p>
                <a
                  href="/day-1"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  See More →
                </a>
              </div>
            </div>

            {/* Day 2 Card */}
            <div className="group bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Day 2</h3>
                <p className="text-muted-foreground mb-6 text-pretty">
                  Exploring special places with fun activities
                </p>
                <a
                  href="/day-2"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  See More →
                </a>
              </div>
            </div>

            {/* Day 3 Card */}
            <div className="group bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Day 3</h3>
                <p className="text-muted-foreground mb-6 text-pretty">
                  Ending the journey with beautiful memories to cherish
                </p>
                <a
                  href="/day-3"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  See More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
