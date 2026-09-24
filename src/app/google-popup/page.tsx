"use client";

export default function GooglePopup() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f2f5",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "40px 36px",
          borderRadius: 8,
          boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
          width: "100%",
          maxWidth: 400,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 24, fontWeight: 500, marginBottom: 16 }}>
          <span style={{ color: "#4285F4" }}>G</span>
          <span style={{ color: "#EA4335" }}>o</span>
          <span style={{ color: "#FBBC05" }}>o</span>
          <span style={{ color: "#4285F4" }}>g</span>
          <span style={{ color: "#34A853" }}>l</span>
          <span style={{ color: "#EA4335" }}>e</span>
        </div>
        <h1 style={{ fontSize: 24, fontWeight: 400, margin: "0 0 8px" }}>
          Login (Lokal Mock)
        </h1>
        <p style={{ fontSize: 16, margin: "0 0 32px", color: "#202124" }}>
          Gunakan Akun Google Anda
        </p>
        <input
          type="email"
          placeholder="Email atau nomor telepon"
          style={{
            width: "100%",
            padding: "13px 15px",
            margin: "0 0 32px",
            border: "1px solid #dadce0",
            borderRadius: 4,
            fontSize: 16,
            boxSizing: "border-box",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <a
            href="#"
            style={{
              color: "#1a73e8",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: 14,
            }}
          >
            Buat akun
          </a>
          <button
            onClick={() => window.close()}
            style={{
              backgroundColor: "#1a73e8",
              color: "white",
              border: "none",
              borderRadius: 4,
              padding: "8px 24px",
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
}