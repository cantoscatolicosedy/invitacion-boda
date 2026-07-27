"use client";

import { useEffect, useRef, useState } from "react";

export default function DressCode() {
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
      id="codigo-vestimenta"
      className={`dress-code-section ${
        isVisible ? "dress-code-visible" : ""
      }`}
    >
      <div className="dress-code-decoration dress-code-decoration-left">
        ✦
      </div>

      <div className="dress-code-decoration dress-code-decoration-right">
        ✦
      </div>

      <div className="dress-code-container">

        <p className="dress-code-eyebrow">
          Código de vestimenta
        </p>

        <div className="dress-code-divider">
          <span />
          <strong>✦</strong>
          <span />
        </div>

        <h2 className="dress-code-title">
          Formal
        </h2>

        <p className="dress-code-description">
          Queremos que celebres este día tan especial
          con nosotros vistiendo tus mejores galas.
        </p>

        <div className="dress-code-icons">

          <div className="dress-code-icon">
            <span>♢</span>
            <p>Damas</p>
            <small>Vestido formal</small>
          </div>

          <div className="dress-code-icon">
            <span>♢</span>
            <p>Caballeros</p>
            <small>Traje formal</small>
          </div>

        </div>

        <p className="dress-code-note">
          Elegancia y comodidad para disfrutar
          juntos de una noche inolvidable.
        </p>

      </div>
    </section>
  );
}