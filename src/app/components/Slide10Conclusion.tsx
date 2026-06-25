import { NetworkBackground } from "./NetworkBackground";

const refs = [
  { num: "1", text: "Lenin, V.I. (1916). Imperialism, the Highest Stage of Capitalism. Progress Publishers." },
  { num: "2", text: "Mazzucato, M. (2021). Mission Economy: A Moonshot Guide to Changing Capitalism. Allen Lane." },
  { num: "3", text: "U.S. GAO (2021). Operation Warp Speed: Contracts for COVID-19 Vaccines. GAO-21-319." },
  { num: "4", text: "Reuters (2021). NIH Scientists Say Moderna Vaccine Patent Belongs to U.S. Government." },
  { num: "5", text: "People's Vaccine Alliance (2021). A Double Dose of Inequality." },
  { num: "6", text: "Mazzucato, M. (2013). The Entrepreneurial State. Anthem Press." },
  { num: "7", text: "Nguyễn Minh Trung & Hội đồng tác giả (2023). Giáo trình Kinh tế Chính trị Mác–Lênin. NXB Chính trị Quốc gia." },
  { num: "8", text: "Gonsalves & Kapczynski (2021). The political economy of the COVID-19 vaccine. Boston Review." },
];

const conclusions = [
  { icon: "✅", color: "#2A9D8F", title: "Lý luận được xác nhận", text: "Case Moderna chứng minh tính đúng đắn của Lênin: tư bản độc quyền không thể tách rời quyền lực Nhà nước." },
  { icon: "🔄", color: "#00B4D8", title: "Biểu hiện mới", text: "Độc quyền Nhà nước thế kỷ XXI không còn qua quốc hữu hóa, mà qua: đầu tư công nghiên cứu → tư nhân hóa kết quả → độc quyền bằng sáng chế." },
  { icon: "⚖️", color: "#F4A261", title: "Mâu thuẫn cơ bản", text: "Mâu thuẫn giữa tính xã hội của sản xuất và sở hữu tư nhân ngày càng gay gắt trong thời đại công nghệ." },
  { icon: "🌏", color: "#E63946", title: "Bài học cho Việt Nam", text: "Đầu tư công phải có cơ chế đảm bảo lợi ích quay lại cộng đồng — không được để tư nhân hóa hoàn toàn kết quả." },
];

export function Slide10Conclusion() {
  return (
    <div className="relative w-full h-full flex flex-col overflow-hidden" style={{ background: "linear-gradient(135deg, #0A2540 0%, #0d3460 60%, #0A2540 100%)", fontFamily: "'Montserrat', sans-serif" }}>
      <NetworkBackground opacity={0.18} nodeColor="rgba(0,180,216,0.35)" lineColor="0,180,216" />

      {/* Top */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 py-5 gap-5">
        <div className="px-3 py-1.5 rounded-full text-xs uppercase tracking-widest" style={{ background: "rgba(0,180,216,0.2)", color: "#00B4D8", border: "1px solid rgba(0,180,216,0.4)", fontWeight: 700 }}>
          Phần 8 · Kết Luận
        </div>

        {/* Conclusion box */}
        <div className="w-full max-w-3xl rounded-3xl p-6" style={{ background: "rgba(255,255,255,0.96)", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
          <div style={{ fontWeight: 800, color: "#0A2540", fontSize: "clamp(0.88rem, 1.5vw, 1.1rem)", textAlign: "center", marginBottom: 16 }}>
            Kết Luận: Case Moderna Dưới Lăng Kính Mác–Lênin
          </div>

          <div className="grid grid-cols-2 gap-4">
            {conclusions.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: `${item.color}08`, border: `1px solid ${item.color}25` }}>
                <div style={{ fontSize: "1.1rem", flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ fontWeight: 800, color: "#0A2540", fontSize: "0.82rem", marginBottom: 3 }}>{item.title}</div>
                  <div style={{ color: "#475569", fontSize: "0.78rem", lineHeight: 1.55, fontWeight: 400 }}>{item.text}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 rounded-2xl text-center" style={{ background: "linear-gradient(135deg, #0A2540 0%, #1D3557 100%)" }}>
            <p style={{ color: "#fff", fontSize: "0.85rem", fontStyle: "italic", lineHeight: 1.65, fontWeight: 400 }}>
              "Trong thời đại Chủ nghĩa Tư bản Độc quyền Nhà nước, ranh giới giữa Nhà nước và tư bản không còn rõ ràng. <strong style={{ fontWeight: 800, color: "#00B4D8" }}>Hiểu được điều đó là bước đầu để thay đổi nó.</strong>"
            </p>
          </div>
        </div>
      </div>

      {/* References */}
      <div className="relative z-10 px-8 py-4 flex-shrink-0" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div style={{ fontWeight: 700, color: "#00B4D8", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
          Phần 9 · Tài Liệu Tham Khảo
        </div>
        <div className="grid grid-cols-4 gap-x-5 gap-y-1">
          {refs.map((r) => (
            <div key={r.num} className="flex gap-2 items-start">
              <span className="flex-shrink-0 w-4 h-4 rounded flex items-center justify-center" style={{ background: "rgba(0,180,216,0.2)", color: "#00B4D8", fontWeight: 800, fontSize: "0.58rem" }}>{r.num}</span>
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.65rem", lineHeight: 1.5, fontWeight: 400 }}>{r.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
