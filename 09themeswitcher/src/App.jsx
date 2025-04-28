// Import necessary hooks and components
import { useEffect, useState } from "react";
import "./App.css";
// Wrong import (should be ThemeProvider with capital P)
// import { Themeprovider } from "./contexts/theme";
import { ThemeProvider } from "./contexts/theme"; // Corrected import
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

// Main App Component
function App() {

  // State to manage theme mode (light or dark)
  const [themeMode, setThemeMode] = useState("light");

  // Function to set light theme
  const lightTheme = () => {
    setThemeMode("light");
  };

  // Function to set dark theme
  const darkTheme = () => {
    setThemeMode("dark");
  };

  // Whenever themeMode changes, update HTML class
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  // App UI
  return (
    // Providing theme context to child components
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          
          {/* Theme Toggle Button */}
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          {/* Card component */}
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>

        </div>
      </div>
    </ThemeProvider>
  );
}

// Export App Component
export default App;
