"use client";
import { useEffect, useState } from "react";
import QRScanner from "@/components/checkin/QRScanner";

import { supabase } from "@/lib/supabase";
export default function CheckInPage() {
const [qrValue, setQrValue] = useState("");
const [family, setFamily] = useState<any>(null);
const [loading, setLoading] = useState(false);



useEffect(() => {
  if (!qrValue) return;

  const loadFamily = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("families")
      .select("*")
      .eq("family_code", qrValue)
      .single();

    if (error) {
      console.error(error);
      setFamily(null);
    } else {
      setFamily(data);
    }

    setLoading(false);
  };

  loadFamily();
}, [qrValue]);
    return (
    <main
      className="
        min-h-screen
        bg-[#35152A]
        text-white
        flex
        items-center
        justify-center
        p-6
      "
    >
      <div
        className="
          w-full
          max-w-xl
          rounded-3xl
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          p-8
          text-center
        "
      >
        <p className="text-sm uppercase tracking-[0.3em] text-white/70">
          Control de Acceso
        </p>

        <h1 className="text-4xl font-serif mt-3">
          Escanear Pase
        </h1>

        <p className="mt-6 text-white/70">
          Apunte la cámara al código QR del pase.
        </p>

        <div className="mt-10">
          
          <QRScanner onScan={setQrValue} />


{family && (
  <div className="mt-6 rounded-xl bg-green-700/30 p-5 text-left">

    <h2 className="text-2xl font-bold">
      {family.family_name}
    </h2>

    
   <p>
  Código: <strong>{family.family_code}</strong>
</p>

<p>
  Confirmados: <strong>{family.confirmed_places}</strong>
</p>

<p>
  Mesa: <strong>{family.table_number}</strong>
</p>

<p>
  Estado:
  <strong>
    {family.rsvp_status === "confirmed"
      ? " Confirmado"
      : family.rsvp_status === "declined"
      ? " No asistirá"
      : " Pendiente"}
  </strong>
</p>

   
{!family.checked_in ? (
  <button
    className="mt-6 w-full rounded-xl bg-green-600 py-3 font-semibold hover:bg-green-700"
    onClick={async () => {
      const now = new Date().toISOString();

      const { error } = await supabase
        .from("families")
        .update({
          checked_in: true,
          checked_in_at: now,
        })
        .eq("family_code", family.family_code);

      if (error) {
        alert("Error al registrar la entrada.");
        console.error(error);
        return;
      }

      setFamily({
        ...family,
        checked_in: true,
        checked_in_at: now,
      });
    }}
  >
    Registrar Entrada
  </button>
) : (
  <div className="mt-6 rounded-xl border border-red-500 bg-red-500/20 p-5">
    <h3 className="text-2xl font-bold text-red-300">
      ⚠ Pase ya utilizado
    </h3>

    <p className="mt-2">
      Esta familia ya ingresó al evento.
    </p>

    <p className="mt-2 text-sm text-white/70">
      Hora de ingreso:
      <br />
      {new Date(family.checked_in_at).toLocaleString()}
    </p>
  </div>
)}

  </div>
)}
        </div>
      </div>
    </main>
  );
}