document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animation
    const heroTimeline = gsap.timeline();
    heroTimeline.to(".hero-title", {
        y: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2
    })
    .from(".hero-subtitle", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.6");


    // Services Section Scroll Animation
    gsap.from(".service-item", {
        scrollTrigger: {
            trigger: ".services",
            start: "top 80%", // top of the trigger hits 80% of the viewport height
            toggleActions: "play none none none"
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out"
    });

    // Marquee animation improvement (optional, but good for performance)
    // The CSS animation is fine, but a JS one can be more flexible.
    // For now, sticking with the performant CSS animation.
});
