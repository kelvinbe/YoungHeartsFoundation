import Image from "next/image";
import { BookOpen, HeartHandshake, Home, ArrowRight, CheckCircle2 } from "lucide-react";

const imageBase = "https://images.unsplash.com/";

export function HelpSection() {
  const items = [
    { icon: <Home size={18} />, title: "Safe Shelter", text: "A warm, stable place where children can rest, recover and feel at home." },
    { icon: <BookOpen size={18} />, title: "Education", text: "School support, tutoring and life skills that open doors to a brighter future." },
    { icon: <HeartHandshake size={18} />, title: "Family Support", text: "Counselling and practical support that help children reconnect with safe adults." },
  ];
  return (
    <section className="section" id="programs">
      <div className="container">
        <div className="section-head">
          <div><div className="section-kicker">How we help</div><h2>Every young heart<br/>deserves a home.</h2></div>
          <p className="section-intro">We walk alongside children experiencing homelessness, providing the safety, care and opportunity they need to build a hopeful future.</p>
        </div>
        <div className="help-grid">
          {items.map((item) => <article className="help-card" key={item.title}><div className="help-icon">{item.icon}</div><h3>{item.title}</h3><p>{item.text}</p></article>)}
          <div className="child-card"><Image src={imageBase + "photo-1504159506876-f8338247a14a?auto=format&fit=crop&w=700&q=85"} alt="Smiling child" fill sizes="190px" /></div>
        </div>
      </div>
    </section>
  );
}

export function StorySection() {
  return (
    <section className="section story" id="about">
      <div className="container story-grid">
        <div className="story-image">
          <div className="story-image-main"><Image src={imageBase + "photo-1492681290082-e932832941e6?auto=format&fit=crop&w=1000&q=85"} alt="Children spending time together" fill sizes="(max-width: 900px) 70vw, 500px" /></div>
          <div className="story-image-small"><Image src={imageBase + "photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=700&q=85"} alt="Child outdoors" fill sizes="300px" /></div>
        </div>
        <div className="story-copy">
          <div className="section-kicker">Get to know us</div>
          <h2>A childhood should be full of possibility.</h2>
          <p>Young Hearts Foundation exists to make sure homelessness does not define a child&apos;s story. We create safe spaces, provide practical care and connect children to education and people who believe in them.</p>
          <p>Our approach is simple: listen first, protect every child, and help each young person discover what is possible beyond today.</p>
          <a href="#contact" className="btn btn-primary">LEARN MORE <ArrowRight size={14}/></a>
          <div className="stat-row">
            <div className="stat"><strong>1,200+</strong><span>children supported</span></div>
            <div className="stat"><strong>18</strong><span>community partners</span></div>
            <div className="stat"><strong>9</strong><span>years serving families</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

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

export function ImpactStats() {
  return (
    <section className="container" aria-label="Impact statistics">
      <div className="stats">
        <div className="big-stat"><strong>1.2k+</strong><span>children reached through our programs</span></div>
        <div className="big-stat"><strong>4.9/5</strong><span>community partner satisfaction</span></div>
        <div className="big-stat"><strong>65+</strong><span>young people in stable housing pathways</span></div>
        <div className="big-stat"><strong>120k+</strong><span>meals and care packages provided</span></div>
      </div>
    </section>
  );
}

export function Campaigns() {
  const campaigns = [
    { tag: "Shelter", title: "A Bed for Tonight", text: "Help us provide safe emergency accommodation, meals and essentials for children without a safe place to sleep.", pct: 76, img: "photo-1489493585363-d69421e0edd3" },
    { tag: "Education", title: "Back to School", text: "School fees, uniforms, books and consistent tutoring can help a child return to learning with confidence.", pct: 61, img: "photo-1504159506876-f8338247a14a" },
    { tag: "Care", title: "A Brighter Birthday", text: "Celebrate a child with dignity through a simple birthday experience, a gift and a day that feels special.", pct: 88, img: "photo-1472162072942-cd5147eb3902" },
  ];
  return (
    <section className="section" id="campaigns">
      <div className="container">
        <div className="section-head"><div><div className="section-kicker">Featured campaigns</div><h2>Help create a moment of hope.</h2></div><p className="section-intro">Choose a project close to your heart and help us turn practical needs into lasting opportunities.</p></div>
        <div className="campaign-grid">
          {campaigns.map(c => <article className="campaign" key={c.title}><div className="campaign-photo"><Image src={imageBase + c.img + "?auto=format&fit=crop&w=900&q=85"} alt="" fill sizes="(max-width: 620px) 100vw, 33vw" /></div><div className="campaign-body"><div className="campaign-tag">{c.tag}</div><h3>{c.title}</h3><p>{c.text}</p><div className="progress"><i style={{width: `${c.pct}%`}} /></div><div className="campaign-meta"><span>{c.pct}% funded</span><span>Help now →</span></div></div></article>)}
        </div>
      </div>
    </section>
  );
}

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

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-main">
        <div className="footer-brand"><a href="#top" className="logo"><span className="logo-mark"><HeartHandshake size={17}/></span><span>Young Hearts<small>Foundation</small></span></a><p>Creating safe beginnings and brighter pathways for children experiencing homelessness.</p><div className="socials"><a className="social" href="#">f</a><a className="social" href="#">◎</a><a className="social" href="#">in</a></div></div>
        <div><h4>Explore</h4><a href="#about">About us</a><a href="#programs">Our programs</a><a href="#impact">Our impact</a><a href="#campaigns">Campaigns</a></div>
        <div><h4>Get involved</h4><a href="#donate">Donate</a><a href="#contact">Volunteer</a><a href="#contact">Partner with us</a><a href="#contact">Fundraise</a></div>
        <div><h4>Contact</h4><a href="mailto:hello@younghearts.org">hello@younghearts.org</a><a href="tel:+254700123456">+254 700 123 456</a><a href="#contact">Nairobi, Kenya</a><a href="#contact">Safeguarding & child protection</a></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 Young Hearts Foundation. All rights reserved.</span><span>Built with care for every young heart.</span></div>
    </footer>
  );
}
