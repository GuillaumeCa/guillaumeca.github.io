import { useEffect, useState } from "react";
import { useMediaQuery } from "./useMediaQuery";

function toggleDarkmode(dark) {
  if (dark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export function useDarkmode() {
  const [darkMode, setDarkMode] = useState("auto");
  const isSystemDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    if ("theme" in localStorage) {
      if (localStorage.theme === "dark") {
        setDarkMode("dark");
      } else {
        setDarkMode("light");
      }
    }
  }, []);

  useEffect(() => {
    toggleDarkmode(
      (darkMode === "auto" && isSystemDarkMode) || darkMode === "dark"
    );
  }, [isSystemDarkMode, darkMode]);

  return {
    mode: darkMode,
    toggle(mode) {
      setDarkMode(mode);

      if (mode === "dark" || mode === "light") {
        localStorage.theme = mode === "dark" ? "dark" : "";
      } else {
        localStorage.removeItem("theme");
      }
    },
  };
}
