import type { CSSProperties } from "react";
import { EarDrawing } from "@/components/EarDrawing";
import type { Piercing } from "@/lib/piercings";

export function MiniEarMap({ piercing }: { piercing: Piercing }) {
  return (
    <div
      className="mini-ear-map"
      role="img"
      aria-label={`${piercing.name} location on an ear piercing chart`}
    >
      <div className="mini-ear-frame">
        <EarDrawing />
        <span
          className="mini-marker"
          style={
            {
              "--x": `${piercing.chart.x}%`,
              "--y": `${piercing.chart.y}%`,
            } as CSSProperties
          }
        />
      </div>
    </div>
  );
}
