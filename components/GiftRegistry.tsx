"use client";

import { useEffect, useRef, useState } from "react";

const gifts = [
  {
    number: "01",
    title: "Liverpool",
    description:
      "Si deseas hacernos un regalo, puedes encontrar nuestra mesa de regalos aquí.",
    button: "Ver mesa de regalos",
    url: "#",
  },
  {
    number: "02",
    title: "Otra opción",
    description:
      "También puedes elegir esta opción para acompañarnos en el comienzo de nuestra nueva historia.",
    button: "Ver opción",
    url: "#",
  },
];

function GiftCard({
  gift,
  index,
}: {
  gift: (typeof gifts)[number];
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
      className={`gift-card ${
        isVisible ? "gift-card-visible" : ""
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Número */}

      <span className="gift-card-number">
        {gift.number}
      </span>

      {/* Símbolo */}

      <div className="gift-card-symbol">
        ✦
      </div>

      {/* Nombre */}

      <h3 className="gift-card-title">
        {gift.title}
      </h3>

      {/* Descripción */}

      <p className="gift-card-description">
        {gift.description}
      </p>

      {/* Botón */}

      <a
        href={gift.url}
        target="_blank"
        rel="noopener noreferrer"
        className="gift-card-button"
      >
        <span>{gift.button}</span>
        <span className="gift-card-arrow">↗</span>
      </a>
    </div>
  );
}

export default function GiftRegistry() {
  return (
    <section className="gift-registry-section">

      {/* ================================= */}
      {/* DECORACIÓN FLORAL */}
      {/* ================================= */}

      <div className="gift-floral-decoration gift-floral-left" />

      <div className="gift-floral-decoration gift-floral-right" />

      {/* ================================= */}
      {/* CONTENEDOR */}
      {/* ================================= */}

      <div className="gift-registry-container">

        {/* ================================= */}
        {/* ENCABEZADO */}
        {/* ================================= */}

        <div className="gift-registry-header">

          <p className="gift-eyebrow">
            Mesa de regalos
          </p>

          <h2 className="gift-registry-title">
            Un detalle para
            <br />
            nuestra nueva historia
          </h2>

          <div className="gift-divider">
            <span />
            <strong>✦</strong>
            <span />
          </div>

          <p className="gift-registry-intro">
            Tu presencia será nuestro mejor regalo.
            <br />
            Pero si deseas tener un detalle con nosotros,
            hemos preparado estas opciones para ti.
          </p>

        </div>

        {/* ================================= */}
        {/* TARJETAS */}
        {/* ================================= */}

        <div className="gift-grid">

          {gifts.map((gift, index) => (
            <GiftCard
              key={gift.number}
              gift={gift}
              index={index}
            />
          ))}

        </div>

        {/* ================================= */}
        {/* FRASE FINAL */}
        {/* ================================= */}

        <div className="gift-registry-footer">

          <span>✦</span>

          <p>
            Gracias por acompañarnos
            <br />
            en este momento tan especial.
          </p>

        </div>

      </div>
    </section>
  );
}