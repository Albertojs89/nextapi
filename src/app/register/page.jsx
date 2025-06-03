"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md flex flex-col gap-4 w-80">
        <h2 className="text-2xl font-bold mb-4 text-black text-center">Registro</h2>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
          className="border p-2 rounded text-black"
        />
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
        <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">Registrarse</button>
      </form>
    </div>
  );
}