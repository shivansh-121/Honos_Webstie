'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { company, whyChooseUs } from '@/lib/company-data';

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const totalWidth = track.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          end: () => `+=${totalWidth}`,
          anticipatePin: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-void"
      aria-labelledby="about-heading"
    >
      <div ref={trackRef} className="flex h-screen w-max items-stretch">
        <article className="about-panel flex h-full w-screen shrink-0 flex-col lg:flex-row items-center justify-center gap-12 px-8 lg:px-20">
          <div className="flex-1 max-w-3xl">
            <SectionLabel className="mb-6">01 / Company Profile</SectionLabel>
            <h2
              id="about-heading"
              className="mb-8 font-display text-[clamp(2rem,5vw,3.5rem)] uppercase leading-tight tracking-wider text-honos-white"
            >
              Leading Security & Manpower in India
            </h2>
            <p className="font-body text-xl leading-relaxed text-honos-muted">
              {company.description}
            </p>
            <p className="mt-6 font-body text-xl leading-relaxed text-honos-muted">
              {company.presence}
            </p>
            <p className="mt-6 font-body text-xl leading-relaxed text-honos-muted">
              {company.sectors}
            </p>
          </div>
          
          <div className="flex-1 relative h-[40vh] lg:h-[60vh] w-full max-w-lg rounded-2xl overflow-hidden border-2 border-gold/30 shadow-[0_0_60px_rgba(201,168,76,0.25)] bg-gradient-to-tr from-obsidian via-brand-red/20 to-gold/20 p-4 mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-void/40 backdrop-blur-3xl" />
            
            <img 
              src={`/images/bouncers_team.png?t=${Date.now()}`} 
              alt="Honos Protection Services Security Team" 
              className="relative z-10 h-full w-full object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition-transform duration-700 hover:scale-105 peer"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                document.getElementById('uploader-fallback')!.style.display = 'flex';
              }}
            />
            
            <div id="uploader-fallback" className="hidden relative z-10 h-full w-full flex-col items-center justify-center rounded-xl border border-dashed border-gold/50 bg-black/50 p-8 text-center drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
               <span className="mb-4 text-4xl">📸</span>
               <p className="font-display text-2xl uppercase text-gold">Upload Your Photo</p>
               <p className="mt-2 font-body text-sm text-honos-muted mb-6">
                 Click below to upload the JD Restaurant photo right from your browser!
               </p>
               <label className="cursor-pointer bg-gold text-obsidian px-6 py-3 font-display uppercase tracking-widest hover:bg-white transition-colors">
                 Select Image
                 <input 
                   type="file" 
                   accept="image/*" 
                   className="hidden" 
                   onChange={async (e) => {
                     const file = e.target.files?.[0];
                     if (!file) return;
                     const formData = new FormData();
                     formData.append('file', file);
                     await fetch('/api/upload', { method: 'POST', body: formData });
                     window.location.reload();
                   }}
                 />
               </label>
            </div>
          </div>
        </article>

        <article className="about-panel flex h-full w-screen shrink-0 flex-col items-center justify-center text-center px-8 lg:px-20">
          <SectionLabel className="mb-6 justify-center">02 / Why Choose Us</SectionLabel>
          <h2 className="mb-10 font-display text-4xl uppercase tracking-wider text-honos-white md:text-5xl">
            Why Choose Honos
          </h2>
          <ul className="grid max-w-2xl w-full gap-6 sm:grid-cols-2 text-left">
            {whyChooseUs.map((item) => (
              <li
                key={item}
                className="flex gap-3 font-body text-lg text-honos-white"
              >
                <span className="mt-1 shrink-0 text-gold" aria-hidden>
                  ✔
                </span>
                {item}
              </li>
            ))}
          </ul>
        </article>


      </div>
    </section>
  );
}
