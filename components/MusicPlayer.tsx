"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0;
    }
  }, []);

  const fadeIn = () => {
    if (!audioRef.current) return;

    let volume = 0;

    audioRef.current.volume = 0;
    audioRef.current.play();

    const interval = setInterval(() => {
      volume += 0.05;

      if (!audioRef.current) return;

      audioRef.current.volume = Math.min(volume, 0.35);

      if (volume >= 0.35) {
        clearInterval(interval);
      }
    }, 150);
  };

  const fadeOut = () => {
    if (!audioRef.current) return;

    let volume = audioRef.current.volume;

    const interval = setInterval(() => {
      volume -= 0.05;

      if (!audioRef.current) return;

      audioRef.current.volume = Math.max(volume, 0);

      if (volume <= 0) {
        audioRef.current.pause();
        clearInterval(interval);
      }
    }, 120);
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      fadeOut();
      setPlaying(false);
    } else {
      fadeIn();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/musica.mp3"
        loop
      />

      <button
        onClick={toggleMusic}
        className="
          fixed
          bottom-6
          right-6
          z-[9999]
          w-16
          h-16
          rounded-full
          border-2
          border-yellow-300/60
          bg-white/90
          backdrop-blur-xl
          shadow-2xl
          flex
          items-center
          justify-center
          transition
          hover:scale-110
        "
      >
        <div
          className={`
            text-3xl
            ${playing ? "animate-spin" : ""}
          `}
          style={{
            animationDuration: "5s",
          }}
        >
          💿
        </div>
      </button>
    </>
  );
}