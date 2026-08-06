"use client";

import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="/music/musica.mp3"
      />

      <button
        onClick={toggleMusic}
        className="
          fixed
          bottom-6
          right-6
          z-[999]
          h-16
          w-16
          rounded-full
          bg-white/90
          shadow-2xl
          backdrop-blur-lg
          flex
          items-center
          justify-center
          text-2xl
          hover:scale-110
          transition
        "
      >
        {playing ? "⏸" : "🎵"}
      </button>
    </>
  );
}