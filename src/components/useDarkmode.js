import { useEffect, useState } from "react";

function toggleDarkmode() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export function useDarkmode() {
  const [darkMode, setDarkMode] = useState("auto");
  useEffect(() => {
    if ("theme" in localStorage) {
      if (localStorage.theme === "dark") {
        setDarkMode("dark");
      } else {
        setDarkMode("light");
      }
    }

    toggleDarkmode();
  }, []);

  return {
    mode: darkMode,
    toggle(mode) {
      setDarkMode(mode);

      if (mode === "dark" || mode === "light") {
        localStorage.theme = mode === "dark" ? "dark" : "";
      } else {
        localStorage.removeItem("theme");
      }

      toggleDarkmode();
    },
  };
}
