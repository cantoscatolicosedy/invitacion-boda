"use client";

import { useEffect, useState } from "react";

const weddingDate = new Date("2027-07-16T16:00:00");

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const target = weddingDate.getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(
          difference / (1000 * 60 * 60 * 24)
        ),

        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),

        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),

        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    };

    updateCountdown();

    const interval = setInterval(
      updateCountdown,
      1000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        countdown-premium
        mt-8
        flex
        items-center
        justify-center
        gap-2
        sm:gap-3
        md:gap-4
      "
    >

      <CountdownBox
        value={timeLeft.days}
        label="Días"
      />

      <CountdownBox
        value={timeLeft.hours}
        label="Horas"
      />

      <CountdownBox
        value={timeLeft.minutes}
        label="Min"
      />

      <CountdownBox
        value={timeLeft.seconds}
        label="Seg"
      />

    </div>
  );
}

function CountdownBox({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div
      className="
        countdown-box-premium
        relative
        flex
        h-[72px]
        w-[82px]
        flex-col
        items-center
        justify-center
        border
        border-[#F4B400]/50
        bg-[#35152a]/25
        backdrop-blur-sm
        sm:h-[78px]
        sm:w-[88px]
        md:h-[84px]
        md:w-[94px]
      "
    >

      {/* ESQUINAS ORNAMENTALES */}

      <span className="countdown-corner countdown-corner-tl" />
      <span className="countdown-corner countdown-corner-tr" />
      <span className="countdown-corner countdown-corner-bl" />
      <span className="countdown-corner countdown-corner-br" />

      {/* NÚMERO */}

      <span
        className="
          font-cormorant
          text-2xl
          leading-none
          text-[#FFF8ED]
          sm:text-3xl
          md:text-4xl
        "
      >
        {String(value).padStart(2, "0")}
      </span>

      {/* ETIQUETA */}

      <span
        className="
          mt-2
          text-[8px]
          uppercase
          tracking-[0.22em]
          text-[#F4B400]/80
          sm:text-[9px]
        "
      >
        {label}
      </span>

    </div>
  );
}