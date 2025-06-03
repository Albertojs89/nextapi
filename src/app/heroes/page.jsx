import MovieCard from "../imagenes/MovieCard";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

async function getTrendingMovies() {
  const res = await fetch('https://api.themoviedb.org/3/trending/movie/day', {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmVjNjg5ZjgxNzI4ZmNhZTk3YjVhMzA3ZmI5MDY1ZiIsIm5iZiI6MTc0ODg5MDkxMC4yNjcsInN1YiI6IjY4M2RmNTFlOTk0ZTgxMjZiZTdiYWQ1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hX6v3Osd5za6V2f6erPhFHxshgkcwhjhPcA1aZpMt38'
    },
    cache: 'no-store'
  });

  if (!res.ok) throw new Error("Error al obtener películas en tendencia");

  return res.json();
}

export default async function HeroesPage() {
  const movies = await getTrendingMovies();

  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden bg-gray-900">
      <Header />
      <div className="flex flex-wrap justify-center items-start gap-8 py-12">
        {movies.results.slice(0, 12).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      <Footer />
    </div>
  );
}