import { useEffect, useRef } from "react";
import { NetworkBackground } from "./NetworkBackground";

export function Slide1Cover({ onNext }: { onNext: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    for (let i = 0; i < 60; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.18;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 180, 216, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 180, 216, 0.35)";
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A2540 0%, #0d3460 50%, #0A2540 100%)" }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Badge */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-8 text-center max-w-4xl">
        <div
          className="px-4 py-1.5 rounded-full text-xs tracking-widest uppercase"
          style={{
            background: "rgba(0,180,216,0.15)",
            border: "1px solid rgba(0,180,216,0.4)",
            color: "#00B4D8",
            fontFamily: "'Inter', sans-serif",
            letterSpacing: "0.18em",
          }}
        >
          Kinh Tế Chính Trị Mác – Lênin
        </div>

        <div
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.6rem, 3.5vw, 3rem)",
            color: "#ffffff",
            lineHeight: 1.2,
            textTransform: "uppercase",
            letterSpacing: "0.02em",
          }}
        >
          Phân Tích Biểu Hiện Mới Của{" "}
          <span style={{ color: "#00B4D8" }}>Độc Quyền Nhà Nước</span>{" "}
          <br />
          Trong Chủ Nghĩa Tư Bản Độc Quyền Nhà Nước
        </div>

        <div
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.1rem, 2vw, 1.6rem)",
            color: "#00B4D8",
            letterSpacing: "0.05em",
          }}
        >
          CASE STUDY:{" "}
          <span
            style={{
              background: "rgba(0,180,216,0.2)",
              border: "1px solid rgba(0,180,216,0.5)",
              padding: "2px 12px",
              borderRadius: "6px",
            }}
          >
            MODERNA & VACCINE COVID-19
          </span>
        </div>

        <div
          className="mt-2 grid grid-cols-3 gap-4 w-full max-w-2xl"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {[
            { label: "Môn học", value: "Kinh Tế Chính Trị - Triết học Mác Lê Nin" },
            { label: "Năm học", value: "2026" },
            { label: "Nhóm", value: "Nhóm 6" },
          ].map((item) => (
            <div
              key={item.label}
              className="px-3 py-3 rounded-xl text-center"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div style={{ color: "#00B4D8", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {item.label}
              </div>
              <div style={{ color: "#fff", fontSize: "0.9rem", fontWeight: 600, marginTop: 4 }}>{item.value}</div>
            </div>
          ))}
        </div>

        <button
          onClick={onNext}
          className="mt-4 px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(90deg, #00B4D8, #2A9D8F)",
            color: "#fff",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "0.95rem",
            letterSpacing: "0.05em",
            border: "none",
            boxShadow: "0 4px 20px rgba(0,180,216,0.4)",
          }}
        >
          Bắt đầu →
        </button>
      </div>

      {/* Decorative circles */}
      <div
        className="absolute bottom-[-80px] right-[-80px] w-80 h-80 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #00B4D8, transparent)" }}
      />
      <div
        className="absolute top-[-60px] left-[-60px] w-60 h-60 rounded-full opacity-8"
        style={{ background: "radial-gradient(circle, #2A9D8F, transparent)" }}
      />
    </div>
  );
}
