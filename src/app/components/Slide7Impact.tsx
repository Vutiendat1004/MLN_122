import { NetworkBackground } from "./NetworkBackground";

const subjects = [
  {
    id: "5.1", icon: "🏦", title: "Thị trường",
    positives: ["Thúc đẩy đổi mới, thu hút vốn tư nhân vào lĩnh vực rủi ro cao.", "Rút ngắn chu kỳ phát triển vaccine từ thập kỷ xuống vài tháng."],
    negatives: ["Moderna & Pfizer độc quyền thị trường mRNA toàn cầu nhờ bảo hộ Nhà nước.", "Bằng sáng chế chặn các nước nghèo tự sản xuất vaccine tương đương."],
  },
  {
    id: "5.2", icon: "👷", title: "Người Lao Động",
    positives: ["Tạo hàng nghìn việc làm chất lượng cao trong ngành công nghệ sinh học và dược phẩm.", "Nâng cao năng lực nghiên cứu phát triển và đào tạo nhân lực khoa học kỹ thuật."],
    negatives: ["CEO nhận hàng trăm triệu USD cổ phiếu; công nhân nhà máy ở nước ngoài hưởng lương tối thiểu.", "Áp lực vaccine bắt buộc gây tranh chấp lao động tại nhiều doanh nghiệp."],
  },
  {
    id: "5.3", icon: "🏭", title: "Doanh Nghiệp Nhỏ",
    positives: ["Startup công nghệ sinh học hưởng lợi gián tiếp từ các công nghệ phái sinh mRNA.", "Chuỗi cung ứng y tế mở rộng, tạo cơ hội cho doanh nghiệp nhỏ."],
    negatives: ["DN dược nhỏ không thể cạnh tranh vì thiếu vốn công và quan hệ chính trị.", "Chính sách 'mua trước' chỉ dành cho tập đoàn lớn — phân biệt đối xử thực tế."],
  },
  {
    id: "5.4", icon: "👨‍👩‍👧", title: "Người Tiêu Dùng",
    positives: ["Vaccine miễn phí cho người dân Mỹ, góp phần hồi phục kinh tế-xã hội.", "Công nghệ mRNA mở triển vọng điều trị ung thư, HIV dài hạn."],
    negatives: ["Nước nghèo không mua được vaccine vì giá độc quyền của Moderna.", "Giá tăng từ $15 lên $130/liều (2022–2024) — không ai đàm phán được với Moderna."],
  },
  {
    id: "5.5", icon: "🎓", title: "Sinh Viên",
    positives: ["Cơ hội nghề nghiệp rộng lớn trong công nghệ sinh học, y tế số, khoa học dữ liệu.", "Bài học thực tiễn quý giá về mô hình hợp tác công–tư."],
    negatives: ["Bằng sáng chế khổng lồ chặn sinh viên nghiên cứu ứng dụng mRNA.", "Nợ công tăng do bao cấp tư nhân là gánh nặng dài hạn thế hệ trẻ phải trả."],
  },
];

export function Slide7Impact() {
  return (
    <div className="relative w-full h-full flex flex-col" style={{ background: "#F8F9FA", fontFamily: "'Montserrat', sans-serif" }}>
      <NetworkBackground opacity={0.07} nodeColor="rgba(0,180,216,0.2)" lineColor="0,180,216" />

      {/* Header */}
      <div className="relative z-10 px-10 py-5 flex items-center gap-4" style={{ background: "#0A2540", flexShrink: 0 }}>
        <div className="px-3 py-1 rounded-full text-xs uppercase tracking-widest" style={{ background: "rgba(0,180,216,0.2)", color: "#00B4D8", border: "1px solid rgba(0,180,216,0.4)", fontWeight: 700 }}>
          Phần 5
        </div>
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1rem, 2vw, 1.4rem)", color: "#fff", textTransform: "uppercase" }}>
          Tác Động <span style={{ color: "#00B4D8" }}>Tích Cực</span> & <span style={{ color: "#E63946" }}>Tiêu Cực</span> Của Độc Quyền Nhà Nước
        </h2>
      </div>

      {/* Legend */}
      <div className="relative z-10 flex gap-4 px-6 pt-3 pb-1 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ background: "#2A9D8F" }} />
          <span style={{ color: "#2A9D8F", fontSize: "0.72rem", fontWeight: 700 }}>Tích cực</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ background: "#E63946" }} />
          <span style={{ color: "#E63946", fontSize: "0.72rem", fontWeight: 700 }}>Tiêu cực</span>
        </div>
      </div>

      {/* Cards */}
      <div className="relative z-10 flex-1 overflow-auto px-5 pb-5">
        <div className="grid gap-3 h-full" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
          {subjects.map((s) => (
            <div key={s.id} className="rounded-2xl overflow-hidden flex flex-col" style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}>
              {/* Header */}
              <div className="p-3 text-center flex-shrink-0" style={{ background: "#0A2540" }}>
                <div style={{ fontSize: "1.5rem" }}>{s.icon}</div>
                <div style={{ fontWeight: 800, color: "#fff", fontSize: "0.72rem", marginTop: 3 }}>{s.id}</div>
                <div style={{ fontWeight: 700, color: "#00B4D8", fontSize: "0.68rem", lineHeight: 1.3 }}>{s.title}</div>
              </div>

              {/* Positive */}
              <div className="p-3 flex flex-col gap-2 flex-1" style={{ background: "rgba(42,157,143,0.07)", borderBottom: "2px solid rgba(42,157,143,0.2)" }}>
                <div className="flex items-center gap-1.5">
                  <span style={{ fontSize: "0.75rem" }}>📈</span>
                  <span style={{ fontWeight: 700, color: "#2A9D8F", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Tích cực</span>
                </div>
                {s.positives.map((p, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <span style={{ color: "#2A9D8F", fontSize: "0.65rem", flexShrink: 0, marginTop: 2 }}>✓</span>
                    <span style={{ color: "#334155", fontSize: "0.72rem", lineHeight: 1.5, fontWeight: 400 }}>{p}</span>
                  </div>
                ))}
              </div>

              {/* Negative */}
              <div className="p-3 flex flex-col gap-2 flex-1" style={{ background: "rgba(230,57,70,0.06)" }}>
                <div className="flex items-center gap-1.5">
                  <span style={{ fontSize: "0.75rem" }}>📉</span>
                  <span style={{ fontWeight: 700, color: "#E63946", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Tiêu cực</span>
                </div>
                {s.negatives.map((n, i) => (
                  <div key={i} className="flex items-start gap-1.5">
                    <span style={{ color: "#E63946", fontSize: "0.65rem", flexShrink: 0, marginTop: 2 }}>✗</span>
                    <span style={{ color: "#334155", fontSize: "0.72rem", lineHeight: 1.5, fontWeight: 400 }}>{n}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
