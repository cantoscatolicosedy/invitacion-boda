"use client";

import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";
import GuestCounter from "./rsvp/GuestCounter";
import AccessPass from "./AccessPass";

type RSVPStatus = "pending" | "confirmed" | "declined";

type Guest = {
  family_code: string;
  family_name: string;
  max_places: number;
  confirmed_places: number;
  rsvp_status: RSVPStatus;
};

type RSVPProps = {
  familyCode: string;
};

export default function RSVP({
  familyCode,
}: RSVPProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState<RSVPStatus>("pending");
  
  const [guest, setGuest] = useState<Guest | null>(null);

  const [confirmedPlaces, setConfirmedPlaces] = useState(1);
  const [notFound, setNotFound] = useState(false);

  const [showPass, setShowPass] = useState(false);


useEffect(() => {
  

  console.log("Código recibido:", familyCode);
  const loadGuest = async () => {
  const guestCode = familyCode;

  const { data, error } = await supabase
    .from("families")
    .select(
      "family_code, family_name, max_places, confirmed_places, rsvp_status"
    )
    .eq("family_code", guestCode)
    .maybeSingle();
      console.log("DATA:", data);
      console.log("ERROR:", error);

 if (error || !data) {
  console.error("Familia no encontrada:", error);
  setNotFound(true);
  return;
}
    if (data) {
      setGuest(data);
      setStatus(data.rsvp_status);

      setConfirmedPlaces(
    data.confirmed_places > 0
      ? data.confirmed_places
      : data.max_places
       );

    }


  };

  loadGuest();
}, []);

useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const guestCode = params.get("invitado");

  if (!guestCode) return;

  const savedStatus = localStorage.getItem(
    `rsvp-${guestCode}`
  ) as RSVPStatus | null;

  if (savedStatus) {
    setStatus(savedStatus);
  }
}, []);


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
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);


  if (notFound) {
  return (
    <section
      className="
        rsvp-section
        flex
        items-center
        justify-center
      "
    >
      <div className="rsvp-container">
        <div className="rsvp-card">

          <div className="rsvp-card-symbol">
            ✦
          </div>

          <h2 className="rsvp-title">
            Invitación no encontrada
          </h2>

          <p className="rsvp-intro">
            Lo sentimos.
            <br /><br />
            El enlace que estás utilizando
            no corresponde a una invitación válida.
            <br /><br />
            Si crees que se trata de un error,
            comunícate con los novios.
          </p>

        </div>
      </div>
    </section>
  );
}


  return (
    <section
      ref={sectionRef}
      id="rsvp"
      className={`
        rsvp-section
        ${isVisible ? "rsvp-visible" : ""}
      `}
    >
      {/* ================================= */}
      {/* DECORACIÓN */}
      {/* ================================= */}

      <div className="rsvp-decoration rsvp-decoration-left" />

      <div className="rsvp-decoration rsvp-decoration-right" />

      {/* ================================= */}
      {/* CONTENIDO */}
      {/* ================================= */}

      <div className="rsvp-container">

        {/* ================================= */}
        {/* ENCABEZADO */}
        {/* ================================= */}

        <div className="rsvp-header">

          <p className="rsvp-eyebrow">
            Confirmación de asistencia
          </p>

          <h2 className="rsvp-title">
            ¿Nos acompañas?
          </h2>

          <div className="rsvp-divider">
            <span />
            <strong>✦</strong>
            <span />
          </div>

          <p className="rsvp-intro">
            Será un honor compartir este día tan especial
            contigo y celebrar juntos el comienzo de
            nuestra nueva historia.
          </p>

        </div>

        {/* ================================= */}
        {/* TARJETA RSVP */}
        {/* ================================= */}

        <div className="rsvp-card">

          <div className="rsvp-card-symbol">
            ✦
          </div>

          <p className="rsvp-card-label">
            Invitación para
          </p>

          <h3 className="rsvp-family-name">
            {guest?.family_name || "Familia invitada"}
          </h3>

          <p className="rsvp-reserved">
            Hemos reservado
          </p>

          <p className="rsvp-places">
            {guest?.max_places ?? "—"}{" "}
            {guest?.max_places === 1 ? "lugar" : "lugares"}
          </p>

          <p className="rsvp-card-message">
            para ustedes.
            <br />
            Nos encantará contar con su presencia.
          </p>

          {/* ================================= */}
          {/* BOTONES */}
          {/* ================================= */}

          {status === "pending" && (
  <div className="rsvp-actions">

    <p className="rsvp-counter-label">
      ¿Cuántas personas asistirán?
    </p>

    <GuestCounter
      value={confirmedPlaces}
      max={guest?.max_places ?? 1}
      onChange={setConfirmedPlaces}
    />

    <button
      type="button"
      className="rsvp-button rsvp-button-confirm"
      onClick={async () => {
        if (!guest) return;

        const { error } = await supabase
          .from("families")
          .update({
            confirmed_places: confirmedPlaces,
            rsvp_status: "confirmed",
            rsvp_at: new Date().toISOString(),
          })
          .eq("family_code", guest.family_code);

        if (error) {
          alert("Ocurrió un error al guardar la confirmación.");
          console.error(error);
          return;
        }

        setStatus("confirmed");
      }}
    >
      Confirmar asistencia
    </button>

    <button
      type="button"
      className="rsvp-button rsvp-button-decline"
      onClick={async () => {
        if (!guest) return;

        const { error } = await supabase
          .from("families")
          .update({
            confirmed_places: 0,
            rsvp_status: "declined",
            rsvp_at: new Date().toISOString(),
          })
          .eq("family_code", guest.family_code);

        if (error) {
          alert("Ocurrió un error al guardar la respuesta.");
          console.error(error);
          return;
        }

        setStatus("declined");
      }}
    >
      No podremos acompañarlos
    </button>

  </div>
)}

          {/* ================================= */}
          {/* CONFIRMADO */}
          {/* ================================= */}

{status === "confirmed" && (
  <div className="rsvp-status-message">

    <p>
      ✦ Asistencia confirmada ✦
    </p>

    <p>
      Su asistencia ha sido registrada correctamente.
    </p>

    <strong>
      {confirmedPlaces} de {guest?.max_places}{" "}
      {guest?.max_places === 1
        ? "lugar reservado ha sido confirmado."
        : "lugares reservados han sido confirmados."}
    </strong>

    <br />
    <br />

    <p>
      ¡Qué alegría saber que compartirán este día tan especial con nosotros!
    </p>

  </div>
)}


          {/* ================================= */}
          {/* NO ASISTIRÁ */}
          {/* ================================= */}

          {status === "declined" && (
            <div className="rsvp-status-message">

              <p>
                Respuesta registrada
              </p>

              <strong>
                Gracias por hacérnoslo saber.
              </strong>

            </div>
          )}

        </div>

      </div>

{status === "confirmed" && guest && (
  <AccessPass
    familyName={guest.family_name}
    familyCode={guest.family_code}
    confirmedPlaces={confirmedPlaces}
    maxPlaces={guest.max_places}
    qrValue={JSON.stringify({
      code: guest.family_code,
      family: guest.family_name,
      places: confirmedPlaces,
    })}
  />
)}


    </section>
  );
}