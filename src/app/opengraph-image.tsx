import { ImageResponse } from "next/og";

export const alt = "Ear Piercing Chart interactive placement guide";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const placements = [
  { left: 760, top: 150, color: "#79c0ac" },
  { left: 815, top: 220, color: "#e58a6b" },
  { left: 740, top: 330, color: "#c8a6ec" },
  { left: 650, top: 430, color: "#f6da9f" },
];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #100c0d 0%, #201516 54%, #0f0b0c 100%)",
          color: "#f6ece3",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 760,
            height: 760,
            borderRadius: 760,
            background: "rgba(231, 189, 128, 0.12)",
            right: -210,
            top: -170,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 620,
            paddingLeft: 76,
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#e7bd80",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              marginBottom: 26,
            }}
          >
            Interactive guide
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 78,
              lineHeight: 0.94,
              fontWeight: 700,
              letterSpacing: -2,
              marginBottom: 28,
            }}
          >
            Ear Piercing Chart
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              lineHeight: 1.35,
              color: "#c2afa2",
              maxWidth: 540,
            }}
          >
            Compare placement, pain, healing time, jewelry, and anatomy fit before opening a guide.
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            right: 115,
            top: 80,
            width: 440,
            height: 500,
            borderRadius: "48% 48% 52% 50%",
            border: "28px solid #e7bd80",
            borderLeftColor: "rgba(231, 189, 128, 0.18)",
            transform: "rotate(-7deg)",
            boxShadow: "0 38px 90px rgba(0, 0, 0, 0.45)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 190,
            top: 150,
            width: 245,
            height: 330,
            borderRadius: "50%",
            border: "20px solid #f6da9f",
            borderLeftColor: "transparent",
            transform: "rotate(-10deg)",
          }}
        />
        {placements.map((placement) => (
          <div
            key={`${placement.left}-${placement.top}`}
            style={{
              position: "absolute",
              left: placement.left,
              top: placement.top,
              width: 34,
              height: 34,
              borderRadius: 34,
              background: placement.color,
              border: "5px solid #100c0d",
              boxShadow: `0 0 0 10px rgba(246, 218, 159, 0.18), 0 0 32px ${placement.color}`,
            }}
          />
        ))}
      </div>
    ),
    size,
  );
}
