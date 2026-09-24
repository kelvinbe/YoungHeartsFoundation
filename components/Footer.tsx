import { HeartHandshake } from "lucide-react";






export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-main">
        <div className="footer-brand"><a href="#top" className="logo"><span className="logo-mark">
            <HeartHandshake size={17}/></span><span>Young Hearts<small>Foundation</small></span></a><p>Creating safe beginnings and brighter pathways for children experiencing homelessness.</p><div className="socials"><a className="social" href="#">f</a><a className="social" href="#">◎</a><a className="social" href="#">in</a></div></div>
        <div><h4>Explore</h4><a href="#about">About us</a><a href="#programs">Our programs</a><a href="#impact">Our impact</a><a href="#campaigns">Campaigns</a></div>
        <div><h4>Get involved</h4><a href="#donate">Donate</a><a href="#contact">Volunteer</a><a href="#contact">Partner with us</a><a href="#contact">Fundraise</a></div>
        <div><h4>Contact</h4><a href="mailto:hello@younghearts.org">hello@younghearts.org</a><a href="tel:+254700123456">+254 700 123 456</a><a href="#contact">Nairobi, Kenya</a><a href="#contact">Safeguarding & child protection</a></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 Young Hearts Foundation. All rights reserved.</span><span>Built with care for every young heart.</span></div>
    </footer>
  );
}