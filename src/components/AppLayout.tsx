'use client';

import { useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';
import gsap from 'gsap';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // --- Custom Cursor Logic ---
    const cursorDot = document.querySelector('.cursor-dot') as HTMLElement;
    const cursorOutline = document.querySelector('.cursor-outline') as HTMLElement;

    if (!cursorDot || !cursorOutline) return;

    gsap.set(cursorDot, { xPercent: -50, yPercent: -50 });
    gsap.set(cursorOutline, { xPercent: -50, yPercent: -50 });

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.1;

    const xSet = gsap.quickSetter(cursorOutline, 'x', 'px');
    const ySet = gsap.quickSetter(cursorOutline, 'y', 'px');

    const mouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      gsap.to(cursorDot, { duration: 0.01, x: e.clientX, y: e.clientY });
    };

    const ticker = () => {
      const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    };

    window.addEventListener('mousemove', mouseMove);
    gsap.ticker.add(ticker);

    document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
      el.addEventListener('mouseenter', () => cursorOutline.classList.add('pointer'));
      el.addEventListener('mouseleave', () => cursorOutline.classList.remove('pointer'));
    });

    // --- Mobile Navigation Logic ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    if (!hamburgerBtn || !sidebar || !overlay) return;

    const closeMenu = () => {
      sidebar.classList.remove('open');
      hamburgerBtn.classList.remove('open');
      overlay.classList.add('hidden');
    };

    const handleHamburgerClick = (e: MouseEvent) => {
      e.stopPropagation();
      const isOpen = sidebar.classList.toggle('open');
      hamburgerBtn.classList.toggle('open', isOpen);
      overlay.classList.toggle('hidden', !isOpen);
    };

    hamburgerBtn.addEventListener('click', handleHamburgerClick);
    overlay.addEventListener('click', closeMenu);
    mainRef.current?.addEventListener('click', () => {
      if (sidebar.classList.contains('open')) {
        closeMenu();
      }
    });

    // --- GSAP Animations ---
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const tl = gsap.timeline();
      tl.fromTo('aside', { x: '-100%' }, { x: '0%', duration: 1, ease: 'power2.out' })
        .fromTo('header', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.5')
        .fromTo('.temple-panel', { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.5');
      return () => { tl.kill(); };
    });

    mm.add('(max-width: 1023px)', () => {
      const tl = gsap.timeline();
      tl.fromTo('header', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '+=0.5')
        .fromTo('.temple-panel', { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.5');
      return () => { tl.kill(); };
    });

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      gsap.ticker.remove(ticker);
      hamburgerBtn.removeEventListener('click', handleHamburgerClick);
      overlay.removeEventListener('click', closeMenu);
      mm.revert();
    };
  }, []);

  return (
    <body className="relative crt-effect">
      <div className="cursor-dot"></div>
      <div className="cursor-outline"></div>
      <div className="scanline"></div>
      <div id="overlay" className="fixed inset-0 bg-black/60 z-80 hidden"></div>

      <div className="mobile-nav justify-between items-center p-4 bg-black border-b-4 border-[#16a34a]">
        <h2 className="font-press-start text-xl text-white">PIXANTARA</h2>
        <button id="hamburger-btn" className="hamburger">
          <span></span><span></span><span></span><span></span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        <Sidebar />
        <main ref={mainRef} className="col-span-12 lg:col-span-10 p-6 md:p-10 lg:pt-10 pt-20">
          {children}
        </main>
      </div>
      <Footer />
    </body>
  );
};

export default AppLayout;
