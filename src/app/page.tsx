import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import About from '@/components/About/About'
import Services from '@/components/Services/Services'
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs'
import VisionMission from '@/components/VisionMission/VisionMission'
import Gallery from '@/components/Gallery/Gallery'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <VisionMission />
      <Gallery />
      <Contact />
      <Footer />
    </>
  )
}
