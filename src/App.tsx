// import { useState } from "react";
// import UnlockScreen from "./components/UnlockScreen";
// import ValentineBook from "./components/ValentineBook";
// import MusicPlayer from "./components/MusicPlayer";
// import FloatingHearts from "./components/FloatingHearts";

// function App() {
//   const [unlocked, setUnlocked] = useState(false);

//   return unlocked ? (
//     <>
//       {/* <MusicPlayer /> */}
//       <FloatingHearts />
//       <ValentineBook />
//     </>
//   ) : (
//     <UnlockScreen onUnlock={() => setUnlocked(true)} />
//   );
// }

// export default App;

import { useState } from "react";
import UnlockScreen from "./components/UnlockScreen";
import ValentineBook from "./components/ValentineBook";
import MusicPlayer from "./components/MusicPlayer";
import FloatingHearts from "./components/FloatingHearts";

function App() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <>
      <MusicPlayer unlocked={unlocked} />

      {unlocked ? (
        <>
          <FloatingHearts />
          <ValentineBook />
        </>
      ) : (
        <UnlockScreen onUnlock={() => setUnlocked(true)} />
      )}
    </>
  );
}

export default App;
