"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const stored = localStorage.getItem("user");
    if (!stored) {
      setError("No existe un usuario registrado.");
      return;
    }
    const user = JSON.parse(stored);
    if (user.email === email && user.password === password) {
      router.push("/");
    } else {
      setError("Email o contraseña incorrectos.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md flex flex-col gap-4 w-80">
        <h2 className="text-2xl font-bold mb-4 text-black text-center">Iniciar sesión</h2>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="border p-2 rounded text-black"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="border p-2 rounded text-black"
        />
        {error && <div className="text-red-600 text-center">{error}</div>}
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Entrar</button>
      </form>
    </div>
  );
}