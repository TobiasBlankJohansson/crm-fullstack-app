import AboutSection from "../components/AboutSection";
import { Carousel } from "../components/Carousel";
import ContactForm from "../components/ContactForm";
import { PricingSection } from "../components/PricingSection";

export function HomePage() {
  return (
    <div>
      <div id="home" className="h-screen flex flex-col items-center justify-start px-4 pb-10 pt-10">
        <h1 className="text-3xl font-bold text-blue-700 mt-10">Manage, Organize, and Build: Unlock the Power of Our CRM</h1>
        <Carousel />
      </div>
      <div id="about" className="h-screen flex items-center justify-center bg-white">
        <AboutSection />
      </div>
      <div id="pricing" className="h-screen flex items-center justify-center px-8">
        <PricingSection />
      </div>
      <div id="contact" className="h-screen flex items-center justify-center bg-blue-50">
        <ContactForm />
      </div>
    </div>
  );
}
