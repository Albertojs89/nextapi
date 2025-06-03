"use client";
import { useState } from "react";

export default function MovieCard({ movie }) {
  const [count, setCount] = useState(0);
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-72 h-96"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Cara frontal */}
        <div
          className="absolute w-full h-full bg-white rounded-lg shadow-lg flex flex-col items-center p-4 cursor-pointer"
          style={{
            backfaceVisibility: "hidden",
          }}
          onClick={() => setCount(count + 1)}
        >
          <div className="absolute top-2 right-2 bg-blue-600 text-white rounded-full px-3 py-1 text-xs font-bold">
            {count}
          </div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-80 object-cover rounded-md"
          />
          <h2 className="text-lg font-bold mt-4 text-black text-center">{movie.title}</h2>
        </div>
        {/* Cara trasera */}
        <div
          className="absolute w-full h-full bg-white rounded-lg shadow-lg flex flex-col items-center justify-center p-4 cursor-pointer"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          onClick={() => setCount(count + 1)}
        >
          <div className="absolute top-2 right-2 bg-blue-600 text-white rounded-full px-3 py-1 text-xs font-bold">
            {count}
          </div>
          <h2 className="text-lg font-bold mb-2 text-black text-center">{movie.title}</h2>
          <p className="text-gray-700 text-center">{movie.overview || "Sin descripción."}</p>
        </div>
      </div>
    </div>
  );
}