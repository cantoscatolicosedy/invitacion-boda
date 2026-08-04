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

  </div>
)}
        </div>
      </div>
    </main>
  );
}