import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutVibe from "@/components/AboutVibe";
import ServicesBento from "@/components/ServicesBento";
import DentalTourism from "@/components/DentalTourism";
import DoctorProfile from "@/components/DoctorProfile";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary selection:text-primary-foreground">
      <Navigation />
      <Hero />
      <AboutVibe />
      <ServicesBento />
      <DentalTourism />
      <DoctorProfile />
      <Testimonials />
      <Footer />
    </main>
  );
}
