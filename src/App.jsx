import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <div className="app-layout">
      <Navbar darkMode={darkMode} onToggleTheme={toggleTheme} />
      <main className="app-main">
        <div className="app-main-inner">
          <LandingPage darkMode={darkMode} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
