"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        backgroundColor: "#FAF9F6",
        color: "#1F3C88",
        fontFamily: "system-ui, -apple-system, sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "1.5rem", marginBottom: 8 }}>
        Algo no cargó bien
      </h1>
      <p style={{ color: "#6B7280", marginBottom: 24, maxWidth: 320 }}>
        Prueba recargar la página. Si sigue igual, revisa tu conexión.
      </p>
      <button
        type="button"
        onClick={reset}
        style={{
          padding: "12px 24px",
          borderRadius: 12,
          border: "none",
          backgroundColor: "#1F3C88",
          color: "#FAF9F6",
          fontSize: 16,
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        Volver a intentar
      </button>
    </div>
  );
}
