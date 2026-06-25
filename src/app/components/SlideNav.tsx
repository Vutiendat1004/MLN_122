interface SlideNavProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onGoto: (n: number) => void;
  titles: string[];
}

export function SlideNav({ current, total, onPrev, onNext, onGoto, titles }: SlideNavProps) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-2 flex-shrink-0"
      style={{
        background: "#0A2540",
        borderTop: "1px solid rgba(0,180,216,0.2)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Prev */}
      <button
        onClick={onPrev}
        disabled={current === 0}
        className="w-7 h-7 rounded-lg flex items-center justify-center transition-all disabled:opacity-30"
        style={{
          background: current === 0 ? "rgba(255,255,255,0.05)" : "rgba(0,180,216,0.2)",
          color: "#fff",
          border: "1px solid rgba(0,180,216,0.3)",
          cursor: current === 0 ? "not-allowed" : "pointer",
        }}
      >
        ←
      </button>

      {/* Slide dots */}
      <div className="flex-1 flex items-center justify-center gap-1.5 overflow-x-auto">
        {titles.map((title, i) => (
          <button
            key={i}
            onClick={() => onGoto(i)}
            title={title}
            className="flex-shrink-0 transition-all duration-200"
            style={{
              width: i === current ? 28 : 8,
              height: 8,
              borderRadius: 4,
              background: i === current ? "#00B4D8" : "rgba(255,255,255,0.25)",
              border: "none",
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div
        style={{
          color: "rgba(255,255,255,0.6)",
          fontSize: "0.72rem",
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 600,
          minWidth: 48,
          textAlign: "center",
        }}
      >
        {current + 1} / {total}
      </div>

      {/* Current slide title */}
      <div
        style={{
          color: "#00B4D8",
          fontSize: "0.72rem",
          fontFamily: "'Montserrat', sans-serif",
          maxWidth: 200,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {titles[current]}
      </div>

      {/* Next */}
      <button
        onClick={onNext}
        disabled={current === total - 1}
        className="w-7 h-7 rounded-lg flex items-center justify-center transition-all disabled:opacity-30"
        style={{
          background: current === total - 1 ? "rgba(255,255,255,0.05)" : "rgba(0,180,216,0.2)",
          color: "#fff",
          border: "1px solid rgba(0,180,216,0.3)",
          cursor: current === total - 1 ? "not-allowed" : "pointer",
        }}
      >
        →
      </button>
    </div>
  );
}
