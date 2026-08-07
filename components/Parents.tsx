"use client";

import { useEffect, useRef, useState } from "react";

export default function Parents() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);


  return (
    <section
  ref={sectionRef}
  id="padres"
  className={`
    relative
    flex
    min-h-screen
    items-center
    justify-center
    overflow-hidden
    bg-[#F5EAD7]
    px-6
    py-24
    text-[#35152A]
    ${isVisible ? "parents-visible" : ""}
  `}
>
      {/* Decoración floral */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-contain
          bg-center
          bg-no-repeat
          opacity-[0.18]
        "
        style={{
          backgroundImage:
            "url('/images/flores-mexicanas.png')",
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-5xl">

        {/* Encabezado */}
        <div className="mb-16 text-center">

         <p
  className="
    parents-intro
    mb-6
    text-xs
    uppercase
    tracking-[0.5em]
    text-[#A66A2C]
  "
>
  Con la bendición y el amor de
</p>

          <h2
  className="
    parents-title
    font-serif
    text-4xl
    md:text-6xl
  "
>
  Nuestros padres
</h2>

          <div
            className="
              mx-auto
              mt-8
              h-px
              w-24
              bg-[#D89B2B]
            "
          />

        </div>

        {/* Padres */}
        <div
          className="
            grid
            gap-12
            md:grid-cols-2
          "
        >

          {/* Familia de la novia */}
         <div
  className="
    parents-bride
    text-center
    md:border-r
    md:border-[#35152A]/15
    md:pr-12
  "
>

            <p
              className="
                mb-8
                text-[10px]
                uppercase
                tracking-[0.4em]
                text-[#A66A2C]
              "
            >
              Padres de la novia
            </p>

            <div className="space-y-4">

              <p
                className="
                  font-serif
                  text-2xl
                  md:text-3xl
                "
              >
                Laura Pérez Muñoz
              </p>

              <p
                className="
                  font-serif
                  text-2xl
                  md:text-3xl
                "
              >
                Luis Roberto Ruiz Núñez
              </p>

            </div>

          </div>

          {/* Familia del novio */}
          <div
  className="
    parents-groom
    text-center
    md:pl-12
  "
>

            <p
              className="
                mb-8
                text-[10px]
                uppercase
                tracking-[0.4em]
                text-[#A66A2C]
              "
            >
              Madre del novio
            </p>

            <div className="space-y-4">

              <p
                className="
                  font-serif
                  text-2xl
                  md:text-3xl
                "
              >
                Socorro López Gutiérrez
              </p>

              

            </div>

          </div>

        </div>

        {/* Frase */}
        
        <div
  className="
    parents-quote
    mt-20
    text-center
  "
>

          <p
            className="
              mx-auto
              max-w-2xl
              font-serif
              text-xl
              italic
              leading-relaxed
              text-[#35152A]/80
              md:text-2xl
            "
          >
            "Con su amor, ejemplo y bendición,
            nos han acompañado hasta este momento
            tan especial de nuestras vidas."
          </p>

        </div>

      </div>

    </section>
  );
}