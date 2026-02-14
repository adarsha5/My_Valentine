// export default function FloatingHearts() {
//   return (
//     <div className="fixed inset-0 pointer-events-none z-0">
//       {[...Array(20)].map((_, i) => (
//         <span
//           key={i}
//           className="absolute text-pink-400 opacity-40 animate-pulse"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//           }}
//         >
//           ♥
//         </span>
//       ))}
//     </div>
//   );
// }

import { motion } from "framer-motion";

export default function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(25)].map((_, i) => {
        const left = Math.random() * 100;
        const duration = 10 + Math.random() * 10;
        const size = 12 + Math.random() * 12;

        return (
          <motion.span
            key={i}
            className="absolute text-pink-400 opacity-50"
            style={{
              left: `${left}%`,
              bottom: "-10%",
              fontSize: `${size}px`,
            }}
            initial={{
              y: 0,
              opacity: 0,
            }}
            animate={{
              y: "-120vh",
              opacity: [0, 0.6, 0.6, 0],
              x: [-10, 10, -10], // soft left-right movement
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          >
            ♥
          </motion.span>
        );
      })}
    </div>
  );
}
