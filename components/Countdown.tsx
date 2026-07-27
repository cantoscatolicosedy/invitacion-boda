"use client";

import { useEffect, useState } from "react";

const weddingDate = new Date("2026-12-20T18:00:00");

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
        mt-10
        grid
        grid-cols-4
        gap-2
        sm:gap-4
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
        min-w-[65px]
        border
        border-white/20
        bg-black/20
        px-3
        py-3
        backdrop-blur-md
        sm:min-w-[80px]
      "
    >
      <span
        className="
          block
          text-xl
          font-semibold
          sm:text-2xl
        "
      >
        {String(value).padStart(2, "0")}
      </span>

      <span
        className="
          text-[9px]
          uppercase
          tracking-[0.2em]
          text-white/60
          sm:text-[10px]
        "
      >
        {label}
      </span>
    </div>
  );
}