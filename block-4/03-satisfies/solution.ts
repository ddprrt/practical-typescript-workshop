type ThemeColors = {
  primary: string;
  secondary: string;
  text: string;
  background: string;
};

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
} satisfies Record<string, ThemeColors>;

// Type is preserved: "#0066cc"
const primaryColor = themes.light.primary;

export {};
