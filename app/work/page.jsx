import PortfolioGrid from "@/components/work/PortfolioGrid";
import WorkHero from "@/components/work/WorkHero";
import WorkImpact from "@/components/work/WorkImpact";

export const metadata = {
  title: "work | Abdullah Sifat",
  description: "Explore the latest graphic design projects and case studies by Abdullah Sifat.",
};

export default function WorkPage() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen">
        {/* work hero section 1 */}
      <WorkHero />
      {/* portfolioGrid section 2 */}
      <PortfolioGrid/>
      {/* Results/Impact section 3 */}
      <WorkImpact/>
    </main>
  );
}