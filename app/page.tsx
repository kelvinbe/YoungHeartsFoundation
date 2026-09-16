import { ArrowRight, Play } from "lucide-react";
import Header from "../components/Header";
import { HelpSection, StorySection, VolunteerBanner, ImpactStats, Campaigns, DonationCta, Footer } from "../components/Section";

export default function Home() {
  return (
    <main id="top">
      <Header />
      <section className="hero">
        <div className="container">
          <div className="hero-card">
            <div className="hero-copy">
              <div className="eyebrow">Non-profit organization · For children without safe housing</div>
              <h1 className="serif">Together, we can give every child a place to belong.</h1>
              <p>Young Hearts Foundation provides safe shelter, food, education and compassionate support for children experiencing homelessness — while working toward a future beyond survival.</p>
              <div className="hero-buttons"><a className="btn btn-primary" href="#donate">DONATE NOW <ArrowRight size={14}/></a><a className="btn btn-light" href="#about"><Play size={13} fill="currentColor"/> OUR STORY</a></div>
            </div>
          </div>
        </div>
      </section>
      <HelpSection />
      <StorySection />
      <VolunteerBanner />
      <ImpactStats />
      <Campaigns />
      <DonationCta />
      <Footer />
    </main>
  );
}
