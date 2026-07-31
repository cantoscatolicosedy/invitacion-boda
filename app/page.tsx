import Hero from "@/components/Hero";
import Parents from "@/components/Parents";
import Story from "@/components/Story";
import EventDetails from "@/components/EventDetails";
import DressCode from "@/components/DressCode";

import RSVP from "@/components/RSVP";


export default function Home() {
  return (
    <main className="bg-[#35152A] text-white">

      {/* ======================================== */}
      {/* PORTADA CINEMATOGRÁFICA */}
      {/* ======================================== */}

      <Hero />

      {/* ======================================== */}
      {/* NUESTROS PADRES */}
      {/* ======================================== */}

      <Parents />

      {/* ======================================== */}
{/* NUESTRA HISTORIA */}
{/* ======================================== */}

<Story />


<EventDetails />

<DressCode />


      <section
        id="historia"
        className="
          relative
          flex
          min-h-screen
          items-center
          justify-center
          overflow-hidden
          bg-[#35152A]
          px-6
          py-24
        "
      >

        {/* Decoración */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-contain
            bg-center
            bg-no-repeat
            opacity-10
          "
          style={{
            backgroundImage:
              "url('/images/flores-mexicanas.png')",
          }}
        />

        {/* Contenido */}

        <div
          className="
            relative
            z-10
            max-w-3xl
            text-center
          "
        >

          <p
            className="
              mb-6
              text-xs
              uppercase
              tracking-[0.5em]
              text-[#F4B400]
            "
          >
            Nuestra historia
          </p>

          <h2
            className="
              font-serif
              text-4xl
              md:text-6xl
            "
          >
            Una historia que apenas comienza
          </h2>

          <div
            className="
              mx-auto
              my-8
              h-px
              w-24
              bg-[#F4B400]
            "
          />

          <p
            className="
              text-lg
              leading-relaxed
              text-white/75
              md:text-xl
            "
          >
            Muy pronto compartiremos con ustedes
            la historia de nuestro amor, los momentos
            que nos han llevado hasta aquí y el comienzo
            de esta nueva etapa que queremos celebrar
            junto a las personas que más queremos.
          </p>

        </div>

      </section>

    </main>
  );
}