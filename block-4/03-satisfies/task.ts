// create the ThemeColors type
type ThemeColors = unknown;

// Create a themes object that satisfies ThemeColors
// but preserves literal types for better autocomplete

const themes = {
  light: {
    primary: "#0066cc",
    secondary: "#4c9aff",
    text: "#2d2d2d",
    background: "#ffffff",
  },
  dark: {
    primary: "#4c9aff",
    secondary: "#0066cc",
    text: "#ffffff",
    background: "#2d2d2d",
  },
};

export {};
