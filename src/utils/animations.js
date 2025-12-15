import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const animtateWithGsap = (tl) => {
  tl.to("#background", {
    scrollTrigger: {
      pin: true,
      trigger: "#background",
      start: "top",
      end: "bottom",
      scrub: 1,
    },
    ease: "power4.out",
    scale: 1,
  })
    .to("#hero-logo", {
      scrollTrigger: {
        trigger: "#background",
        start: "top top",
        end: "bottom 110%",
        scrub: 1,
      },
      ease: "power4.in",
      opacity: 0,
    })
    .to(
      "#mask",
      {
        scrollTrigger: {
          trigger: "#background",
          start: "top 0",
          end: "bottom 40%",
          scrub: 1,
        },
        ease: "power2.out",
        css: {
          maskSize: "100% 100%, 30vmin",
          WebkitMaskSize: "100% 100%, 30vmin",
        },
      },
      ">"
    )
    .to(
      "#mask",
      {
        scrollTrigger: {
          trigger: "#background",
          start: "top top",
          end: "bottom 42%",
          scrub: 1,
        },
        ease: "power2.out",
        css: {
          maskPosition: "center 15%",
          WebkitMaskPosition: "center 15%",
        },
      },
      ">"
    )
    .to(
      "#white-bg",
      {
        scrollTrigger: {
          trigger: "#white-bg",
          start: "top top-=45%",
          end: "bottom 55%",
          scrub: 1,
        },
        ease: "none",
        backgroundColor: "white",
      },
      "<"
    )
    .to(
      ".entrance-message",
      {
        scrollTrigger: {
          trigger: ".entrance-message",
          start: "top top-=38%",
          end: "+=110%",
          scrub: 1,
        },
        duration: 1,
        ease: "power1.inOut",
        maskImage:
          "radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)",
      },
      "<"
    )
    .to(
      ".gradient-title",
      {
        scrollTrigger: {
          trigger: ".entrance-message",
          start: "top top-=45%",
          end: "+=75%",
          scrub: 1,
        },
        duration: 1,
        ease: "power1.inOut",
        "--g1": "oklch(71.8% 0.202 349.761)",
        "--g2": "oklch(70.4% 0.191 22.216)",
        "--g3": "oklch(75% 0.183 55.934)",
      },
      "<"
    )
    .to(
      ".entrance-message",
      {
        scrollTrigger: {
          markers: true,
          trigger: ".entrance-message",
          toggleActions: "play none reverse none",
          start: "+=111%",
          end: "+=114%",
          scrub: 1,
        },
        immediateRender: false,
        duration: 1,
        ease: "power1.inOut",
        maskImage:
          "radial-gradient(circle at 50% -100vh, black 0%, transparent 0%)",
      },
      "<"
    );

  // Управление маской при скролле
  ScrollTrigger.create({
    trigger: "#background",
    start: "top -1",
    onToggle: (self) => {
      // self.isActive = true когда триггер активен (скролл вниз)
      // self.isActive = false когда триггер неактивен (скролл назад)
      if (self.isActive) {
        gsap.killTweensOf("#mask");
        gsap.set("#mask", {
          css: {
            maskImage: "none",
            WebkitMaskImage: "none",
          },
        });
      } else {
        // Восстанавливаем маску
        gsap.killTweensOf("#mask");
        gsap.set("#mask", {
          css: {
            maskImage:
              "linear-gradient(#fff, #fff), url('/assets/images/white-logo.svg')",
            WebkitMaskImage:
              "linear-gradient(#fff, #fff), url('/assets/images/white-logo.svg')",
          },
        });
      }
    },
  });
};
