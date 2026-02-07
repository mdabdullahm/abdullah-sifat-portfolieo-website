import AboutAchievements from "@/components/about/AboutAchievements";
import AboutCTA from "@/components/about/AboutCTA";
import AboutExperience from "@/components/about/AboutExperience";
import AboutIntro from "@/components/about/AboutIntro";
import AboutSkills from "@/components/about/AboutSkills";
import AboutStory from "@/components/about/AboutStory";
import AboutWhyMe from "@/components/about/AboutWhyMe";
import ProfileVisual from "@/components/about/ProfileVisual";

export const metadata = {
    title: "About Me | Abdullah Sifat",
    description: "Learn more about Abdullah Sifat's journey and expertise in Graphic Design.",
};

export default function AboutPage() {
    return (
        <main className="bg-[#0A0A0A]">
            {/* about section 1 */}
            <AboutIntro />
            {/* Profile Visual Illustration section 2*/}
            <ProfileVisual />
            {/* Short Bio section 3 */}
            <AboutStory />
            {/* Skills & Tools section 4 */}
            <AboutSkills/>
            {/* Experience/Journey section 5 */}
            <AboutExperience/>
            {/* Why Work With Me section 6 */}
            <AboutWhyMe/>
            {/* Achievements/Stats section 7*/}
            <AboutAchievements/>
            {/*  Call to Action (CTA) section 9 */}
            <AboutCTA/>
        </main>
    );
}