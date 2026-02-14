// export default function FinalLetter() {
//   return (
//     <>
//       <h2 className="text-white text-2xl font-serif mb-4">Final Letter</h2>

//       <p className="text-gray-300 text-sm leading-relaxed">
//         Happy valentine's day my one and only valentine 💕❤️, I know it's
//         hurting, not to see each other, not to hold hands, not to hug tightly.
//         Yah this valentine's week without you give me the saddest part of 2026 ,
//         but One day we will celebrate this week 😘😘😁... Joto boli totoi kom
//         hoi , tomake peye ami khub valo a6i janoo , tomake 6ara r kono ki6utei
//         mon jai na , tumi samne thakle ami khub khub happy thaki r dure gele
//         ektu kom holeo happy thaki karon ami jani amar pupu kothao jai ni amake
//         6ere , she will always there for me , she is my love, she is the world's
//         most prettiest girl to me . Ajj sobai k gorbo kore bolte pari amar bou
//         erom serom, amar sosur barir lok ettoo valo , I can feel , they are
//         getting jealous 😁. Bole6ilam na j hat ta 6ere deoar jonno dhorini , I
//         am always with you baby 🍼❤️😘, tumi just khusi thako , taholei ami sob
//         parbo . Din din boro ho66i r o ektu ektu kore buro ho66i , r o ektu kore
//         mature ho66i but tomar ka6e ami sarajibon tomar ba66a hoyei thakte chai
//         , tomar ador pete chai , tumi e amar sob pupu Sona 😘❤️😘❤️.....
//         <p className="text-gray-200 text-sm italic text-center mt-8 mb-8">
//           "Dil na mane tere bina kaise kate ye din Adhura sa lagta hai yeh din
//           Tere jaisa koi na pu6ta hain "Hum kaisa hain" Kaise kahun tujhko Tere
//           bin keya hoga mujhko Tuuu hai to sab hain Tere bin hum hi nehi hain I
//           love you my dear pupu Sona 😘❤️😘❤️"
//         </p>
//         This page is only for you. I choose you in every lifetime, every
//         version, every universe.
//       </p>
//     </>
//   );
// }

import { motion } from "framer-motion";

export default function FinalLetter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-neutral-900/70 border border-neutral-700 rounded-2xl p-6 shadow-xl"
    >
      <h2 className="text-white text-3xl font-serif tracking-wide text-center">
        Final Letter
      </h2>

      <p className="text-gray-300 text-sm leading-relaxed">
        Happy valentine's day my one and only valentine 💕❤️, I know it's
        hurting, not to see each other, not to hold hands, not to hug tightly.
        Yah this valentine's week without you give me the saddest part of 2026 ,
        but One day we will celebrate this week 😘😘😁... Joto boli totoi kom
        hoi , tomake peye ami khub valo a6i janoo , tomake 6ara r kono ki6utei
        mon jai na , tumi samne thakle ami khub khub happy thaki r dure gele
        ektu kom holeo happy thaki karon ami jani amar pupu kothao jai ni amake
        6ere , she will always there for me , she is my love, she is the world's
        most prettiest girl to me . Ajj sobai k gorbo kore bolte pari amar bou
        erom serom, amar sosur barir lok ettoo valo , I can feel , they are
        getting jealous 😁. Bole6ilam na j hat ta 6ere deoar jonno dhorini , I
        am always with you baby 🍼❤️😘, tumi just khusi thako , taholei ami sob
        parbo . Din din boro ho66i r o ektu ektu kore buro ho66i , r o ektu kore
        mature ho66i but tomar ka6e ami sarajibon tomar ba66a hoyei thakte chai
        , tomar ador pete chai , tumi e amar sob pupu Sona 😘❤️😘❤️.....
      </p>

      <p className="text-gray-200 text-sm italic text-center mt-8 mb-8">
        "Dil na mane tere bina kaise kate ye din Adhura sa lagta hai yeh din
        Tere jaisa koi na pu6ta hain "Hum kaisa hain" Kaise kahun tujhko Tere
        bin keya hoga mujhko Tuuu hai to sab hain Tere bin hum hi nehi hain I
        love you my dear pupu Sona 😘❤️😘❤️"
      </p>

      <p className="text-gray-300 text-sm text-center">
        This page is only for you. I choose you in every lifetime, every
        version, every universe.
      </p>
    </motion.div>
  );
}
