"use client";

import { Heart, Menu, Search } from "lucide-react";

export default function Header() {
  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>♥ &nbsp; Every child deserves a safe place to grow.</span>
          <span>Need help? &nbsp; +254 700 123 456 &nbsp; · &nbsp; hello@younghearts.org</span>
        </div>
      </div>
      <header className="nav-wrap">
        <nav className="container nav">
          <a href="#top" className="logo" aria-label="Young Hearts Foundation home">
            <span className="logo-mark"><Heart size={16} fill="currentColor" /></span>
            <span>Young Hearts<small>Foundation</small></span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#impact">Our Impact</a>
            <a href="#campaigns">Get Involved</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-actions">
            <button className="icon-btn" aria-label="Search"><Search size={17} /></button>
            <a href="#donate" className="btn btn-green">DONATE NOW</a>
            <button className="icon-btn mobile-menu" aria-label="Open menu"><Menu size={20} /></button>
          </div>
        </nav>
      </header>
    </>
  );
}
