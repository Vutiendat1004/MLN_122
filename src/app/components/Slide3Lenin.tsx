import { NetworkBackground } from "./NetworkBackground";

const features = [
  {
    icon: "👔",
    title: "Dung hợp Nhân sự",
    subtitle: "Personnel Fusion",
    color: "#00B4D8",
    bg: "rgba(0,180,216,0.08)",
    border: "rgba(0,180,216,0.25)",
    points: [
      "Quan chức Nhà nước và lãnh đạo tập đoàn luân chuyển qua lại — tạo ra 'cửa xoay' (revolving door) chính sách.",
      "Cựu quan chức Bộ Y tế Mỹ (HHS), NIH tham gia hội đồng quản trị Moderna, hình thành mạng lưới vận động hành lang.",
    ],
  },
  {
    icon: "🏗️",
    title: "Dung hợp Sở hữu",
    subtitle: "Ownership Fusion",
    color: "#2A9D8F",
    bg: "rgba(42,157,143,0.08)",
    border: "rgba(42,157,143,0.25)",
    points: [
      "Nhà nước đầu tư ~$2,5 tỷ USD qua BARDA nhưng không nắm giữ cổ phần hay bằng sáng chế của Moderna.",
      "Đầu tư công → lợi ích tư nhân, không có cơ chế hoàn trả cho ngân khố quốc gia.",
    ],
  },
  {
    icon: "⚙️",
    title: "Dung hợp Điều tiết",
    subtitle: "Regulatory Fusion",
    color: "#F4A261",
    bg: "rgba(244,162,97,0.08)",
    border: "rgba(244,162,97,0.25)",
    points: [
      "Nhà nước ban hành luật có lợi cho tư bản độc quyền: Đạo luật PREP miễn trừ trách nhiệm pháp lý, cấp phép khẩn cấp ưu tiên phê duyệt.",
      "Cục Quản lý Thực phẩm và Dược phẩm (FDA) chịu áp lực chính trị về tốc độ phê duyệt — ranh giới 'quản lý' và 'bảo hộ' bị xóa mờ.",
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
      <div className="relative z-10 flex-1 px-8 py-5 flex flex-col gap-5 overflow-auto">
        <p style={{ color: "#475569", fontSize: "0.88rem", lineHeight: 1.65, fontWeight: 500 }}>
          Trong tác phẩm <em>"Chủ nghĩa Đế quốc – giai đoạn tột cùng của Chủ nghĩa Tư bản"</em> (1916), Lênin chỉ rõ Chủ nghĩa Tư bản Độc quyền Nhà nước hình thành khi tư bản độc quyền gắn liền với bộ máy Nhà nước, biểu hiện qua <strong style={{ fontWeight: 800, color: "#0A2540" }}>ba sự dung hợp</strong> sau:
        </p>

        {/* 3 Cards */}
        <div className="grid grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 flex flex-col gap-3"
              style={{ background: "rgba(255,255,255,0.88)", backdropFilter: "blur(12px)", border: `1.5px solid ${f.border}`, boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: f.bg, border: `1px solid ${f.border}` }}>
                  {f.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "0.88rem", color: "#0A2540" }}>{f.title}</div>
                  <div style={{ color: f.color, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.04em" }}>{f.subtitle}</div>
                </div>
              </div>
              <div className="flex flex-col gap-2.5">
                {f.points.map((pt, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: f.color }} />
                    <span style={{ color: "#334155", fontSize: "0.82rem", lineHeight: 1.6, fontWeight: 400 }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Blockquote */}
        <div
          className="relative rounded-2xl px-8 py-5 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0A2540 0%, #1D3557 100%)", boxShadow: "0 8px 32px rgba(10,37,64,0.25)" }}
        >
          <div className="absolute left-4 top-1" style={{ fontSize: "5rem", color: "rgba(0,180,216,0.15)", fontFamily: "Georgia, serif", lineHeight: 1 }}>"</div>
          <div className="relative z-10 pl-8">
            <p style={{ color: "#fff", fontSize: "0.92rem", lineHeight: 1.75, fontStyle: "italic", fontWeight: 400 }}>
              Hôm nay là bộ trưởng – ngày mai là chủ ngân hàng; hôm nay là chủ ngân hàng – ngày mai là bộ trưởng. Chính sách Nhà nước ngày càng trực tiếp phục vụ lợi ích của một nhóm nhỏ tư bản tài chính độc quyền lớn nhất.
            </p>
            <div style={{ color: "#00B4D8", fontSize: "0.78rem", fontWeight: 700, marginTop: 10 }}>
              — V.I. Lênin, <em>Chủ nghĩa Đế quốc, giai đoạn tột cùng của Chủ nghĩa Tư bản</em> (1916)
            </div>
          </div>
        </div>

        {/* 4 key thesis */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { icon: "📈", label: "Chủ nghĩa Tư bản độc quyền phát triển thành Chủ nghĩa Tư bản Độc quyền Nhà nước", color: "#00B4D8" },
            { icon: "🔄", label: "Nhà nước can thiệp vì lợi ích tư bản", color: "#2A9D8F" },
            { icon: "💰", label: "Lợi nhuận siêu ngạch được bảo đảm", color: "#F4A261" },
            { icon: "⚠️", label: "Mâu thuẫn xã hội ngày càng gay gắt", color: "#E63946" },
          ].map((item, i) => (
            <div key={i} className="rounded-xl p-3 flex flex-col items-center text-center gap-2" style={{ background: "#fff", border: `1px solid ${item.color}30`, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
              <div style={{ fontSize: "1.4rem" }}>{item.icon}</div>
              <div style={{ color: "#334155", fontSize: "0.74rem", lineHeight: 1.4, fontWeight: 600 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
