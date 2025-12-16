import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export const animtateWithGsap = (tl) => {
  ScrollTrigger.create({
    trigger: ".jason",
    start: "top top+=25%",
    end: "+=200%",
    pin: "#info",
    scrub: 1,
  });

  tl.to("#info", {
    scrollTrigger: {
      markers: true,
      trigger: ".jason",
      start: "top top+=20%",
      end: "+=20%",
      scrub: 1,
    },
    ease: "power2.inOut",
    opacity: 1,
  });
};
