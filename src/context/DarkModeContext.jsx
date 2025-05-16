import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { useSettings } from "../settings/useSettings";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, "isDarkMode");
  const { settings } = useSettings();

  const { primary_color } = settings ?? {};

  useEffect(
    function () {
      if (!primary_color) return;
      if (isDarkMode) {
        document.documentElement.classList.add(`${primary_color}-dark`);
        document.documentElement.classList.remove(`${primary_color}-light`);
      } else {
        document.documentElement.classList.add(`${primary_color}-light`);
        document.documentElement.classList.remove(`${primary_color}-dark`);
      }
    },
    [isDarkMode, primary_color]
  );

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside of DarkModeProvider");
  return context;
}

export { DarkModeProvider, useDarkMode };
