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
          bg-contain
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

       {/* ================================= */}


        {/* ================================= */}
        {/* NOMBRES */}
        {/* ================================= */}

        <div className="names-premium">

          {/* NOMBRE DE LA NOVIA */}

          <div
            className="
              bride-name-premium
              font-alex
              text-5xl
              leading-none
              drop-shadow-2xl
              md:text-7xl
              lg:text-8xl
            "
          >
            Clara Iveth
          </div>

          {/* & */}

          <div
            className="
              ampersand-premium
              my-4
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
              font-alex
              text-5xl
              leading-none
              drop-shadow-2xl
              md:text-7xl
              lg:text-8xl
            "
          >
            Salvador
          </div>

        </div>

        {/* ================================= */}
{/* MONOGRAMA C & S */}
{/* ================================= */}

<div className="monogram-premium">

  <div className="monogram-frame">

    <span className="monogram-letter">
      C
    </span>

    <span className="monogram-ampersand">
      &
    </span>

    <span className="monogram-letter">
      S
    </span>

  </div>

  <div className="monogram-ornament">
    ✦
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
          16 · 07 · 2027
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
    group
    relative
    mt-12
    overflow-hidden
    border
    border-[#F4B400]/70
    bg-[#35152A]/30
    px-10
    py-4
    text-[10px]
    uppercase
    tracking-[0.35em]
    text-[#FFF8ED]
    backdrop-blur-md
    transition-all
    duration-500
    hover:border-[#F4B400]
    hover:bg-[#F4B400]/10
  "
>
  <span className="relative z-10">
    Descubrir nuestra historia
  </span>

  {/* Brillo dorado */}

  <span
    className="
      absolute
      inset-y-0
      -left-full
      w-1/2
      bg-gradient-to-r
      from-transparent
      via-[#F4B400]/20
      to-transparent
      transition-all
      duration-700
      group-hover:left-full
    "
  />

  {/* Detalles ornamentales */}

  <span className="absolute left-2 top-2 h-1.5 w-1.5 border-l border-t border-[#F4B400]/70" />

  <span className="absolute right-2 top-2 h-1.5 w-1.5 border-r border-t border-[#F4B400]/70" />

  <span className="absolute bottom-2 left-2 h-1.5 w-1.5 border-b border-l border-[#F4B400]/70" />

  <span className="absolute bottom-2 right-2 h-1.5 w-1.5 border-b border-r border-[#F4B400]/70" />
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