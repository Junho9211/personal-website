import { gsap } from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export function arrowBounce() { 
    const arrow = document.getElementById('longDownArrow');

  // Initial animation (optional)
  gsap.set(arrow, {
    scaleY: 0,
    transformOrigin: 'top center'
  });

  gsap.to(arrow, {
    scaleY: 1,
    duration: 1.2,
    ease: 'bounce.out',
    delay: 16
  });

  // Hover animation
  arrow.addEventListener('mouseenter', () => {
    gsap.to(arrow, {
      scaleY: 1.6,
      duration: 0.6,
      ease: 'power2.out',
      transformOrigin: 'top center'
    });
  });

  arrow.addEventListener('mouseleave', () => {
    gsap.to(arrow, {
      scaleY: 1,
      duration: 0.6,
      ease: 'power2.in',
      transformOrigin: 'top center'
    });
  });

    arrow.addEventListener("click", () => {
        gsap.to(window, {
            scrollTo: { y: window.innerHeight - 60, autoKill: false },
            duration: 1,
            ease: "power2.inOut"
        });
    });

}