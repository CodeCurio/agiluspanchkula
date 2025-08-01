import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.css';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP ScrollTrigger setup
    gsap.registerPlugin(ScrollTrigger);

    // Sync GSAP with Lenis
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time)=>{
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // GSAP Animations
    gsap.from(".service-item", {
        scrollTrigger: {
            trigger: ".services-container",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        x: -100, // Animate from the left
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out"
    });

    gsap.from(".about-content", {
        scrollTrigger: {
            trigger: ".about-container",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

  }, []);

  return (
    <div className="App">
      <CustomCursor />
      <Hero />
      <Services />
      <About />
      {/* Other components will go here */}
    </div>
  );
}

export default App;
