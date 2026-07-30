

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {

    const router = useRouter();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
async function handleLogin() {
  setLoading(true);

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  setLoading(false);

  if (error) {
    alert(error.message);
    return;
  }

  router.push("/admin");
}
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8f4ef",
      }}
    >
      <div
        style={{
          width: "420px",
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 15px 40px rgba(0,0,0,.1)",
        }}
      >
        <h1
          style={{
            margin: 0,
            color: "#42182f",
            textAlign: "center",
          }}
        >
          Panel de Administración
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#9b7a3b",
            marginTop: "10px",
            marginBottom: "30px",
          }}
        >
          Inicia sesión para administrar las invitaciones
        </p>

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "15px",
            border: "1px solid #d9c2a0",
            borderRadius: "10px",
            fontSize: "16px",
            color: "#42182f",
            background: "white",
            boxSizing: "border-box",
          }}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
            onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "20px",
            border: "1px solid #d9c2a0",
            borderRadius: "10px",
            fontSize: "16px",
            color: "#42182f",
            background: "white",
            boxSizing: "border-box",
          }}
        />

        <button
            onClick={handleLogin}
          style={{
            width: "100%",
            padding: "14px",
            background: "#42182f",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </div>
    </main>
  );
}