import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <span className="text-4xl text-sky-100 font-bold">{count}</span>
      <div className="flex gap-2">
        <button
          className="px-4 py-2 bg-sky-500/10 rounded-md text-sky-100 font-bold hover:bg-sky-400/20 transition duration-150 ease-out"
          onClick={() => setCount((prev) => prev - 1)}
        >
          -
        </button>
        <button
          className="px-4 py-2 bg-sky-500/10 rounded-md text-sky-100  font-bold hover:bg-sky-400/20 transition duration-150 ease-out"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
