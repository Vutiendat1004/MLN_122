import { NetworkBackground } from "./NetworkBackground";

const cells = [
  {
    icon: "🔬", num: "4.1", title: "Nghiên cứu từ Nguồn lực Công", sub: "Public Research Infrastructure",
    color: "#00B4D8", border: "rgba(0,180,216,0.25)", span: 2,
    body: "Viện Y tế Quốc gia (NIH) tài trợ nhiều thập kỷ cho nghiên cứu mRNA, bao gồm phát minh protein Spike ổn định hóa — xương sống của vaccine Moderna. Bằng sáng chế do Moderna đăng ký, không phải Chính phủ.",
    badge: null,
  },
  {
    icon: "🛡️", num: "4.2", title: "Bảo lãnh Rủi ro Lâm sàng", sub: "Risk Socialization",
    color: "#2A9D8F", border: "rgba(42,157,143,0.25)", span: 1,
    body: "Cơ quan Nghiên cứu Sinh y học (BARDA) tài trợ toàn bộ thử nghiệm lâm sàng giai đoạn 1-2-3. Nếu thất bại, người đóng thuế gánh chịu — không phải Moderna.",
    badge: { label: "⚠️ XÃ HỘI HÓA RỦI RO", sub: "$955 triệu từ BARDA — rủi ro hoàn toàn về phía công" },
  },
  {
    icon: "📋", num: "4.3", title: "Hợp đồng Mua Trước", sub: "Advance Purchase Agreement",
    color: "#F4A261", border: "rgba(244,162,97,0.35)", span: 1,
    body: "Chính phủ mua trước 100 triệu liều trị giá $1,525 tỷ trước khi vaccine được phê duyệt — đảm bảo thị trường, loại bỏ rủi ro thương mại cho Moderna.",
    badge: { label: "⚠️ TƯ NHÂN HÓA LỢI NHUẬN", sub: "Moderna tự định giá $15–37/liều" },
  },
  {
    icon: "📄", num: "4.4", title: "Cấp phép Khẩn cấp Ưu tiên", sub: "Emergency Use Authorization",
    color: "#0A2540", border: "rgba(10,37,64,0.2)", span: 1,
    body: "Cục Quản lý Thực phẩm và Dược phẩm (FDA) phê duyệt khẩn cấp tốc độ kỷ lục. Đạo luật PREP miễn trừ toàn bộ trách nhiệm pháp lý về tác dụng phụ cho Moderna.",
    badge: null,
  },
  {
    icon: "🚚", num: "4.5", title: "Hỗ trợ Phân phối Toàn quốc", sub: "Public Distribution Network",
    color: "#E63946", border: "rgba(230,57,70,0.25)", span: 1,
    body: "Quân đội, CDC, FEMA đảm nhận toàn bộ logistics tiêm chủng. Moderna không tốn một xu cho phân phối.",
    badge: null,
  },
];

export function Slide5Support() {
  return (
    <div className="relative w-full h-full flex flex-col" style={{ background: "#F8F9FA", fontFamily: "'Montserrat', sans-serif" }}>
      <NetworkBackground opacity={0.07} nodeColor="rgba(0,180,216,0.2)" lineColor="0,180,216" />

      {/* Header */}
      <div className="relative z-10 px-10 py-5 flex items-center gap-4" style={{ background: "#0A2540", flexShrink: 0 }}>
        <div className="px-3 py-1 rounded-full text-xs uppercase tracking-widest" style={{ background: "rgba(0,180,216,0.2)", color: "#00B4D8", border: "1px solid rgba(0,180,216,0.4)", fontWeight: 700 }}>
          Phần 4
        </div>
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1rem, 2vw, 1.4rem)", color: "#fff", textTransform: "uppercase" }}>
          Cách Thức <span style={{ color: "#00B4D8" }}>Nhà Nước Mỹ</span> Hỗ Trợ Moderna
        </h2>
      </div>

      <div className="relative z-10 flex-1 overflow-auto p-5">
        {/* Warning banner */}
        <div className="rounded-2xl p-3 mb-4 flex items-center gap-3" style={{ background: "linear-gradient(90deg, rgba(230,57,70,0.1), rgba(244,162,97,0.1))", border: "1.5px solid rgba(230,57,70,0.3)" }}>
          <span style={{ fontSize: "1.5rem" }}>⚠️</span>
          <div>
            <span style={{ fontWeight: 900, fontSize: "clamp(0.85rem, 1.4vw, 1rem)", color: "#E63946", letterSpacing: "0.02em" }}>
              "XÃ HỘI HÓA RỦI RO – TƯ NHÂN HÓA LỢI NHUẬN"
            </span>
            <p style={{ color: "#64748B", fontSize: "0.75rem", marginTop: 1, fontWeight: 500 }}>
              Cơ chế vận hành cốt lõi — xuyên suốt cả 5 hình thức hỗ trợ dưới đây.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {/* Row 1: Cell 1 (col-span-2) + Cell 2 */}
          <div className="col-span-2 rounded-2xl p-4 flex flex-col gap-3" style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)", border: `1.5px solid ${cells[0].border}`, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0" style={{ background: "rgba(0,180,216,0.1)" }}>{cells[0].icon}</div>
              <div>
                <div style={{ fontWeight: 800, color: "#0A2540", fontSize: "0.88rem" }}>{cells[0].num} · {cells[0].title}</div>
                <div style={{ color: cells[0].color, fontSize: "0.68rem", fontWeight: 600 }}>{cells[0].sub}</div>
              </div>
            </div>
            <p style={{ color: "#334155", fontSize: "0.8rem", lineHeight: 1.65, fontWeight: 400 }}>{cells[0].body}</p>
            <div className="grid grid-cols-2 gap-2 mt-1">
              <div className="rounded-lg p-2.5" style={{ background: "rgba(0,180,216,0.07)", border: "1px solid rgba(0,180,216,0.2)" }}>
                <div style={{ color: "#00B4D8", fontWeight: 700, fontSize: "0.72rem" }}>Đầu tư của Viện Y tế Quốc gia vào Moderna</div>
                <div style={{ color: "#0A2540", fontWeight: 800, fontSize: "1rem" }}>~$337 triệu</div>
                <div style={{ color: "#64748B", fontSize: "0.66rem", fontWeight: 400 }}>giai đoạn 2010–2019</div>
              </div>
              <div className="rounded-lg p-2.5" style={{ background: "rgba(230,57,70,0.07)", border: "1px solid rgba(230,57,70,0.2)" }}>
                <div style={{ color: "#E63946", fontWeight: 700, fontSize: "0.72rem" }}>Tranh chấp bằng sáng chế</div>
                <div style={{ color: "#0A2540", fontWeight: 800, fontSize: "1rem" }}>Chưa giải quyết</div>
                <div style={{ color: "#64748B", fontSize: "0.66rem", fontWeight: 400 }}>Viện Y tế Quốc gia đề nghị đồng sở hữu, Moderna từ chối</div>
              </div>
            </div>
          </div>

          {[cells[1], cells[2], cells[3], cells[4]].map((cell, i) => (
            <div key={i} className="rounded-2xl p-4 flex flex-col gap-2" style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(12px)", border: `1.5px solid ${cell.border}`, boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center text-base flex-shrink-0" style={{ background: `${cell.color}15` }}>{cell.icon}</div>
                <div>
                  <div style={{ fontWeight: 800, color: "#0A2540", fontSize: "0.82rem" }}>{cell.num} · {cell.title}</div>
                  <div style={{ color: cell.color, fontSize: "0.65rem", fontWeight: 600 }}>{cell.sub}</div>
                </div>
              </div>
              <p style={{ color: "#334155", fontSize: "0.78rem", lineHeight: 1.6, fontWeight: 400, flex: 1 }}>{cell.body}</p>
              {cell.badge && (
                <div className="rounded-lg p-2 mt-auto" style={{ background: "rgba(230,57,70,0.07)", border: "1px solid rgba(230,57,70,0.2)" }}>
                  <div style={{ fontWeight: 800, color: "#E63946", fontSize: "0.75rem" }}>{cell.badge.label}</div>
                  <div style={{ color: "#475569", fontSize: "0.68rem", marginTop: 1, fontWeight: 400 }}>{cell.badge.sub}</div>
                </div>
              )}
              {cell.num === "4.5" && (
                <div className="flex gap-1.5 flex-wrap mt-auto">
                  {["Quân đội", "CDC", "FEMA", "Y tế địa phương"].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-xs" style={{ background: "rgba(10,37,64,0.07)", color: "#0A2540", border: "1px solid rgba(10,37,64,0.15)", fontWeight: 600, fontSize: "0.65rem" }}>{tag}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
