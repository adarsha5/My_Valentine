import { useState } from "react";
import ChapterOne from "../chapters/ChapterOne";
import Timeline from "../chapters/Timeline";
import FinalLetter from "../chapters/FinalLetter";

const chapters = [<ChapterOne />, <Timeline />, <FinalLetter />];

export default function ValentineBook() {
  const [page, setPage] = useState(0);

  return (
    <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-neutral-900 rounded-2xl p-6 shadow-2xl m-4 mt-10 mb-10">
        {/* Render Chapter */}
        {chapters[page]}

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          {page > 0 && (
            <button
              onClick={() => setPage(page - 1)}
              className="text-white border px-4 py-2 rounded-full"
            >
              ◀ Prev
            </button>
          )}

          {page < chapters.length - 1 && (
            <button
              onClick={() => setPage(page + 1)}
              className="ml-auto text-white border px-4 py-2 rounded-full"
            >
              Next ▶
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
