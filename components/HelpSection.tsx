import { BookOpen, HeartHandshake, Home, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

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











