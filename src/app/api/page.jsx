"use client";

import { useEffect, useState } from "react";

async function getPopularMovies() {
  const res = await fetch('https://api.themoviedb.org/3/movie/popular', {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOGRkYWU5MjMzYTNmNWU1ZDcxMzdjNzg1NDc0MGU4OCIsIm5iZiI6MTc0ODg5MDkwOC41MzYsInN1YiI6IjY4M2RmNTFjOGQ3YmQzNGM0ODUzODYzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NjHUra7w07NeGmz0FZvym9L9czvnfV3sZV9X1jKYloI'
    },
    cache: 'no-store' // para no cachear en desarrollo
  });

  if (!res.ok) throw new Error("Error al obtener películas");

  return res.json();
}

export default async function ApiPage() {
  const movie = await getPopularMovies();

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movie.results.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
