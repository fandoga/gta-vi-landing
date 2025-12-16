import { useGSAP } from "@gsap/react";
import React from "react";
import { animtateWithGsap } from "./animationsJason";
import gsap from "gsap";

const Jason = () => {
  const tl = gsap.timeline();

  useGSAP(() => {
    animtateWithGsap(tl);
  }, []);

  return (
    <section className="jason">
      <div id="info" className="text-left max-w-300 opacity-0">
        <h2 className="md:text-7xl text-6xl mb-7 font-bold bg-gradient-to-l from-red-300 to-rose-500 bg-clip-text text-transparent">
          Вайс-Сити, США.
        </h2>
        <p className="md:text-4xl font-semibold text-3xl md:pe-36 pe-14 bg-radial from-red-300 to-rose-500 bg-clip-text text-transparent">
          Джейсон и Лусия всегда знали, что играют по чужим правилам. Но когда
          попытка заработать легкие деньги пошла не по плану, они оказались на
          темной стороне самого солнечного места в Америке, посреди
          криминального заговора, простирающегося на весь штат Леонида, – и
          выбраться из этой передряги можно только общими усилиями.
        </p>
      </div>
    </section>
  );
};

export default Jason;
