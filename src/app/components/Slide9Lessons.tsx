import { NetworkBackground } from "./NetworkBackground";

const steps = [
  {
    icon: "📚", color: "#00B4D8", level: "Bước 1 · Nhận thức", title: "Hiểu bản chất Chủ nghĩa Tư bản Độc quyền Nhà nước",
    items: [
      "'Thị trường tự do' là huyền thoại — tư bản hiện đại luôn cần Nhà nước để tồn tại.",
      "Bằng sáng chế và sở hữu trí tuệ là công cụ pháp lý của độc quyền, không phải 'tài sản tự nhiên'.",
      "Lý luận Mác–Lênin không lỗi thời — các biểu hiện mới của Độc quyền Nhà nước xác nhận tính đúng đắn của nó.",
    ],
  },
  {
    icon: "🔍", color: "#2A9D8F", level: "Bước 2 · Phân tích", title: "Tư duy phản biện kinh tế",
    items: [
      "Luôn đặt câu hỏi: Ai được lợi? Ai chịu thiệt? Tiền từ đâu? Quyền lực đứng sau là ai?",
      "Dùng phương pháp luận Mác-xít: phân tích quan hệ sản xuất và quan hệ giai cấp đằng sau bề mặt kinh tế.",
      "So sánh mô hình: Mỹ, EU, Trung Quốc, Việt Nam xử lý quan hệ Nhà nước–tư bản như thế nào?",
    ],
  },
  {
    icon: "🎯", color: "#F4A261", level: "Bước 3 · Hành động", title: "Định hướng nghề nghiệp có trách nhiệm",
    items: [
      "Sinh viên kinh tế–chính trị: nghiên cứu chính sách công nghiệp, y tế và quyền sở hữu trí tuệ toàn cầu.",
      "Sinh viên Khoa học - Công nghệ - Kỹ thuật: hiểu rằng nghiên cứu cơ bản cần đầu tư công — không chỉ phụ thuộc vào tư nhân.",
      "Dù làm cho tư nhân hay Nhà nước, luôn đặt lợi ích công cộng và công bằng xã hội lên hàng đầu.",
    ],
  },
];

export function Slide9Lessons() {
  return (
    <div className="relative w-full h-full flex flex-col" style={{ background: "#F8F9FA", fontFamily: "'Montserrat', sans-serif" }}>
      <NetworkBackground opacity={0.07} nodeColor="rgba(0,180,216,0.2)" lineColor="0,180,216" />

      {/* Header */}
      <div className="relative z-10 px-10 py-5 flex items-center gap-4" style={{ background: "#0A2540", flexShrink: 0 }}>
        <div className="px-3 py-1 rounded-full text-xs uppercase tracking-widest" style={{ background: "rgba(0,180,216,0.2)", color: "#00B4D8", border: "1px solid rgba(0,180,216,0.4)", fontWeight: 700 }}>
          Phần 6 & 7
        </div>
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1rem, 2vw, 1.4rem)", color: "#fff", textTransform: "uppercase" }}>
          Bài Học Nhận Thức & <span style={{ color: "#00B4D8" }}>Định Hướng Sinh Viên</span>
        </h2>
      </div>

      <div className="relative z-10 flex-1 px-8 py-5 flex flex-col gap-4 overflow-auto">
        {/* Flow indicator */}
        <div className="flex items-center justify-center gap-3">
          {[{ label: "Tư Duy", color: "#0A2540" }, { label: "Phân Tích", color: "#00B4D8" }, { label: "Hành Động", color: "#2A9D8F" }].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="px-4 py-2 rounded-full text-sm text-white" style={{ background: item.color, fontWeight: 700 }}>{item.label}</div>
              {i < 2 && <div style={{ color: "#CBD5E1", fontSize: "1.2rem", fontWeight: 300 }}>→</div>}
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-3 flex-1">
          {steps.map((step, i) => (
            <div key={i} className="rounded-2xl overflow-hidden flex" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.07)", flex: 1 }}>
              <div className="flex flex-col items-center justify-center px-4 py-4 gap-2 flex-shrink-0" style={{ background: step.color, minWidth: 80 }}>
                <div style={{ fontSize: "1.6rem" }}>{step.icon}</div>
                <div style={{ fontWeight: 800, color: "#fff", fontSize: "0.58rem", textTransform: "uppercase", letterSpacing: "0.07em", textAlign: "center", lineHeight: 1.4 }}>{step.level}</div>
              </div>
              <div className="flex-1 p-4" style={{ background: "#fff" }}>
                <div style={{ fontWeight: 800, color: "#0A2540", fontSize: "0.92rem", marginBottom: 10 }}>{step.title}</div>
                <div className="grid grid-cols-3 gap-x-5 gap-y-2">
                  {step.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: step.color }}>
                        <span style={{ color: "#fff", fontSize: "0.6rem", fontWeight: 800 }}>✓</span>
                      </div>
                      <span style={{ color: "#475569", fontSize: "0.8rem", lineHeight: 1.55, fontWeight: 400 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom insight */}
        <div className="rounded-2xl p-4 flex items-start gap-3" style={{ background: "linear-gradient(135deg, rgba(0,180,216,0.1), rgba(42,157,143,0.1))", border: "1.5px solid rgba(0,180,216,0.25)" }}>
          <div style={{ fontSize: "1.6rem", flexShrink: 0 }}>💡</div>
          <p style={{ color: "#334155", fontSize: "0.83rem", lineHeight: 1.65, fontWeight: 400 }}>
            Case Moderna là bài học về <strong style={{ fontWeight: 800, color: "#00B4D8" }}>quyền lực kinh tế chính trị</strong> — ai nắm kết quả đổi mới và ai gánh chi phí xã hội. Tư duy Mác–Lênin vận dụng sáng tạo, không giáo điều, vẫn là <strong style={{ fontWeight: 800, color: "#0A2540" }}>công cụ phân tích sắc bén nhất</strong> để hiểu thế giới ngày nay.
          </p>
        </div>
      </div>
    </div>
  );
}
