import React from "react";

/** Minimal section separator — modern, no SVG wave. */
function WaveDivider({ flip }) {
  return (
    <div className={`wave-divider ${flip ? "flip" : ""}`} aria-hidden="true">
      <div className="wave-divider-line" />
    </div>
  );
}

export default WaveDivider;
