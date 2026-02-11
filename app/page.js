import About from "@/components/home/About";
import Cta from "@/components/home/Cta";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Skills from "@/components/home/Skills";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseMe from "@/components/home/WhyChooseMe";
import Work from "@/components/home/Work";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Background Decor - Matrix Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(#3127F5 1px, transparent 1px), linear-gradient(90deg, #3127F5 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}>
      </div>
      {/* hero section 1 */}
      <Hero />
      {/* services section 2 */}
      <Services/>
      {/* work section 3 */}
      <Work/>
      {/* about me section 4 */}
      <About/>
      {/* Toolkit skills section 5 */}
      <Skills/>
      {/* Why Choose Me section 6 */}
      <WhyChooseMe/>
      {/* Testimonials section 7 */}
      <Testimonials/>
      {/* Call to Action (CTA) section 8 */}
      <Cta/>
    </main>
  );
}
