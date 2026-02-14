// import { motion } from "framer-motion";

// const timelineItems = [
//   {
//     text: "Hello Sona, mone a6e amader 1st kiss .. class er moddhe, ahaa ki din 6ilo ",
//     image: "/assets/love1.jpg",
//   },
//   {
//     text: "Naam ta valo kintu title ta valo na , Bairagi hole valo hoto..",
//     image: "/assets/love2.jpg",
//   },
//   {
//     text: "You're my 'Saat rajar dhan'",
//     image: "/assets/love5.jpg",
//   },
//   {
//     text: "I promise you that I will not going anywhere from you..",
//     image: "/assets/love6.jpg",
//   },
//   {
//     text: "Forever loading...",
//     image: "/assets/love3.jpg",
//   },
// ];

// export default function Timeline() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="space-y-6"
//     >
//       {/* Title */}
//       <h2 className="text-white text-3xl font-serif tracking-wide">
//         Timeline – Our Journey
//       </h2>

//       {/* Subtitle */}
//       <p className="text-gray-400 text-sm">
//         Every small moment quietly turned into something unforgettable.
//       </p>

//       {/* Timeline */}
//       <div className="relative border-l border-neutral-700 pl-6 space-y-10">
//         {timelineItems.map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: index * 0.3 }}
//             className="relative"
//           >
//             {/* Dot */}
//             <span className="absolute -left-[30px] top-4 w-3 h-3 rounded-full bg-white"></span>

//             {/* Card */}
//             <div className="bg-neutral-800/70 border border-neutral-700 rounded-xl p-4 space-y-3">
//               <p className="text-gray-200 text-sm">❤️ {item.text}</p>

//               {/* Image */}
//               <motion.img
//                 src={item.image}
//                 alt={item.text}
//                 className="rounded-lg object-cover w-full aspect-[9/16] max-h-[520px]"
//                 initial={{ scale: 0.92, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.7, ease: "easeOut" }}
//               />
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Ending note */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.8 }}
//         className="text-center text-gray-400 text-xs italic"
//       >
//         And this relationship still has no ending…
//       </motion.p>
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";

const timelineItems = [
  {
    text: "Hello Sona, mone a6e amader 1st kiss .. class er moddhe, ahaa ki din 6ilo ",
    image: "/assets/love1.jpg",
  },
  {
    text: "Naam ta valo kintu title ta valo na , Bairagi hole valo hoto..",
    image: "/assets/love2.jpg",
  },
  {
    text: "You're my 'Saat rajar dhan'",
    image: "/assets/love5.jpg",
  },
  {
    text: "I promise you that I will not going anywhere from you..",
    image: "/assets/love6.jpg",
  },
  {
    text: "Forever loading...",
    image: "/assets/love3.jpg",
  },
];

export default function Timeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="space-y-6"
    >
      <h2 className="text-white text-3xl font-serif tracking-wide text-center">
        You & Me – Our Love
      </h2>

      <p className="text-gray-400 text-sm text-center">
        Every small moment quietly turned into something unforgettable.
      </p>

      <div className="relative border-l border-neutral-700 pl-6 space-y-10">
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3 }}
            className="relative"
          >
            <span className="absolute -left-[30px] top-4 w-3 h-3 rounded-full bg-white"></span>

            <div className="bg-neutral-800/70 border border-neutral-700 rounded-xl p-4 space-y-3 shadow-lg">
              <p className="text-gray-200 text-sm">❤️ {item.text}</p>

              <motion.img
                src={item.image}
                alt={item.text}
                className="rounded-xl object-cover w-full aspect-[9/16]
                           shadow-xl ring-1 ring-white/10"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="text-center text-gray-400 text-xs italic"
      >
        And this relationship still has no ending…
      </motion.p>
    </motion.div>
  );
}
