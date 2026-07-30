"use client";

export default function LoginPage() {
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
          width: "400px",
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 15px 40px rgba(0,0,0,.1)",
        }}
      >
        <h1>Iniciar sesión</h1>

        <input
          type="email"
          placeholder="Correo"
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "20px",
            marginBottom: "15px",
          }}
        />

        <input
          type="password"
          placeholder="Contraseña"
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "20px",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "14px",
            background: "#42182f",
            color: "white",
            border: "none",
            borderRadius: "10px",
          }}
        >
          Entrar
        </button>
      </div>
    </main>
  );
}