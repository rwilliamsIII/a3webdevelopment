"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";
type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark"); // Start with a consistent default

  useEffect(() => {
    // Check local storage or system preference for initial theme
    const savedTheme = localStorage.getItem("theme") as Theme;
    const initialTheme = savedTheme || "dark"; // Fall back to dark if no theme is saved    
    setTheme(initialTheme);
    applyTheme(initialTheme);
  
  }, []);

  const applyTheme = (newTheme: Theme) => {
    // Update the HTML class for Tailwind's dark mode
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Keep the data-theme attribute and CSS variables for backward compatibility
    document.documentElement.dataset.theme = newTheme;
    
    // Update local storage
    localStorage.setItem("theme", newTheme);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    applyTheme(newTheme);
  };

 
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
