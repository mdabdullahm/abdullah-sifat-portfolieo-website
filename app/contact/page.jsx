import ContactHero from "@/components/contact/ContactHero";

export const metadata = {
  title: "Contact Me | Abdullah Sifat",
  description: "Get in touch with Abdullah Sifat for your next graphic design project via WhatsApp or Email.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <ContactHero />
    </main>
  );
}