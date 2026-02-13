import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #1F3C88 0%, #5DA9E9 100%)",
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FAF9F6",
          fontSize: 16,
          fontFamily: "serif",
          fontWeight: 600,
        }}
      >
        S&amp;L
      </div>
    ),
    { ...size }
  );
}
