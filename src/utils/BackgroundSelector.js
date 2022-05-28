/* Assets */
import hero_bg1 from '../assets/images/hero-bg.jpg';
import hero_bg2 from '../assets/images/hero-bg2.jpg';
import hero_bg3 from '../assets/images/hero-bg3.jpg';
import hero_bg4 from '../assets/images/hero-bg4.jpg';
import hero_bg5 from '../assets/images/hero-bg5.jpg';

// Select random hero background everytime app runs
const backgrounds = [hero_bg1,  hero_bg2,  hero_bg3, hero_bg4, hero_bg5];
export const heroBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];