"use client";

import { useEffect, useRef, useState } from "react";


const galleryImages = {
  iglesia: [
    "/images/iglesia1.jpg",
    "/images/iglesia2.jpg",
    "/images/iglesia3.jpg",
  ],
  salon: [
    "/images/salon1.jpg",
    "/images/salon2.jpg",
    "/images/salon3.jpg",
  ],
};

const locations = [
  {
    type: "Ceremonia",
    icon: "✦",
    time: "4:00 PM",
    title: "Iglesia de Santa Rosa de Lima",
    subtitle: "Iglesia del Nazareno",
    location: "Cusihuiriachi, Chihuahua",
    description:
      "Acompáñanos a celebrar la ceremonia religiosa y el inicio de este nuevo capítulo de nuestras vidas.",
    mapUrl: "https://maps.app.goo.gl/6D2CkvqApSALv6Kj9",
    gallery: "iglesia",
  },
  {
    type: "Recepción",
    icon: "✦",
    time: "7:45 PM",
    title: "El Quijote Salón Jardín",
    subtitle: "Km 6, Corredor Comercial",
    location: "",
    description:
      "Después de la ceremonia, celebraremos juntos con música, alegría y todos nuestros seres queridos.",
    mapUrl: "https://maps.app.goo.gl/mvbRcQSMu56MT8wr7",
    gallery: "salon",
  },
];

const schedule = [
  {
    time: "4:00 PM",
    title: "Misa",
    description: "Ceremonia religiosa.",
  },
  {
    time: "7:45 PM",
    title: "Cóctel de bienvenida",
    description: "Cóctel de bienvenida y sesión de fotografías.",
  },
  {
    time: "8:45 PM",
    title: "Entrada de los novios",
    description: "El momento de compartir nuestra entrada como esposos.",
  },
  {
    time: "9:00 PM",
    title: "Fiesta & Barra Libre",
    description: "Comienza la celebración.",
  },
  {
    time: "12:00 AM",
    title: "Cena de trasnochados",
    description: "Una cena para continuar disfrutando juntos.",
  },
  {
    time: "1:45 AM",
    title: "Fin del evento",
    description: "Cerramos juntos una noche inolvidable.",
  },
];


function ScheduleItem({
  item,
  index,
}: {
  item: (typeof schedule)[number];
  index: number;
}) {
  const itemRef = useRef<HTMLDivElement | null>(null);
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

  return (
    <div
      ref={itemRef}
      className={`
        event-schedule-item
        ${isVisible ? "event-schedule-visible" : ""}
        ${
          index % 2 === 0
            ? "event-schedule-left"
            : "event-schedule-right"
        }
      `}
    >
      {/* Número */}

      <div className="event-schedule-number">
        0{index + 1}
      </div>

      {/* Contenido */}

      <div className="event-schedule-content">
        <span className="event-schedule-time">
          {item.time}
        </span>

        <h4>
          {item.title}
        </h4>

        <p>
          {item.description}
        </p>
      </div>

      {/* Punto central */}

      <div className="event-schedule-dot">
        ✦
      </div>
    </div>
  );
}

function LocationCard({
  location,
  index,
}: {
  location: (typeof locations)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % 3);
  }, 5000);

  return () => clearInterval(interval);
}, []);

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


        <div className="event-card-gallery">
  <img
    src={
      galleryImages[index === 0 ? "iglesia" : "salon"][currentImage]
    }
    alt={location.title}
    className="event-card-gallery-image"
  />

  <div className="event-card-gallery-overlay" />

  <div className="event-card-gallery-dots">
    {galleryImages[index === 0 ? "iglesia" : "salon"].map(
      (_, imageIndex) => (
        <button
          key={imageIndex}
          type="button"
          onClick={() => setCurrentImage(imageIndex)}
          className={
            imageIndex === currentImage ? "active" : ""
          }
          aria-label={`Ver imagen ${imageIndex + 1}`}
        />
      )
    )}
  </div>
</div>



        {/* Número */}

        <div className="event-card-number">
          0{index + 1}
        </div>

        {/* Tipo */}

        <p className="event-card-type">
          {location.icon} {location.type}
        </p>

        {/* Hora */}

        <p className="event-card-time">
          {location.time}
        </p>

        {/* Título */}

        <h3 className="event-card-title">
          {location.title}
        </h3>

        {/* Subtítulo */}

        <p className="event-card-venue">
          {location.subtitle}
        </p>

        {/* Ubicación */}

        {location.location && (
          <p className="event-card-city">
            {location.location}
          </p>
        )}

        {/* Descripción */}

        <p className="event-card-description">
          {location.description}
        </p>

        {/* Botón */}

        <a
          href={location.mapUrl}
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

      {/* ================================= */}
      {/* DECORACIÓN FLORAL */}
      {/* ================================= */}

      <div className="event-floral-decoration event-floral-left" />

      <div className="event-floral-decoration event-floral-right" />

      <div className="event-details-container">

        {/* ================================= */}
        {/* ENCABEZADO */}
        {/* ================================= */}

        <div className="event-details-header">

          <p className="event-eyebrow">
            El gran día
          </p>

          <h2 className="event-details-title">
            16 de julio de 2027
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

        {/* ================================= */}
        {/* UBICACIONES */}
        {/* ================================= */}

        <div className="event-grid">

          {locations.map((location, index) => (
            <LocationCard
              key={location.type}
              location={location}
              index={index}
            />
          ))}

        </div>

 {/* ================================= */}
{/* ITINERARIO */}
{/* ================================= */}

<div className="event-schedule">

  <div className="event-schedule-header">

    <p className="event-eyebrow">
      Nuestro día
    </p>

    <h3 className="event-schedule-title">
      Momentos para recordar
    </h3>

  </div>

  <div className="event-schedule-list">

    {schedule.map((item, index) => (
      <ScheduleItem
        key={`${item.time}-${item.title}`}
        item={item}
        index={index}
      />
    ))}

  </div>

</div>

{/* ================================= */}
{/* FRASE FINAL */}
{/* ================================= */}

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