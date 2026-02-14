import { useState } from "react";

export default function UnlockScreen({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-6">
      <h1 className="text-3xl mb-4 font-serif">For My Love 💖</h1>

      <p className="text-gray-400 mb-6 text-center">
        Enter the secret word only you know
      </p>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="bg-transparent border border-white px-4 py-2 rounded-full text-center mb-4"
      />

      <button
        onClick={() => password === "pupu" && onUnlock()}
        className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
      >
        Unlock ❤️
      </button>
    </div>
  );
}
