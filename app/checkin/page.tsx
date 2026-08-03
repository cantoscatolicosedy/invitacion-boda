"use client";

export default function CheckInPage() {
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
          AQUÍ IRÁ EL LECTOR QR
        </div>
      </div>
    </main>
  );
}