import { ArrowRight } from "lucide-react";



export function DonationCta() {
  return (
    <section className="container" id="donate">
      <div className="cta">
        <div><div className="section-kicker">Make an impact</div><h2>Give a young heart one more reason to believe.</h2></div>
        <a className="btn btn-primary" href="#contact">MAKE A DONATION <ArrowRight size={14}/></a>
      </div>
    </section>
  );
}