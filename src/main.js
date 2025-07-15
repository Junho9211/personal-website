import { rocketLaunchAnimation } from './js/rocket-launch.js';
import { typeWriterAnimation } from './js/typewriter.js';

document.addEventListener('DOMContentLoaded', () => {

  // document.body.classList.add('no-scroll'); // Disable scroll
  // document.body.classList.add('overflow-hidden');
  // setTimeout(() => {
  //   document.body.classList.remove('overflow-hidden');
  //   document.body.classList.remove('no-scroll');
  // }, 16000);

  rocketLaunchAnimation();
  typeWriterAnimation();


});
