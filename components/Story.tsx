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
        gap-10
        md:grid-cols-2
        md:gap-20
        ${isVisible ? "story-item-visible" : ""}
      `}
    >
      {/* ================================= */}
      {/* FOTO */}
      {/* ================================= */}

      <div
        className={`
          story-item-image
          overflow-hidden
          rounded-sm
          ${
            isEven
              ? "md:col-start-1"
              : "md:col-start-2 md:row-start-1"
          }
        `}
      >
        <img
          src={item.image}
          alt={item.title}
          className="
            h-[320px]
            w-full
            object-cover
            object-top
            transition-transform
            duration-1000
            hover:scale-105
            md:h-[450px]
          "
        />
      </div>

      {/* ================================= */}
      {/* CONTENIDO */}
      {/* ================================= */}

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
        <span className="mb-4 block text-sm tracking-[0.3em] text-[#F4B400]">
          {item.number}
        </span>

        <h3 className="font-serif text-4xl md:text-5xl">
          {item.title}
        </h3>

        <div
          className={`
            my-6
            h-px
            w-16
            bg-[#F4B400]
            ${
              isEven
                ? "md:mr-auto"
                : "md:ml-auto"
            }
          `}
        />

        <p className="text-base leading-relaxed text-white/65 md:text-lg">
          {item.text}
        </p>
      </div>

      {/* ================================= */}
      {/* PUNTO CENTRAL */}
      {/* ================================= */}

      <div
        className="
          story-dot
          absolute
          left-1/2
          top-1/2
          hidden
          h-4
          w-4
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-[#F4B400]
          bg-[#35152A]
          md:block
        "
      />
    </article>
  );
}

export default function Story() {
  return (
    <section
      id="historia"
      className="
        story-section
        relative
        overflow-hidden
        bg-[#35152A]
        px-6
        py-32
        text-white
      "
    >
      {/* ================================= */}
      {/* DECORACIÓN FLORAL */}
      {/* ================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-contain
          bg-center
          bg-no-repeat
          opacity-[0.06]
        "
        style={{
          backgroundImage:
            "url('/images/flores-mexicanas.png')",
        }}
      />

      {/* ================================= */}
      {/* ENCABEZADO */}
      {/* ================================= */}

      <div className="relative z-10 mx-auto max-w-4xl text-center">

        <p className="mb-6 text-xs uppercase tracking-[0.5em] text-[#F4B400]">
          Nuestra historia
        </p>

        <h2 className="font-serif text-5xl md:text-7xl">
          Una historia que apenas comienza
        </h2>

        <div className="mx-auto my-10 h-px w-24 bg-[#F4B400]" />

        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
          Hay historias que comienzan de manera inesperada,
          pero que poco a poco se convierten en el lugar
          al que siempre queremos regresar.
        </p>

      </div>

      {/* ================================= */}
      {/* LÍNEA DE TIEMPO */}
      {/* ================================= */}

      <div className="relative z-10 mx-auto mt-32 max-w-5xl">

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
            bg-white/20
            md:block
          "
        />

        {/* Historias */}

        <div className="space-y-24 md:space-y-48">

          {storyItems.map((item, index) => (
            <StoryItem
              key={item.number}
              item={item}
              index={index}
            />
          ))}

        </div>

      </div>

      {/* ================================= */}
      {/* CIERRE */}
      {/* ================================= */}

      <div className="relative z-10 mx-auto mt-32 max-w-3xl text-center md:mt-40">

        <div className="mb-8 text-3xl text-[#F4B400]">
          ✦
        </div>

        <p className="font-serif text-3xl italic leading-relaxed md:text-4xl">
          Y queremos comenzar este nuevo capítulo
          rodeados de las personas que más queremos.
        </p>

      </div>

    </section>
  );
}