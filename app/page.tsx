import HeroSection from "./components/hero-section";
import AboutMe from "./components/about-me";
import Projects from "./components/projects";
import AchievementsSection from "./components/achievement";
import EmailSection from "./components/email";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-900">
      <div className="container mx-auto px-14">
        <HeroSection />
        <AchievementsSection />
        <AboutMe />
        <Projects />
      </div>
      <div className="bg-zinc-700">
        <EmailSection />
      </div>
    </div>
  );
}
