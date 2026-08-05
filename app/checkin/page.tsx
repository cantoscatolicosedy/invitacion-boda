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

{qrValue && (
  <div className="mt-6 rounded-xl bg-white/10 p-4">
    <p className="text-sm text-white/70">
      Código leído
    </p>

    <strong>{qrValue}</strong>
  </div>
)}
{family && (
  <div className="mt-6 rounded-xl bg-green-700/30 p-5 text-left">

    <h2 className="text-2xl font-bold">
      {family.family_name}
    </h2>

    <p>
      Código: <strong>{family.family_code}</strong>
    </p>

    <p>
      Confirmados: {family.confirmed_places}
    </p>

    <p>
      Estado RSVP: {family.rsvp_status}
    </p>

    <button
  className="mt-6 w-full rounded-xl bg-green-600 py-3 font-semibold hover:bg-green-700"
  onClick={async () => {
    const { error } = await supabase
      .from("families")
      .update({
        checked_in: true,
        checked_in_at: new Date().toISOString(),
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
      checked_in_at: new Date().toISOString(),
    });

    alert("Acceso registrado correctamente.");
  }}
>
  Registrar Entrada
</button>

{family.checked_in && (
  <div className="mt-6 rounded-xl bg-green-600/20 border border-green-500 p-4">

    <h3 className="text-xl font-bold text-green-300">
      ✅ Acceso autorizado
    </h3>

    <p className="mt-2">
      Este pase ya fue registrado.
    </p>

    <p className="text-sm text-white/70">
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