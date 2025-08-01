document.addEventListener("DOMContentLoaded", function() {
    // --- Custom Cursor ---
    const cursor = document.getElementById('custom-cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const hoverElements = document.querySelectorAll('a, button, .btn');
    hoverElements.forEach(el => {
        el.addEventListener('mouseover', () => cursor.classList.add('hover'));
        el.addEventListener('mouseout', () => cursor.classList.remove('hover'));
    });

    // --- GSAP Animations ---
    gsap.registerPlugin(ScrollTrigger);

    // Hero Text Letter Animation
    const heroTitles = document.querySelectorAll('.hero-title');
    heroTitles.forEach(title => {
        const chars = title.textContent.split('');
        title.innerHTML = '';
        chars.forEach(char => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.display = 'inline-block';
            title.appendChild(span);
        });
    });

    gsap.from(".hero-title span", {
        y: 100,
        opacity: 0,
        stagger: 0.05,
        duration: 1,
        ease: "power4.out"
    });

    // Hero Mouse-move Parallax
    const heroContent = document.querySelector('.hero-content');
    const heroGradient = document.querySelector('.hero-gradient');
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth) - 0.5;
        const y = (clientY / window.innerHeight) - 0.5;

        gsap.to(heroContent, {
            x: -x * 50,
            y: -y * 50,
            duration: 0.5,
            ease: "power2.out"
        });

        gsap.to(heroGradient, {
            x: x * 200,
            y: y * 200,
            duration: 1,
            ease: "power3.out"
        });
    });

    // --- Sticky Services Section ---
    const servicesTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".services-container",
            pin: true,
            start: "top top",
            end: "+=2000",
            scrub: 1,
        }
    });

    servicesTimeline.from(".service-item", {
        y: 200,
        opacity: 0,
        stagger: 0.5,
        ease: "power3.out"
    });

    // --- Services Page Animations ---
    const serviceGrid = document.querySelector('.service-grid-page');
    if (serviceGrid) {
        // Grid reveal animation
        gsap.from(".service-card", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });

        // Card hover animation
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            const imagePlaceholder = card.querySelector('.card-image-placeholder');
            const cardTitle = card.querySelector('h3');

            const hoverTimeline = gsap.timeline({ paused: true });
            hoverTimeline.to(imagePlaceholder, { scale: 1.1, duration: 0.5, ease: "power3.out" });
            hoverTimeline.to(cardTitle, { color: "var(--primary-color)", duration: 0.5, ease: "power3.out" }, 0);


            card.addEventListener('mouseenter', () => hoverTimeline.play());
            card.addEventListener('mouseleave', () => hoverTimeline.reverse());
        });
    }

    // --- Page Transitions ---
    window.addEventListener('load', () => {
        document.body.classList.add('is-loaded');
    });

    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            // Ignore external links and anchor links
            if (href.startsWith('#') || href.startsWith('http')) {
                return;
            }
            e.preventDefault();
            document.body.classList.add('is-transitioning');
            setTimeout(() => {
                window.location.href = href;
            }, 500); // Match the animation duration
        });
    });


    // --- About Page Timeline Animation ---
    const timeline = document.querySelector('.timeline');
    if(timeline) {
        const timelineItems = document.querySelectorAll('.timeline-item');
        gsap.from(timelineItems, {
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top 80%',
            },
            x: -100,
            opacity: 0,
            duration: 1,
            stagger: 0.5,
            ease: 'power3.out'
        });
    }
});
