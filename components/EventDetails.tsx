"use client";

import { useEffect, useRef, useState } from "react";

const events = [
  {
    type: "Ceremonia",
    icon: "✦",
    time: "12:00 PM",
    title: "Ceremonia religiosa",
    venue: "Templo de ejemplo",
    location: "Ciudad de México",
    description:
      "Acompáñanos a celebrar el inicio de este nuevo capítulo de nuestras vidas.",
    mapUrl: "https://maps.google.com",
  },
  {
    type: "Recepción",
    icon: "✦",
    time: "3:00 PM",
    title: "Recepción",
    venue: "Salón de ejemplo",
    location: "Ciudad de México",
    description:
      "Después de la ceremonia, celebraremos juntos este día tan especial.",
    mapUrl: "https://maps.google.com",
  },
];

function EventCard({
  event,
  index,
}: {
  event: (typeof events)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = cardRef.current;

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

  return (
    <div
      ref={cardRef}
      className={`
        event-card
        ${isVisible ? "event-card-visible" : ""}
        ${index === 1 ? "md:mt-24" : ""}
      `}
    >
      <div className="event-card-inner">

        {/* Número / decoración */}

        <div className="event-card-number">
          0{index + 1}
        </div>

        {/* Tipo de evento */}

        <p className="event-card-type">
          {event.icon} {event.type}
        </p>

        {/* Hora */}

        <p className="event-card-time">
          {event.time}
        </p>

        {/* Título */}

        <h3 className="event-card-title">
          {event.title}
        </h3>

        {/* Lugar */}

        <div className="event-card-location">
          <p className="event-card-venue">
            {event.venue}
          </p>

          <p className="event-card-city">
            {event.location}
          </p>
        </div>

        {/* Descripción */}

        <p className="event-card-description">
          {event.description}
        </p>

        {/* Botón de mapa */}

        <a
          href={event.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="event-card-button"
        >
          <span>Ver ubicación</span>
          <span className="event-card-arrow">↗</span>
        </a>

      </div>
    </div>
  );
}

export default function EventDetails() {
  return (
    <section
      id="gran-dia"
      className="event-details-section"
    >
      {/* Decoración floral */}

      <div className="event-floral-decoration event-floral-left" />

      <div className="event-floral-decoration event-floral-right" />

      <div className="event-details-container">

        {/* Encabezado */}

        <div className="event-details-header">

          <p className="event-eyebrow">
            El gran día
          </p>

          <h2 className="event-details-title">
            Una fecha para recordar
          </h2>

          <div className="event-divider">
            <span />
            <strong>✦</strong>
            <span />
          </div>

          <p className="event-details-intro">
            Queremos compartir contigo cada momento de este día
            tan especial y celebrar juntos el comienzo de nuestra
            nueva historia.
          </p>

        </div>

        {/* Eventos */}

        <div className="event-grid">

          {events.map((event, index) => (
            <EventCard
              key={event.type}
              event={event}
              index={index}
            />
          ))}

        </div>

        {/* Frase final */}

        <div className="event-details-footer">

          <span className="event-footer-symbol">
            ✦
          </span>

          <p>
            Tu presencia será el mejor regalo
            para nosotros.
          </p>

        </div>

      </div>
    </section>
  );
}