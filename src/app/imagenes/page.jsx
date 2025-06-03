// src/app/imagenes/page.jsx

import Link from "next/link";
import MovieCard from "./MovieCard";

async function getPopularMovies() {
  const res = await fetch('https://api.themoviedb.org/3/movie/popular', {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmVjNjg5ZjgxNzI4ZmNhZTk3YjVhMzA3ZmI5MDY1ZiIsIm5iZiI6MTc0ODg5MDkxMC4yNjcsInN1YiI6IjY4M2RmNTFlOTk0ZTgxMjZiZTdiYWQ1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hX6v3Osd5za6V2f6erPhFHxshgkcwhjhPcA1aZpMt38'
    },
    cache: 'no-store'
  });

  if (!res.ok) throw new Error("Error al obtener películas");

  return res.json();
}

export default async function Home() {
  const movie = await getPopularMovies();

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen gap-8">
      {movie.results.slice(0, 6).map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
