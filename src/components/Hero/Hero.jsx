import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/all";
import { animtateWithGsap } from "./animationsHero.js";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const tl = gsap.timeline();

  useGSAP(() => {
    animtateWithGsap(tl);
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
          <div className="relative pointer-events-none entrance-message">
            <img
              className="absolute w-[246px] h-full object-contain object-[0_12.5%] left-1/2 -translate-x-1/2"
              src="assets/images/logo.png"
              alt=""
            />
            <div className="text-wrapper mt-90">
              <h1 className="gradient-title">
                ВЫХОДИТ <br /> 19 НОЯБРЯ <br /> 2026 ГОДА
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        id="background"
        className="size-full relative top-[-22%] h-screen scale-145"
      >
        <div id="white-bg" className="absolute bg-transparent w-full h-full" />
        <img
          className="h-full object-cover object-center"
          src="assets/images/bg-full.jpg"
          alt="background"
        />
        <img
          id="hero-logo"
          src="assets/images/hero-logo.png"
          alt="hero-logo"
          className="absolute h-full top-0 object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
