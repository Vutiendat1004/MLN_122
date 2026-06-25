import { NetworkBackground } from "./NetworkBackground";

export function Slide2Intro() {
  return (
    <div className="relative w-full h-full flex" style={{ background: "#F8F9FA", fontFamily: "'Montserrat', sans-serif" }}>
      <NetworkBackground opacity={0.07} nodeColor="rgba(0,180,216,0.2)" lineColor="0,180,216" />

      {/* Left Panel */}
      <div
        className="relative z-10 flex flex-col justify-center px-10 py-8 gap-5"
        style={{ width: "55%", background: "rgba(255,255,255,0.88)", backdropFilter: "blur(2px)" }}
      >
        <div
          className="inline-block self-start px-3 py-1 rounded-full text-xs uppercase tracking-widest"
          style={{ background: "#E8F4FD", color: "#0A2540", border: "1px solid #C9E6F7", fontWeight: 700 }}
        >
          Phần 1 · Mở đầu & Đặt vấn đề
        </div>

        <h2
          style={{
            fontWeight: 800,
            fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
            color: "#0A2540",
            lineHeight: 1.2,
          }}
        >
          Nhà Nước & Tư Bản Độc Quyền{" "}
          <span style={{ color: "#00B4D8" }}>Trong Thế Kỷ XXI</span>
        </h2>

        <p style={{ color: "#334155", fontSize: "0.92rem", lineHeight: 1.7, fontWeight: 400 }}>
          Năm 2020, Chính phủ Mỹ rót hàng tỷ USD vào <strong style={{ fontWeight: 700 }}>Moderna Inc.</strong> để phát triển vaccine mRNA, nhưng toàn bộ lợi nhuận lại thuộc về doanh nghiệp tư nhân — một biểu hiện điển hình của <strong style={{ color: "#0A2540", fontWeight: 700 }}>Chủ nghĩa Tư bản Độc quyền Nhà nước</strong> mà Lênin đã dự báo từ thế kỷ XX.
        </p>

        {/* Question Box */}
        <div
          className="rounded-2xl p-5"
          style={{ background: "linear-gradient(135deg, #0A2540 0%, #1D3557 100%)", boxShadow: "0 8px 32px rgba(10,37,64,0.2)" }}
        >
          <div style={{ color: "#00B4D8", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8, fontWeight: 700 }}>
            Câu hỏi nghiên cứu
          </div>
          <p style={{ color: "#fff", fontSize: "0.9rem", lineHeight: 1.65, fontWeight: 500 }}>
            Case Moderna phản ánh <strong style={{ color: "#00B4D8" }}>biểu hiện mới</strong> nào của Độc quyền Nhà nước? Đây là tiến bộ hay <strong style={{ color: "#F4A261" }}>mặt trái của Chủ nghĩa Tư bản</strong> hiện đại?
          </p>
        </div>

        {/* Objectives */}
        <div>
          <div style={{ color: "#0A2540", fontWeight: 800, fontSize: "0.78rem", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Mục tiêu bài thuyết trình
          </div>
          <div className="flex flex-col gap-2.5">
            {[
              "Hệ thống hóa lý luận Lênin về Chủ nghĩa Tư bản Độc quyền Nhà nước",
              "Phân tích case Moderna & chính sách của Nhà nước Mỹ",
              "Đánh giá tác động đa chiều của mô hình Độc quyền Nhà nước",
              "Rút ra bài học cho nhận thức và hành động sinh viên",
            ].map((obj, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white"
                  style={{ background: "#00B4D8", fontSize: "0.7rem", fontWeight: 800 }}
                >
                  {i + 1}
                </div>
                <span style={{ color: "#475569", fontSize: "0.86rem", fontWeight: 500 }}>{obj}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div
        className="relative z-10 flex flex-col justify-center items-center gap-5 px-8 py-8"
        style={{ width: "45%", background: "linear-gradient(160deg, #0A2540 0%, #1D3557 100%)" }}
      >
        <div style={{ color: "#00B4D8", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}>
          Mối quan hệ cốt lõi
        </div>

        <div className="flex flex-col items-center gap-3 w-full max-w-xs">
          {[
            { icon: "🏛️", label: "NHÀ NƯỚC MỸ", sub: "Vốn · Bảo lãnh · Phân phối", color: "#00B4D8", border: "rgba(0,180,216,0.4)", bg: "rgba(0,180,216,0.15)" },
          ].map((b) => (
            <div key={b.label} className="w-full rounded-2xl p-4 text-center" style={{ background: b.bg, border: `2px solid ${b.border}`, backdropFilter: "blur(12px)" }}>
              <div style={{ fontSize: "1.8rem" }}>{b.icon}</div>
              <div style={{ color: b.color, fontWeight: 800, fontSize: "0.95rem", marginTop: 4 }}>{b.label}</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.75rem", marginTop: 2, fontWeight: 500 }}>{b.sub}</div>
            </div>
          ))}

          <div className="flex flex-col items-center gap-1">
            <div style={{ color: "#F4A261", fontSize: "1.4rem" }}>⇅</div>
            <div className="px-4 py-1 rounded-full" style={{ background: "rgba(244,162,97,0.2)", color: "#F4A261", border: "1px solid rgba(244,162,97,0.4)", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.05em" }}>
              XÃ HỘI HÓA RỦI RO
            </div>
          </div>

          <div className="w-full rounded-2xl p-4 text-center" style={{ background: "rgba(42,157,143,0.15)", border: "2px solid rgba(42,157,143,0.4)", backdropFilter: "blur(12px)" }}>
            <div style={{ fontSize: "1.8rem" }}>💊</div>
            <div style={{ color: "#2A9D8F", fontWeight: 800, fontSize: "0.95rem", marginTop: 4 }}>MODERNA INC.</div>
            <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.75rem", marginTop: 2, fontWeight: 500 }}>Lợi nhuận · Bản quyền · Định giá</div>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div style={{ color: "#E63946", fontSize: "1.4rem" }}>↓</div>
            <div className="px-4 py-1 rounded-full" style={{ background: "rgba(230,57,70,0.2)", color: "#E63946", border: "1px solid rgba(230,57,70,0.4)", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.05em" }}>
              TƯ NHÂN HÓA LỢI NHUẬN
            </div>
          </div>

          <div className="w-full rounded-2xl p-4 text-center" style={{ background: "rgba(230,57,70,0.12)", border: "1px solid rgba(230,57,70,0.3)", backdropFilter: "blur(12px)" }}>
            <div style={{ fontSize: "1.8rem" }}>👥</div>
            <div style={{ color: "#E63946", fontWeight: 800, fontSize: "0.95rem", marginTop: 4 }}>XÃ HỘI / NGƯỜI DÂN</div>
            <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.75rem", marginTop: 2, fontWeight: 500 }}>Gánh chi phí · Bất bình đẳng vaccine</div>
          </div>
        </div>
      </div>
    </div>
  );
}
