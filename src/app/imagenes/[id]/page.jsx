// src/app/imagenes/[id]/page.jsx

export default async function DetallePelicula({ params }) {
  // 1️⃣ Obtenemos el ID dinámico de la URL (gracias a [id])
  const { id } = params;

  // 2️⃣ Hacemos fetch a la API de themoviedb para esa película concreta
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmVjNjg5ZjgxNzI4ZmNhZTk3YjVhMzA3ZmI5MDY1ZiIsIm5iZiI6MTc0ODg5MDkxMC4yNjcsInN1YiI6IjY4M2RmNTFlOTk0ZTgxMjZiZTdiYWQ1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hX6v3Osd5za6V2f6erPhFHxshgkcwhjhPcA1aZpMt38'
    },
    cache: 'no-store' // Importante en desarrollo
  });

  if (!res.ok) throw new Error("Error al obtener detalles de la película");

  const movie = await res.json();

  // 3️⃣ Devolvemos la vista con la información
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="w-72 rounded shadow-md mb-4"
      />
      <p className="max-w-xl text-center text-gray-700">{movie.overview}</p>
    </div>
  );
}
