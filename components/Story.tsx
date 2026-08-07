"use client";

import { useEffect, useRef, useState } from "react";

const storyItems = [
  {
    number: "01",
    title: "El comienzo",
    text: "El día que nuestros caminos se cruzaron y comenzó una historia que cambiaría nuestras vidas para siempre.",
    image: "/images/foto1.jpg",
  },
  {
    number: "02",
    title: "Nuestro camino",
    text: "Con el paso del tiempo llegaron momentos, aventuras y recuerdos que nos hicieron descubrir que queríamos compartir la vida.",
    image: "/images/foto2.jpg",
  },
  {
    number: "03",
    title: "El gran momento",
    text: "Un día decidimos dar el siguiente paso y comenzar a escribir juntos el capítulo más importante de nuestra historia.",
    image: "/images/foto3.jpg",
  },
  {
    number: "04",
    title: "Y ahora...",
    text: "Queremos celebrar el comienzo de nuestra nueva historia rodeados de las personas que más queremos.",
    image: "/images/foto4.jpg",
  },
];

function StoryItem({
  item,
  index,
}: {
  item: (typeof storyItems)[number];
  index: number;
}) {
  const itemRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = itemRef.current;

    if (!element) return;

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

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <article
      ref={itemRef}
      className={`
        story-item
        relative
        grid
        items-center
        gap-12
        md:grid-cols-2
        md:gap-20
        ${isVisible ? "story-item-visible" : ""}
      `}
    >
      {/* ================================================= */}
      {/* FOTO */}
      {/* ================================================= */}

      <div
        className={`
          story-item-image
          group
          relative
          overflow-hidden
          border
          border-[#D89B2B]/45
          bg-[#35152A]
          p-1
          shadow-[0_20px_60px_rgba(0,0,0,0.25)]
          ${
            isEven
              ? "md:col-start-1"
              : "md:col-start-2 md:row-start-1"
          }
        `}
      >
        {/* Marco interior */}
        <div className="relative overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="
              h-[320px]
              w-full
              object-cover
              object-center
              transition-transform
              duration-[1400ms]
              ease-out
              group-hover:scale-105
              md:h-[450px]
            "
          />

          {/* Overlay elegante */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-[#35152A]/35
              via-transparent
              to-white/5
              opacity-70
            "
          />

          {/* Esquinas ornamentales */}
          <span
            className="
              pointer-events-none
              absolute
              left-3
              top-3
              h-8
              w-8
              border-l
              border-t
              border-[#F4B400]/70
            "
          />

          <span
            className="
              pointer-events-none
              absolute
              right-3
              top-3
              h-8
              w-8
              border-r
              border-t
              border-[#F4B400]/70
            "
          />

          <span
            className="
              pointer-events-none
              absolute
              bottom-3
              left-3
              h-8
              w-8
              border-b
              border-l
              border-[#F4B400]/70
            "
          />

          <span
            className="
              pointer-events-none
              absolute
              bottom-3
              right-3
              h-8
              w-8
              border-b
              border-r
              border-[#F4B400]/70
            "
          />
        </div>
      </div>

      {/* ================================================= */}
      {/* CONTENIDO */}
      {/* ================================================= */}

      <div
        className={`
          story-item-content
          ${
            isEven
              ? "md:col-start-2 md:row-start-1 md:pl-16"
              : "md:col-start-1 md:row-start-1 md:pr-16 md:text-right"
          }
        `}
      >
        {/* Número */}
        <div
          className={`
            mb-5
            flex
            items-center
            gap-4
            ${
              isEven
                ? "md:justify-start"
                : "md:justify-end"
            }
          `}
        >
          <span className="text-[11px] uppercase tracking-[0.45em] text-[#F4B400]/80">
            Capítulo
          </span>

          <span
            className="
              font-serif
              text-2xl
              leading-none
              text-[#F4B400]
            "
          >
            {item.number}
          </span>
        </div>

        {/* Título */}
        <h3
          className="
            font-serif
            text-4xl
            leading-tight
            text-[#FFF8ED]
            md:text-5xl
          "
        >
          {item.title}
        </h3>

        {/* Línea decorativa */}
        <div
          className={`
            my-6
            flex
            items-center
            gap-3
            ${
              isEven
                ? "md:justify-start"
                : "md:justify-end"
            }
          `}
        >
          <span className="h-px w-16 bg-[#F4B400]" />

          <span className="text-xs text-[#F4B400]">
            ✦
          </span>
        </div>

        {/* Texto */}
        <p
          className="
            text-base
            leading-[1.9]
            text-white/65
            md:text-lg
          "
        >
          {item.text}
        </p>
      </div>

      {/* ================================================= */}
      {/* PUNTO CENTRAL */}
      {/* ================================================= */}

      <div
        className="
          story-dot
          absolute
          left-1/2
          top-1/2
          hidden
          h-5
          w-5
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-[#F4B400]
          bg-[#35152A]
          shadow-[0_0_0_5px_rgba(53,21,42,0.9)]
          md:flex
        "
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#F4B400]" />
      </div>
    </article>
  );
}

export default function Story() {
  return (
    <section
      id="historia"
      className="
        relative
        overflow-hidden
        bg-[#35152A]
        px-6
        py-28
        text-[#FFF8ED]
        md:py-36
      "
    >
      {/* ================================================= */}
      {/* DECORACIÓN FLORAL */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-contain
          bg-[center_top]
          bg-no-repeat
          opacity-[0.09]
        "
        style={{
          backgroundImage:
            "url('/images/flores-mexicanas.png')",
        }}
      />

      {/* Velo para suavizar las flores */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[#35152A]/20
        "
      />

      {/* ================================================= */}
      {/* ENCABEZADO */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p
          className="
            mb-5
            text-[10px]
            uppercase
            tracking-[0.5em]
            text-[#F4B400]
            md:text-xs
          "
        >
          Nuestra historia
        </p>

        <h2
          className="
            font-serif
            text-5xl
            leading-tight
            text-[#FFF8ED]
            md:text-7xl
          "
        >
          Una historia que apenas comienza
        </h2>

        <div className="mx-auto my-8 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[#F4B400]/70" />
          <span className="text-sm text-[#F4B400]">
            ✦
          </span>
          <span className="h-px w-12 bg-[#F4B400]/70" />
        </div>

        <p
          className="
            mx-auto
            max-w-2xl
            text-base
            leading-relaxed
            text-white/65
            md:text-xl
          "
        >
          Hay historias que comienzan de manera inesperada,
          pero que poco a poco se convierten en el lugar
          al que siempre queremos regresar.
        </p>
      </div>

      {/* ================================================= */}
      {/* LÍNEA DE TIEMPO */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto mt-28 max-w-5xl md:mt-36">
        {/* Línea central */}
        <div
          className="
            absolute
            left-1/2
            top-0
            hidden
            h-full
            w-px
            -translate-x-1/2
            bg-gradient-to-b
            from-transparent
            via-[#D89B2B]/50
            to-transparent
            md:block
          "
        />

        {/* Historias */}
        <div className="space-y-24 md:space-y-44">
          {storyItems.map((item, index) => (
            <StoryItem
              key={item.number}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* ================================================= */}
      {/* CIERRE */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          mt-28
          max-w-3xl
          text-center
          md:mt-40
        "
      >
        <div className="mb-8 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-[#F4B400]/60" />

          <span className="text-2xl text-[#F4B400]">
            ✦
          </span>

          <span className="h-px w-12 bg-[#F4B400]/60" />
        </div>

        <p
          className="
            font-serif
            text-3xl
            italic
            leading-relaxed
            text-[#FFF8ED]
            md:text-4xl
          "
        >
          Y queremos comenzar este nuevo capítulo
          rodeados de las personas que más queremos.
        </p>
      </div>
    </section>
  );
}