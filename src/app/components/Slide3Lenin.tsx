import { NetworkBackground } from "./NetworkBackground";

const features = [
  {
    icon: "👔",
    title: "Sự kết hợp về nhân sự giữa tổ chức độc quyền và nhà nước",
    color: "#00B4D8",
    bg: "rgba(0,180,216,0.08)",
    border: "rgba(0,180,216,0.25)",
    points: [
      "Có sự gắn bó giữa giới tư bản lớn và bộ máy nhà nước.",
      "Nhân sự có thể luân chuyển giữa chính phủ và các tập đoàn, ngân hàng lớn.",
      "Nhà nước và tư bản độc quyền hỗ trợ, bảo vệ lợi ích cho nhau.",
    ],
  },
  {
    icon: "🏗️",
    title: "Sự hình thành và phát triển sở hữu nhà nước",
    color: "#2A9D8F",
    bg: "rgba(42,157,143,0.08)",
    border: "rgba(42,157,143,0.25)",
    points: [
      "Nhà nước mở rộng vai trò trong các lĩnh vực quan trọng: y tế, giáo dục, giao thông, hạ tầng, công nghiệp then chốt.",
      "Sở hữu nhà nước trong chủ nghĩa tư bản không hoàn toàn trung lập.",
      "Thường hỗ trợ các tập đoàn lớn qua đầu tư, đặt hàng, bao mua sản phẩm.",
      "Sở hữu nhà nước trở thành công cụ hỗ trợ tư bản độc quyền phát triển.",
    ],
  },
  {
    icon: "⚙️",
    title: "Độc quyền nhà nước trở thành công cụ điều tiết nền kinh tế",
    color: "#F4A261",
    bg: "rgba(244,162,97,0.08)",
    border: "rgba(244,162,97,0.25)",
    points: [
      "Nhà nước dùng nhiều công cụ: ngân sách, thuế, tiền tệ–tín dụng, doanh nghiệp nhà nước, luật pháp–chính sách, chương trình phát triển kinh tế.",
      "Mục đích: hỗ trợ doanh nghiệp lớn, xử lý khủng hoảng, định hướng ngành chiến lược.",
    ],
  },
];

export function Slide3Lenin() {
  return (
    <div className="relative w-full h-full flex flex-col" style={{ background: "#F8F9FA", fontFamily: "'Montserrat', sans-serif" }}>
      <NetworkBackground opacity={0.07} nodeColor="rgba(0,180,216,0.2)" lineColor="0,180,216" />

      {/* Header */}
      <div className="relative z-10 px-10 py-5 flex items-center gap-4" style={{ background: "#0A2540", flexShrink: 0 }}>
        <div className="px-3 py-1 rounded-full text-xs uppercase tracking-widest" style={{ background: "rgba(0,180,216,0.2)", color: "#00B4D8", border: "1px solid rgba(0,180,216,0.4)", fontWeight: 700 }}>
          Phần 2
        </div>
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1rem, 2vw, 1.4rem)", color: "#fff", textTransform: "uppercase", letterSpacing: "0.04em" }}>
          Lý Luận Của V.I. Lênin Về{" "}
          <span style={{ color: "#00B4D8" }}>Độc Quyền Nhà Nước</span>
        </h2>
      </div>

      {/* Body */}
      <div className="relative z-10 flex-1 min-h-0 px-8 py-3 flex flex-col gap-3 overflow-y-auto">
        <div className="flex flex-col gap-1.5 flex-shrink-0">
          <div style={{ fontWeight: 800, fontSize: "0.88rem", color: "#0A2540" }}>
            Tóm tắt lý luận của V.I. Lênin về độc quyền nhà nước trong chủ nghĩa tư bản
          </div>
          {[
            "Khi chủ nghĩa tư bản phát triển đến giai đoạn độc quyền, các tập đoàn lớn nắm sức mạnh kinh tế rất lớn.",
            "Nhà nước tư sản ngày càng can thiệp sâu và kết hợp với tư bản độc quyền.",
            "Độc quyền nhà nước là hình thức nhà nước sử dụng quyền lực để phục vụ lợi ích của tư bản độc quyền.",
          ].map((pt, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: "#00B4D8" }} />
              <span style={{ color: "#475569", fontSize: "0.85rem", lineHeight: 1.6, fontWeight: 500 }}>{pt}</span>
            </div>
          ))}
          <p style={{ color: "#475569", fontSize: "0.85rem", lineHeight: 1.6, fontWeight: 500, marginTop: 4 }}>
            Độc quyền nhà nước có <strong style={{ fontWeight: 800, color: "#0A2540" }}>ba đặc điểm kinh tế chủ yếu</strong> sau:
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-3 gap-3 flex-shrink-0">
          {features.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl p-4 flex flex-col gap-2"
              style={{ background: "rgba(255,255,255,0.88)", backdropFilter: "blur(12px)", border: `1.5px solid ${f.border}`, boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}
            >
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: f.bg, border: `1px solid ${f.border}` }}>
                  {f.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "0.78rem", color: "#0A2540", lineHeight: 1.35 }}>{f.title}</div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {f.points.map((pt, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: f.color }} />
                    <span style={{ color: "#1E293B", fontSize: "0.78rem", lineHeight: 1.55, fontWeight: 600 }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Blockquote */}
        <div
          className="relative rounded-2xl px-6 py-4 flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #0A2540 0%, #1D3557 100%)", boxShadow: "0 8px 32px rgba(10,37,64,0.25)" }}
        >
          <div className="absolute left-3 top-0 pointer-events-none" style={{ fontSize: "3.5rem", color: "rgba(0,180,216,0.15)", fontFamily: "Georgia, serif", lineHeight: 1 }}>"</div>
          <div className="relative z-10 pl-6">
            <p style={{ color: "#fff", fontSize: "0.85rem", lineHeight: 1.65, fontStyle: "italic", fontWeight: 400 }}>
              Hôm nay là bộ trưởng – ngày mai là chủ ngân hàng; hôm nay là chủ ngân hàng – ngày mai là bộ trưởng. Chính sách Nhà nước ngày càng trực tiếp phục vụ lợi ích của một nhóm nhỏ tư bản tài chính độc quyền lớn nhất.
            </p>
            <div style={{ color: "#90E0EF", fontSize: "0.8rem", fontWeight: 700, marginTop: 12, lineHeight: 1.5 }}>
              — V.I. Lênin, <em>Chủ nghĩa Đế quốc, giai đoạn tột cùng của Chủ nghĩa Tư bản</em> (1916)
            </div>
          </div>
        </div>

        {/* 4 key thesis */}
        <div className="grid grid-cols-4 gap-2 flex-shrink-0 pb-2">
          {[
            { icon: "📈", label: "Chủ nghĩa Tư bản độc quyền phát triển thành Chủ nghĩa Tư bản Độc quyền Nhà nước", color: "#00B4D8" },
            { icon: "🔄", label: "Nhà nước can thiệp vì lợi ích tư bản", color: "#2A9D8F" },
            { icon: "💰", label: "Lợi nhuận siêu ngạch được bảo đảm", color: "#F4A261" },
            { icon: "⚠️", label: "Mâu thuẫn xã hội ngày càng gay gắt", color: "#E63946" },
          ].map((item, i) => (
            <div key={i} className="rounded-xl p-2.5 flex flex-col items-center text-center gap-1.5" style={{ background: "#fff", border: `1px solid ${item.color}30`, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
              <div style={{ fontSize: "1.2rem" }}>{item.icon}</div>
              <div style={{ color: "#334155", fontSize: "0.68rem", lineHeight: 1.35, fontWeight: 600 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
