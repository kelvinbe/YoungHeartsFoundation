import Image from "next/image";

const imageBase = "https://images.unsplash.com/";
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