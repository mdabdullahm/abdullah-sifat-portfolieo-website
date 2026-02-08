import Pricing from "@/components/services/Pricing";
import ProcessSection from "@/components/services/ProcessSection";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import WhyChooseServices from "@/components/services/WhyChooseServices";


export const metadata = {
  title: "My Services | Abdullah Sifat",
  description: "Explore the professional graphic design services offered by Abdullah Sifat.",
};

export default function ServicesPage() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen">
        {/* hero section 1 */}
      <ServicesHero />
      {/* services section 2*/}
      <ServicesList/>
      {/* How I Work section 3 */}
      <ProcessSection/>
      {/* Pricing/Packages section 4 */}
      <Pricing/>
      {/* Why Choose My Services section 5 */}
      <WhyChooseServices/>
      
    </main>
  );
}