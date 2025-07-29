import { Hero } from "@/components/hero"
import { ServicesHighlight } from "@/components/services-highlight"
import { Location } from "@/components/location"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesHighlight />
      <Location />
    </main>
  )
}
