import { ArrowRight } from "lucide-react";




export function VolunteerBanner() {
  return (
    <section className="container section" id="impact">
      <div className="banner">
        <div className="banner-copy">
          <div className="eyebrow">There is a place for you here</div>
          <h2 className="serif">Your time can become a child&apos;s turning point.</h2>
          <p>Volunteer your skills, mentor a young person, host a collection drive or simply show up. Small acts of consistency can create big moments of hope.</p>
          <a className="btn btn-light" href="#contact">BECOME A VOLUNTEER <ArrowRight size={14}/></a>
        </div>
      </div>
    </section>
  );
}