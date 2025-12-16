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

  tl.fromTo(
    "#info",
    {
      scale: 1.3,
      opacity: 0,
    },
    {
      scrollTrigger: {
        markers: true,
        trigger: ".jason",
        start: "top top+=14%",
        end: "+=90%",
        scrub: 1,
      },
      ease: "power2.inOut",
      // css: {
      //   "--tw-gradient-from": "var(--color-purple-400)",
      //   "--tw-gradient-to": "var(--color-fuchsia-600)",
      // },
      scale: 1,
      opacity: 1,
    },
    "<"
  );
};
