import AboutSection from "../components/AboutSection";
import { Carousel } from "../components/Carousel";
import ContactForm from "../components/ContactForm";
import { HomePageHeader } from "../components/HomePageHeader";
import { PricingSection } from "../components/PricingSection";

export function HomePage() {
  return (
    <div>
      <HomePageHeader />
      <div id="home" className="h-screen flex items-center justify-center">
        <Carousel />
      </div>
      <div id="about" className="h-screen flex items-center justify-center bg-white">
        <AboutSection />
      </div>
      <div id="pricing" className="h-screen flex items-center justify-center bg-gray-100">
        <PricingSection />
      </div>
      <div id="contact" className="h-screen flex items-center justify-center bg-blue-50">
        <ContactForm />
      </div>
    </div>
  );
}
