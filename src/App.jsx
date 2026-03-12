import { useState } from "react";

const labels = [
  {
    id: "blowhole",
    x: 72,
    y: 18,
    title: "Blowhole",
    desc: "Nostrils that migrated to the top of the skull. Exhales first (the spout), then inhales fast before diving.",
    side: "right",
  },
  {
    id: "lungs",
    x: 54,
    y: 30,
    title: "Lungs",
    desc: "Partially collapsible under pressure. Surprisingly modest in size — the real O₂ storage is in the blood & muscle.",
    side: "right",
  },
  {
    id: "mouth",
    x: 10,
    y: 42,
    title: "Mouth / Baleen",
    desc: "The intake valve. Gulps up to 500 tons of water per lunge. Baleen plates filter out krill. Slop enters here.",
    side: "right",
  },
  {
    id: "stomach",
    x: 44,
    y: 52,
    title: "Multi-chambered Stomach",
    desc: "3–4 chambers for breaking down all that slop. First chamber has no digestive acids — just muscular grinding.",
    side: "right",
  },
  {
    id: "intestines",
    x: 58,
    y: 62,
    title: "Intestines",
    desc: "Can be over 200m long in large whales. Nutrient absorption happens here. A very long tunnel section.",
    side: "left",
  },
  {
    id: "exit",
    x: 80,
    y: 54,
    title: "The Exit",
    desc: "Nutrient-rich waste expelled here. Whale poop fertilizes phytoplankton, which produces ~10% of Earth's oxygen. The slop giveth back.",
    side: "left",
  },
];

export default function WhaleDiagram() {
  const [active, setActive] = useState(null);

  const activeLabel = labels.find((l) => l.id === active);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a1628",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Georgia', serif",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background shimmer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 50% at 50% 60%, #0d2a4a 0%, #0a1628 100%)",
          zIndex: 0,
        }}
      />
      {/* Subtle wave lines */}
      <svg
        style={{ position: "absolute", inset: 0, opacity: 0.07, zIndex: 0 }}
        width="100%"
        height="100%"
      >
        {[...Array(8)].map((_, i) => (
          <path
            key={i}
            d={`M0 ${100 + i * 80} Q 400 ${80 + i * 80} 800 ${100 + i * 80} T 1600 ${100 + i * 80}`}
            fill="none"
            stroke="#4fc3f7"
            strokeWidth="1.5"
          />
        ))}
      </svg>

      <h1
        style={{
          color: "#b3e5fc",
          fontSize: "clamp(1.2rem, 3vw, 2rem)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "0.3rem",
          zIndex: 1,
          textAlign: "center",
          fontWeight: 400,
        }}
      >
        The Slop Tunnel
      </h1>
      <p
        style={{
          color: "#4a7a9b",
          fontSize: "0.85rem",
          letterSpacing: "0.2em",
          marginBottom: "2rem",
          zIndex: 1,
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        A Whale Anatomy Diagram
      </p>

      {/* Diagram container */}
      <div
        style={{
          position: "relative",
          width: "min(820px, 95vw)",
          zIndex: 1,
        }}
      >
        <svg
          viewBox="0 0 900 380"
          style={{ width: "100%", filter: "drop-shadow(0 0 40px #1565c055)" }}
        >
          {/* Whale body */}
          <ellipse cx="430" cy="195" rx="370" ry="115" fill="#0d2f4f" stroke="#1e5f8a" strokeWidth="2" />

          {/* Tail flukes */}
          <path d="M790 160 Q840 120 870 100 Q850 175 830 195 Q850 215 870 290 Q840 270 790 230 Z" fill="#0b2640" stroke="#1e5f8a" strokeWidth="1.5" />

          {/* Head/mouth curve */}
          <path d="M60 195 Q30 160 40 130 Q55 110 80 125 Q70 160 75 195 Q70 230 80 265 Q55 280 40 260 Q30 230 60 195Z" fill="#0b2640" stroke="#1e5f8a" strokeWidth="1.5" />

          {/* Baleen plates suggestion */}
          <path d="M62 162 Q90 155 105 165" stroke="#2980b9" strokeWidth="1" fill="none" strokeDasharray="3,3" opacity="0.6" />
          <path d="M60 175 Q92 168 108 178" stroke="#2980b9" strokeWidth="1" fill="none" strokeDasharray="3,3" opacity="0.6" />
          <path d="M60 188 Q93 181 110 191" stroke="#2980b9" strokeWidth="1" fill="none" strokeDasharray="3,3" opacity="0.6" />
          <path d="M60 201 Q92 196 109 204" stroke="#2980b9" strokeWidth="1" fill="none" strokeDasharray="3,3" opacity="0.6" />
          <path d="M62 214 Q90 210 107 217" stroke="#2980b9" strokeWidth="1" fill="none" strokeDasharray="3,3" opacity="0.6" />

          {/* Eye */}
          <circle cx="105" cy="162" r="7" fill="#1a4a6e" stroke="#4fc3f7" strokeWidth="1.5" />
          <circle cx="106" cy="161" r="3" fill="#b3e5fc" opacity="0.6" />

          {/* Pectoral fin */}
          <path d="M280 275 Q310 340 350 355 Q320 300 340 280Z" fill="#0b2640" stroke="#1e5f8a" strokeWidth="1.5" />

          {/* Blowhole */}
          <ellipse cx="640" cy="95" rx="18" ry="8" fill="#0d2f4f" stroke="#4fc3f7" strokeWidth="2" />
          <path d="M630 90 Q640 70 650 85" stroke="#81d4fa" strokeWidth="1.5" fill="none" opacity="0.7" />
          <path d="M635 87 Q645 65 655 82" stroke="#81d4fa" strokeWidth="1" fill="none" opacity="0.5" />

          {/* Internal organs - stylized */}
          {/* Lungs */}
          <ellipse cx="520" cy="148" rx="55" ry="28" fill="#1a4a6e" stroke="#2980b9" strokeWidth="1.5" opacity="0.85" />
          <ellipse cx="490" cy="148" rx="25" ry="20" fill="#1e5f8a" stroke="#4fc3f7" strokeWidth="1" opacity="0.7" />
          <ellipse cx="548" cy="148" rx="24" ry="20" fill="#1e5f8a" stroke="#4fc3f7" strokeWidth="1" opacity="0.7" />

          {/* Trachea connecting blowhole to lungs */}
          <path d="M640 103 Q640 125 575 140" stroke="#4fc3f7" strokeWidth="2" fill="none" strokeDasharray="4,3" opacity="0.6" />

          {/* Esophagus / slop tube */}
          <path d="M90 195 Q200 190 290 200 Q340 204 380 205" stroke="#2980b9" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.5" />

          {/* Stomach */}
          <ellipse cx="430" cy="210" rx="60" ry="38" fill="#1a4a6e" stroke="#2980b9" strokeWidth="1.5" opacity="0.9" />
          <text x="430" y="214" textAnchor="middle" fill="#7ec8e3" fontSize="10" opacity="0.8">stomach</text>

          {/* Intestines - loopy */}
          <path d="M485 215 Q540 200 570 220 Q600 240 560 255 Q520 268 500 250 Q480 235 520 228 Q555 222 565 238 Q572 252 548 260" stroke="#1e7a9e" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.7" />

          {/* Dot indicators */}
          {labels.map((l) => (
            <g key={l.id} onClick={() => setActive(active === l.id ? null : l.id)} style={{ cursor: "pointer" }}>
              <circle
                cx={`${l.x}%`}
                cy={`${l.y}%`}
                r="10"
                fill={active === l.id ? "#4fc3f7" : "#1e5f8a"}
                stroke={active === l.id ? "#b3e5fc" : "#4fc3f7"}
                strokeWidth="2"
                style={{ transition: "all 0.2s" }}
              />
              <circle
                cx={`${l.x}%`}
                cy={`${l.y}%`}
                r="4"
                fill={active === l.id ? "#0a1628" : "#81d4fa"}
                style={{ transition: "all 0.2s" }}
              />
            </g>
          ))}
        </svg>

        {/* Legend */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          {labels.map((l) => (
            <button
              key={l.id}
              onClick={() => setActive(active === l.id ? null : l.id)}
              style={{
                background: active === l.id ? "#1e5f8a" : "transparent",
                border: `1px solid ${active === l.id ? "#4fc3f7" : "#1e5f8a"}`,
                color: active === l.id ? "#b3e5fc" : "#4a8fad",
                padding: "0.3rem 0.8rem",
                borderRadius: "2px",
                cursor: "pointer",
                fontSize: "0.78rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "all 0.2s",
              }}
            >
              {l.title}
            </button>
          ))}
        </div>

        {/* Info panel */}
        <div
          style={{
            minHeight: "4rem",
            marginTop: "1rem",
            padding: "1rem 1.5rem",
            background: "#0d2035",
            border: "1px solid #1e5f8a",
            borderRadius: "2px",
            color: "#b3e5fc",
            fontSize: "0.9rem",
            lineHeight: 1.6,
            transition: "all 0.3s",
            opacity: activeLabel ? 1 : 0.4,
          }}
        >
          {activeLabel ? (
            <>
              <span style={{ color: "#4fc3f7", fontWeight: "bold", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.8rem" }}>
                {activeLabel.title}
              </span>
              <p style={{ margin: "0.3rem 0 0" }}>{activeLabel.desc}</p>
            </>
          ) : (
            <span style={{ color: "#2a5f7a", fontStyle: "italic" }}>
              Click a label to learn about each part of the slop tunnel
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
