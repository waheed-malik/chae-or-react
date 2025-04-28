import React from "react";
<<<<<<< HEAD
import useTheme from "../contexts/theme"; // useTheme hook import

// ThemeBtn component
export default function ThemeBtn() {
  // Extract themeMode, lightTheme, and darkTheme functions from context
  const { themeMode, lightTheme, darkTheme } = useTheme();

  // Event handler for the toggle button change
  const onChangeBtn = (e) => {
    // Get the current state of the checkbox (checked means dark mode)
    const darkModeStatus = e.currentTarget.checked;
    
    // Switch between dark and light theme based on checkbox status
    if (darkModeStatus) {
      darkTheme(); // Activate dark theme
    } else {
      lightTheme(); // Activate light theme
    }
  }

  return (
    // Label for styling and wrapping input checkbox
    <label className="relative inline-flex items-center cursor-pointer">
      
      {/* Hidden checkbox that controls the theme toggle */}
      <input
        type="checkbox"
        value=""
        className="sr-only peer" // sr-only hides the checkbox from view
        onChange={onChangeBtn} // Trigger onChangeBtn when clicked
        checked={themeMode == "dark"} // Determine if dark mode is enabled (checked)
      />
      
      {/* Toggle button container */}
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
        rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white 
        after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 
        after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
      </div>

      {/* Text label for the button */}
=======
import useTheme from "../contexts/theme";

export default function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      darkTheme()
    } else {
      lightTheme()
    }
  }
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode == "dark"}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
>>>>>>> 74ba15c6910acee44af09d54447870d2202baf71
      <span className="ml-3 text-sm font-medium text-gray-900">
        Toggle Theme
      </span>
    </label>
  );
}
