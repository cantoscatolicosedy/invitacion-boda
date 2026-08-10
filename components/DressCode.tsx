"use client";

import { useEffect, useRef, useState } from "react";

export default function DressCode() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`dress-code-section ${
        isVisible ? "dress-code-visible" : ""
      }`}
    >
      {/* Decoración floral */}
      <div className="dress-floral dress-floral-left" />
      <div className="dress-floral dress-floral-right" />

      <div className="dress-code-container">

        {/* ENCABEZADO */}
        <header className="dress-code-header">

          <p className="dress-eyebrow">
            Código de vestimenta
          </p>

          <div className="dress-divider">
            <span />
            <strong>✦</strong>
            <span />
          </div>

          <h2 className="dress-code-title">
            Formal
          </h2>

          <p className="dress-intro">
            Queremos que celebres este día tan especial
            con nosotros vistiendo tus mejores galas.
          </p>

        </header>

        {/* DAMAS / CABALLEROS */}
        <div className="dress-code-options">

          {/* MUJERES */}
          <article className="dress-option">

            <div className="dress-option-icon">
              ♢
            </div>

            <h3>
              Mujeres
            </h3>

            <p className="dress-style">
              Formal de noche
            </p>

            <p className="dress-detail">
              Vestido largo
            </p>

            <div className="dress-warning">

              <span className="dress-warning-title">
                IMPORTANTE
              </span>

              <p>
                Blanco exclusivo de la novia.
                <br />
                No colores pastel ni tonos que
                parezcan blanco o beige.
              </p>

            </div>

          </article>

          {/* HOMBRES */}
          <article className="dress-option">

            <div className="dress-option-icon">
              ♢
            </div>

            <h3>
              Hombres
            </h3>

            <p className="dress-style">
              Formal de vestir
            </p>

            <p className="dress-detail">
              Formal vaquero completo
            </p>

            <div className="dress-warning">

              <span className="dress-warning-title">
                IMPORTANTE
              </span>

              <p>
                No mezclilla.
              </p>

            </div>

          </article>

        </div>

        {/* FRASE FINAL */}
        <div className="dress-code-footer">

          <span>✦</span>

          <p>
            Elegancia y comodidad para disfrutar
            juntos de una noche inolvidable.
          </p>

        </div>

      </div>
    </section>
  );
}