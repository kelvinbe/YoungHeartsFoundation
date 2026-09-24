import { ArrowRight } from "lucide-react";
import Image from "next/image";


const imageBase = "https://images.unsplash.com/";





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