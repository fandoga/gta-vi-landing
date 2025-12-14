import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const tl = gsap.timeline();

  useGSAP(() => {
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
      .to("#bg-logo", {
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
      .to("#white-bg", {
        scrollTrigger: {
          trigger: "#white-bg",
          start: "top top-=45%",
          end: "bottom 55%",
          scrub: 1,
        },
        ease: "none",
        backgroundColor: "white",
      })
      .to(
        "#mask",
        {
          scrollTrigger: {
            trigger: "#background",
            start: "top 20%",
            end: "+=200%",
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
        ".entrance-message",
        {
          scrollTrigger: {
            trigger: ".entrance-message",
            start: "top top-=28%",
            end: "+=140%",
            scrub: 1,
          },
          duration: 1,
          ease: "power1.inOut",
          maskImage:
            "radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)",
        },
        "<"
      );

    // ScrollTrigger.create({
    //   trigger: "#background",
    //   start: "top 50%",
    //   onEnter: () => {
    //     gsap.set("#mask", {
    //       maskPosition: "1000% 1000%",
    //       WebkitMaskPosition: "1000% 1000%",
    //     });
    //   },
    //   onEnterBack: () => {
    //     gsap.set("#mask", {
    //       maskPosition: "1000% 1000%",
    //       WebkitMaskPosition: "1000% 1000%",
    //     });
    //   },
    // });
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute w-full h-full top-0 left-0 z-5">
        <div
          id="mask"
          className="fixed black-gradient-bg w-full h-full flex items-center flex-col"
          style={{
            WebkitMaskImage:
              "linear-gradient(#fff, #fff), url('/assets/images/white-logo.svg')",
            WebkitMaskRepeat: "no-repeat, no-repeat",
            WebkitMaskPosition: "center, center",
            WebkitMaskSize: "100% 100%, 15500vmin",
            WebkitMaskComposite: "xor",
            maskImage:
              "linear-gradient(#fff, #fff), url('/assets/images/white-logo.svg')",
            maskRepeat: "no-repeat, no-repeat",
            maskPosition: "center 50%",
            maskSize: "100% 100%, 15500vmin",
            maskComposite: "exclude",
          }}
        >
          <div className="pointer-events-none flex flex-col justify-center items-center entrance-message">
            <div className="entrance-logo">
              <img src="assets/images/logo.png" alt="" />
            </div>
            <div className="text-wrapper">
              <h1 className="gradient-title">
                ВЫХОДИТ <br /> 19 НОЯБРЯ <br /> 2026 ГОДА
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div id="background" className="relative top-[-22%] h-screen scale-145">
        <div className="relative flex h-full justify-center items-center h-full">
          <div
            id="white-bg"
            className="absolute bg-transparent w-full h-full"
          />
          <img
            className="h-full object-cover object-center"
            src="assets/images/bg-full.jpg"
            alt="background"
          />
          <div id="bg-logo" className="absolute fake-logo-wrapper">
            <img
              className="overlay-logo"
              src="assets/images/hero-logo.png"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
