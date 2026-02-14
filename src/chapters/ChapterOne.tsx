// import { motion } from "framer-motion";

// export default function ChapterOne() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="space-y-6"
//     >
//       {/* Title */}
//       <h2 className="text-white text-3xl font-serif tracking-wide">
//         Chapter One – Us
//       </h2>

//       {/* Romantic Text */}
//       <p className="text-gray-300 text-sm leading-relaxed">
//         Even across miles, you are my everyday comfort. Distance never reduced
//         us — it refined us. In waiting, trusting, and hoping, I keep choosing
//         you again and again.
//       </p>

//       {/* Image Section */}
//       <div className="grid grid-cols-2 gap-4">
//         <motion.img
//           src="/assets/love.jpg"
//           alt="Memory one"
//           className="rounded-xl object-cover h-40 w-full"
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 0.4 }}
//         />

//         <motion.img
//           src="/assets/love4.jpg"
//           alt="Memory two"
//           className="rounded-xl object-cover h-40 w-full"
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 0.6 }}
//         />
//       </div>

//       {/* Soft Quote Card */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.8 }}
//         className="bg-neutral-800/70 border border-neutral-700 rounded-xl p-4"
//       >
//         <p className="text-gray-200 text-sm italic text-center">
//           "No matter the distance, my heart always finds its way back to you."
//         </p>
//       </motion.div>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";

export default function ChapterOne() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="space-y-6"
    >
      {/* Title */}
      <h2 className="text-white text-3xl font-serif tracking-wide text-center">
        Chapter One – Us
      </h2>

      {/* Romantic Text */}
      <p className="text-gray-300 text-sm leading-relaxed text-center">
        Even across miles, you are my everyday comfort. Distance never reduced
        us — it refined us. In waiting, trusting, and hoping, I keep choosing
        you again and again.
      </p>

      {/* Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {["/assets/love.jpg", "/assets/love4.jpg"].map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt="Memory"
            className="rounded-xl object-cover h-40 w-full shadow-lg"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: 0.4 + i * 0.2 }}
          />
        ))}
      </div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9 }}
        className="bg-gradient-to-br from-neutral-800/80 to-neutral-900/80
                   border border-neutral-700 rounded-xl p-4 shadow-inner"
      >
        <p className="text-gray-200 text-sm italic text-center">
          "No matter the distance, my heart always finds its way back to you."
        </p>
      </motion.div>
    </motion.div>
  );
}
