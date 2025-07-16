import { gsap } from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export function generalAnimations() {
    // Animate <h2> in and out
    gsap.fromTo(".intro-section h2", {
        y: 50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".intro-section h2",
            start: "top 90%",
            toggleActions: "play none none reverse"
        }
    });

    // Animate <p> elements in and out, staggered
    gsap.fromTo(".intro-section p", {
        y: 30,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".intro-section p",
            start: "top 95%",
            toggleActions: "play none none reverse"
        }
    });
    // Parallax-style subtle shift
    gsap.to(".intro-section", {
        scrollTrigger: {
            trigger: ".intro-section",
            start: "top center",
            scrub: true
        },
        y: -50
    });

    gsap.utils.toArray('.icon-float').forEach((icon, i) => {
        // Fade in + rise on scroll
        gsap.fromTo(icon, {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power2.out',
            delay: 1,
            scrollTrigger: {
                trigger: ".intro-section h2", // same trigger as h2
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        });

        // Floating motion (independent, always runs after delay)
        gsap.to(icon, {
            y: '+=12',
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            duration: 2 + Math.random(),
            delay: 2 + i * 0.2
        });
    });

    gsap.from(".timeline-item", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".timeline-item",
            start: "top 80%",
            toggleActions: "play none none none"
        },
    });

}