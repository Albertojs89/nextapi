"use client";

import { useEffect, useState } from "react";
import MovieCard from "../imagenes/MovieCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


//Proximas películas API call
export default function VillanosPage() {
  const [movies, setMovies] = useState({ results: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUpcomingMovies() {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming",
        {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmVjNjg5ZjgxNzI4ZmNhZTk3YjVhMzA3ZmI5MDY1ZiIsIm5iZiI6MTc0ODg5MDkxMC4yNjcsInN1YiI6IjY4M2RmNTFlOTk0ZTgxMjZiZTdiYWQ1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hX6v3Osd5za6V2f6erPhFHxshgkcwhjhPcA1aZpMt38",
          },
          cache: "no-store",
        }
      );

      if (!res.ok) {
        setMovies({ results: [] });
      } else {
        const data = await res.json();
        setMovies(data);
      }
      setLoading(false);
    }

    fetchUpcomingMovies();
  }, []);

  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden bg-gray-900">
      <Header />
      <h2 className="text-3xl font-bold text-white text-center mt-24 mb-8">
        Proximas Películas
      </h2>
      <div className="flex flex-wrap justify-center items-start gap-8 py-12">
        
        {loading ? (
          <p className="text-white">Cargando...</p>
        ) : movies.results.length === 0 ? (
          <p className="text-white">No hay próximas películas.</p>
        ) : (
          movies.results.slice(0, 12).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
      <Footer />
    </div>
  );
}