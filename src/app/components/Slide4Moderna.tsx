import { NetworkBackground } from "./NetworkBackground";

const timeline = [
  { year: "2010", icon: "🧬", color: "#00B4D8", tag: "Khởi đầu", title: "Moderna thành lập", desc: "Công ty tập trung vào nền tảng công nghệ mRNA — công nghệ có tiềm năng tạo ra thế hệ vaccine và liệu pháp hoàn toàn mới." },
  { year: "2013–2019", icon: "🔬", color: "#2A9D8F", tag: "Đầu tư công", title: "NIH & BARDA tài trợ", desc: "Viện Y tế Quốc gia (NIH) và Cơ quan Nghiên cứu Sinh y học (BARDA) rót ~$337 triệu vào nghiên cứu mRNA. Nhà nước chính là 'bà đỡ' cho công nghệ cốt lõi của Moderna." },
  { year: "1/2020", icon: "🦠", color: "#F4A261", tag: "Bước ngoặt", title: "COVID-19 bùng phát", desc: "Moderna và NIH khởi động hợp tác phát triển vaccine chỉ 2 ngày sau khi trình tự gene SARS-CoV-2 được công bố." },
  { year: "4–12/2020", icon: "🏛️", color: "#0A2540", tag: "Nhà nước nhúng tay", title: "Operation Warp Speed", desc: "BARDA ký hợp đồng $1,525 tỷ mua 100 triệu liều, rót thêm $955 triệu cho nghiên cứu và sản xuất — đảm bảo toàn bộ rủi ro về phía công." },
  { year: "12/2020", icon: "💉", color: "#2A9D8F", tag: "Thương mại hóa", title: "Spikevax® được cấp phép khẩn cấp", desc: "Cục Quản lý Thực phẩm và Dược phẩm (FDA) phê duyệt khẩn cấp. Moderna — chưa từng có sản phẩm nào được duyệt — bỗng trở thành nhà cung cấp vaccine toàn cầu." },
  { year: "2021–2022", icon: "💰", color: "#E63946", tag: "Hệ quả", title: "Lợi nhuận kỷ lục, không hoàn trả", desc: "Doanh thu $18,5 tỷ (2021) và $19,3 tỷ (2022). Cổ phiếu tăng 700%+. Không có cơ chế nào buộc Moderna chia sẻ lợi nhuận với Nhà nước." },
];

export function Slide4Moderna() {
  return (
    <div className="relative w-full h-full flex flex-col" style={{ background: "#F8F9FA", fontFamily: "'Montserrat', sans-serif" }}>
      <NetworkBackground opacity={0.07} nodeColor="rgba(0,180,216,0.2)" lineColor="0,180,216" />

      {/* Header */}
      <div className="relative z-10 px-10 py-5 flex items-center gap-4" style={{ background: "#0A2540", flexShrink: 0 }}>
        <div className="px-3 py-1 rounded-full text-xs uppercase tracking-widest" style={{ background: "rgba(0,180,216,0.2)", color: "#00B4D8", border: "1px solid rgba(0,180,216,0.4)", fontWeight: 700 }}>
          Phần 3
        </div>
        <h2 style={{ fontWeight: 800, fontSize: "clamp(1rem, 2vw, 1.4rem)", color: "#fff", textTransform: "uppercase" }}>
          Khái Quát Case <span style={{ color: "#00B4D8" }}>Moderna</span> & Vaccine COVID-19
        </h2>
      </div>

      <div className="relative z-10 flex-1 overflow-auto px-8 py-5">
        {/* Stats */}
        <div className="grid grid-cols-4 gap-3 mb-5">
          {[
            { value: "~$2,5 tỷ", label: "Đầu tư công của Mỹ vào Moderna", color: "#00B4D8" },
            { value: "100 tr liều", label: "Hợp đồng mua trước của Chính phủ", color: "#2A9D8F" },
            { value: "$19,3 tỷ", label: "Doanh thu Moderna năm 2022", color: "#F4A261" },
            { value: "0 đồng", label: "Hoàn trả cho ngân sách Nhà nước", color: "#E63946" },
          ].map((s, i) => (
            <div key={i} className="rounded-xl p-4 text-center" style={{ background: "#fff", border: `1.5px solid ${s.color}30`, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div style={{ fontWeight: 800, fontSize: "clamp(1rem, 1.8vw, 1.4rem)", color: s.color }}>{s.value}</div>
              <div style={{ color: "#64748B", fontSize: "0.7rem", lineHeight: 1.4, marginTop: 4, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-14 top-4 bottom-4" style={{ width: 2, background: "linear-gradient(to bottom, #00B4D8, #E63946)" }} />
          <div className="flex flex-col gap-3">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex flex-col items-center gap-1 flex-shrink-0" style={{ width: 48 }}>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm z-10" style={{ background: item.color, boxShadow: `0 0 0 3px ${item.color}30` }}>
                    {item.icon}
                  </div>
                  <div style={{ fontSize: "0.58rem", color: "#94A3B8", textAlign: "center", lineHeight: 1.2, fontWeight: 600 }}>{item.year}</div>
                </div>
                <div className="flex-1 rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(10px)", border: `1px solid ${item.color}25`, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-xs" style={{ background: `${item.color}18`, color: item.color, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.05em" }}>{item.tag}</span>
                    <span style={{ fontWeight: 700, fontSize: "0.85rem", color: "#0A2540" }}>{item.title}</span>
                  </div>
                  <p style={{ color: "#475569", fontSize: "0.78rem", lineHeight: 1.55, fontWeight: 400 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-4 rounded-2xl p-4 flex items-center gap-4" style={{ background: "linear-gradient(135deg, #0A2540 0%, #1D3557 100%)" }}>
          <div style={{ fontSize: "1.8rem" }}>💡</div>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.83rem", lineHeight: 1.6, fontWeight: 400 }}>
            <strong style={{ color: "#00B4D8", fontWeight: 800 }}>Nhà nước Mỹ</strong> chạy đoạn đường đầu tiên và khó nhất, nhưng khi tới vạch đích,{" "}
            <strong style={{ color: "#F4A261", fontWeight: 800 }}>Moderna bỏ túi huy chương vàng một mình.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
