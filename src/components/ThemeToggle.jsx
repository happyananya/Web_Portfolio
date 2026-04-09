import React from "react";

function ThemeToggle({ darkMode, onToggle }) {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label="Toggle dark mode"
    >
      {darkMode ? "\u2600\uFE0F" : "\u{1F319}"}
    </button>
  );
}

export default ThemeToggle;
