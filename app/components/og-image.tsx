import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const ogSize = { width: 1200, height: 630 };

export async function renderOgImage(title: string, subtitle: string) {
  const font = await readFile(
    path.join(
      process.cwd(),
      "node_modules/geist/dist/fonts/geist-sans/Geist-SemiBold.ttf"
    )
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            width: 72,
            height: 6,
            borderRadius: 3,
            background: "#f6ad55",
            marginBottom: 40,
          }}
        />
        <div style={{ fontSize: 68, lineHeight: 1.15, letterSpacing: -2 }}>
          {title}
        </div>
        <div style={{ fontSize: 30, color: "#a3a3a3", marginTop: 32 }}>
          {subtitle}
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [{ name: "Geist", data: font, weight: 600, style: "normal" }],
    }
  );
}
