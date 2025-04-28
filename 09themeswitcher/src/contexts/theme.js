import { createContext, useContext } from "react";

<<<<<<< HEAD
// Create a context with default values
export const ThemeContext = createContext({
  themeMode: "light",       // default theme is light
  darkTheme: () => {},      // placeholder function for dark theme
  lightTheme: () => {},     // placeholder function for light theme
});

// Export Provider to wrap around your app
export const ThemeProvider = ThemeContext.Provider;

// Custom hook to access theme context
export default function useTheme() {
  return useContext(ThemeContext);
=======
export const ThemeContext =createContext({
  themeMode: "light",
  darkTheme:() => {},
  lightTheme:() => {},  //methods
})

export const Themeprovider =  ThemeContext.Provider

export default function useTheme(){
  return useContext(ThemeContext)
>>>>>>> 74ba15c6910acee44af09d54447870d2202baf71
}