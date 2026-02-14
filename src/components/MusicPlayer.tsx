// import { useRef, useState } from "react";

// export default function MusicPlayer() {
//   const audioRef = useRef<HTMLAudioElement>(null);
//   const [playing, setPlaying] = useState(false);

//   const toggle = () => {
//     if (!audioRef.current) return;
//     playing ? audioRef.current.pause() : audioRef.current.play();
//     setPlaying(!playing);
//   };

//   return (
//     <>
//       <audio ref={audioRef} loop src="/music.mp3" />
//       <button
//         onClick={toggle}
//         className="fixed top-4 right-4 z-50 text-white border border-white px-4 py-1 rounded-full text-sm"
//       >
//         {playing ? "Pause 🎵" : "Play 🎶"}
//       </button>
//     </>
//   );
// }

import { useEffect, useRef } from "react";

export default function MusicPlayer({ unlocked }: { unlocked: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (unlocked && audioRef.current) {
      audioRef.current.volume = 0.4; // soft background music
      audioRef.current.loop = true;

      audioRef.current.play().catch(() => {
        // browser safety – no action needed
      });
    }
  }, [unlocked]);

  return <audio ref={audioRef} src="/music.mp3" />;
}
