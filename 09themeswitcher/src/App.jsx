<<<<<<< HEAD
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
=======
import { useEffect, useState } from "react";

import "./App.css";
import { Themeprovider } from "./contexts/theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
// import ThemeBtn from "./components/ThemeBtn";
function App() {

  const [themeMode,setThemeMode]=useState("light")

  const lightTheme=() => {
    setThemeMode("light")
  }
  const darkTheme=() => {
    setThemeMode("dark")
  }
  // actual change in theme 
  useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])


  return (
    <Themeprovider value={{themeMode, lightTheme,darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card/>

        </div>
      </div>
    </div>
    </Themeprovider>
  );
}

>>>>>>> 74ba15c6910acee44af09d54447870d2202baf71
export default App;
