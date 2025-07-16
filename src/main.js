import { arrowBounce } from './js/arrow-bounce.js';
import { generalAnimations } from './js/general-animations.js';
import { rocketLaunchAnimation } from './js/rocket-launch.js';
import { typeWriterAnimation } from './js/typewriter.js';
import globalAnimations from "./js/global-animations.js";

document.addEventListener('DOMContentLoaded', () => {
  // document.body.classList.add('no-scroll'); // Disable scroll
  // document.body.classList.add('overflow-hidden');
  // setTimeout(() => {
  //   document.body.classList.remove('overflow-hidden');
  //   document.body.classList.remove('no-scroll');
  // }, 16000);

  // Global animations
  document.querySelectorAll('.js-gsap').forEach((rootEl) => globalAnimations(rootEl));

  rocketLaunchAnimation();
  typeWriterAnimation();
  generalAnimations()
  arrowBounce()

});
