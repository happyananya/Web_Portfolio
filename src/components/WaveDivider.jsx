import React from "react";

function WaveDivider({ flip }) {
  return (
    <div className={`wave-divider ${flip ? "flip" : ""}`}>
      <svg
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C150,80 350,0 600,40 C850,80 1050,0 1200,40 L1200,80 L0,80 Z"
          fill="var(--wave-fill)"
        />
      </svg>
    </div>
  );
}

export default WaveDivider;
