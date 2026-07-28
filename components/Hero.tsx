"use client";

import Countdown from "./Countdown";

export default function Hero() {
  const scrollToStory = () => {
    document
      .getElementById("historia")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
      "
    >
      {/* ================================= */}
      {/* CAPA 1 — OSCURIDAD INICIAL */}
      {/* ================================= */}

      <div
        className="
          cinematic-black
          pointer-events-none
          absolute
          inset-0
          z-50
          bg-[#12070E]
        "
      />

      {/* ================================= */}
      {/* CAPA 2 — FOTOGRAFÍA */}
      {/* ================================= */}

      <div
        className="
          cinematic-camera
          absolute
          inset-0
          bg-cover
          bg-center
        "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2400&q=95')",
        }}
      />

      {/* ================================= */}
      {/* CAPA 3 — OSCURECIMIENTO */}
      {/* ================================= */}

      <div
        className="
          cinematic-overlay
          absolute
          inset-0
          bg-black
        "
      />

      {/* ================================= */}
      {/* CAPA 4 — LUZ CINEMATOGRÁFICA */}
      {/* ================================= */}

      <div
        className="
          cinematic-light
          pointer-events-none
          absolute
          inset-y-0
          -left-1/2
          z-20
          w-1/2
          bg-gradient-to-r
          from-transparent
          via-[#F4B400]/20
          to-transparent
          blur-3xl
        "
      />

      {/* ================================= */}
      {/* CAPA 5 — MARCO FLORAL */}
      {/* ================================= */}

      <div
        className="
          floral-premium
          pointer-events-none
          absolute
          inset-0
          z-10
          bg-cover
          bg-center
          bg-no-repeat
          mix-blend-screen
        "
        style={{
          backgroundImage:
            "url('/images/flores-mexicanas.png')",
        }}
      />

      {/* ================================= */}
      {/* CAPA 6 — LUZ DE COLOR */}
      {/* ================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10
          bg-gradient-to-br
          from-[#7A173D]/20
          via-transparent
          to-[#F4A300]/10
        "
      />

      {/* ================================= */}
      {/* CONTENIDO */}
      {/* ================================= */}

      <div
        className="
          relative
          z-30
          flex
          min-h-screen
          flex-col
          items-center
          justify-center
          px-6
          py-20
          text-center
        "
      >
        {/* ================================= */}
        {/* TÍTULO */}
        {/* ================================= */}

        <div className="title-premium">

          <p
            className="
              mb-8
              text-[10px]
              uppercase
              tracking-[0.6em]
              text-white/80
              md:text-xs
            "
          >
            Nuestra boda
          </p>

        </div>

        {/* ================================= */}
        {/* NOMBRES */}
        {/* ================================= */}

        <div className="names-premium">

          {/* NOMBRE DE LA NOVIA */}

          <div
            className="
              bride-name-premium
              font-serif
              text-5xl
              leading-tight
              drop-shadow-2xl
              md:text-7xl
              lg:text-8xl
            "
          >
            Nombre de la novia
          </div>

          {/* & */}

          <div
            className="
              ampersand-premium
              my-5
              font-serif
              text-3xl
              italic
              text-[#F4B400]
              md:text-5xl
            "
          >
            &
          </div>

          {/* NOMBRE DEL NOVIO */}

          <div
            className="
              groom-name-premium
              font-serif
              text-5xl
              leading-tight
              drop-shadow-2xl
              md:text-7xl
              lg:text-8xl
            "
          >
            Nombre del novio
          </div>

        </div>

        {/* ================================= */}
        {/* LÍNEA DORADA */}
        {/* ================================= */}

        <div
          className="
            line-premium
            my-8
            h-px
            bg-[#F4B400]
          "
        />

        {/* ================================= */}
        {/* FECHA */}
        {/* ================================= */}

        <p
          className="
            date-premium
            text-xs
            uppercase
            text-white/90
            md:text-sm
          "
        >
          20 · 12 · 2026
        </p>

        {/* ================================= */}
        {/* CUENTA REGRESIVA */}
        {/* ================================= */}

        <Countdown />

        {/* ================================= */}
        {/* BOTÓN */}
        {/* ================================= */}

        <button
          onClick={scrollToStory}
          className="
            button-premium
            premium-button
            mt-12
            border
            border-white/50
            px-8
            py-4
            text-[10px]
            uppercase
            tracking-[0.35em]
            backdrop-blur-sm
          "
        >
          Descubrir nuestra historia
        </button>

        {/* ================================= */}
        {/* INDICADOR */}
        {/* ================================= */}

        <div
          className="
            scroll-premium
            mt-12
            text-sm
            text-white/60
          "
        >
          ↓
        </div>

      </div>

    </section>
  );
}