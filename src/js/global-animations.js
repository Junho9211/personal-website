import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function (rootEl) {
    if (rootEl.dataset.animation === "reveal-up") {
        gsap.fromTo(rootEl,
        {
            y: 50,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: rootEl,
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        }
    );
    }

}