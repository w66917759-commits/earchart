type EarDrawingProps = {
  active?: boolean;
};

/**
 * Clean champagne line-art ear (no skin tones) — an editorial "beauty diagram"
 * rendered as elegant gold strokes on the dark stage, so the animated circle
 * markers read as the focal points.
 */
export function EarDrawing({ active = false }: EarDrawingProps) {
  return (
    <svg
      className={`ear-drawing${active ? " is-active" : ""}`}
      viewBox="0 0 300 430"
      aria-hidden="true"
      focusable="false"
    >
      {/* outer rim + lobe silhouette */}
      <path
        className="el-body"
        d="M150 26C198 22 234 48 250 92C262 128 260 166 256 200C252 240 250 270 234 300C220 326 206 346 180 362C162 373 138 374 122 360C110 350 105 334 108 316C99 300 91 284 90 258C88 226 89 196 94 166C99 124 107 80 130 54C139 42 145 31 150 26Z"
      />
      {/* helix inner edge (rolled rim) */}
      <path
        className="el-rim"
        d="M130 70C170 50 210 64 228 104C244 138 240 176 234 212C229 250 226 280 214 306"
      />
      {/* antihelix ridge + superior crus */}
      <path
        className="el-fold"
        d="M150 300C150 270 144 246 148 216C150 196 142 178 128 168"
      />
      {/* inferior crus */}
      <path className="el-fold" d="M150 214C161 199 176 193 192 196" />
      {/* concha bowl */}
      <path
        className="el-fold"
        d="M148 252C124 254 111 274 115 298C118 318 132 332 152 330"
      />
      {/* tragus */}
      <path
        className="el-fold"
        d="M110 214C96 220 92 242 102 260C110 273 124 269 126 252"
      />
      {/* antitragus */}
      <path
        className="el-fold"
        d="M152 296C164 296 172 308 165 320C161 327 152 326 148 318"
      />
      {/* lobe crease */}
      <path className="el-soft" d="M120 332C140 346 162 346 182 332" />
    </svg>
  );
}
