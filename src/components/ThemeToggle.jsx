import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  // Apply theme class to HTML tag
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full border border-gray-500 text-gray-300 hover:text-gold hover:border-gold transition"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={18} strokeWidth={1.6} />
      ) : (
        <Moon size={18} strokeWidth={1.6} />
      )}
    </button>
  );
};

export default ThemeToggle;
