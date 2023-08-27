import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";

// color design tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#5f5f5d",
          200: "#2f2f2f",
          300: "#f4f4f2",
          400: "#f1f1ed",
          500: "#edede9",
          600: "#bebeba",
          700: "#8e8e8c",
          800: "#5f5f5d",
          900: "#2f2f2f",
        },
        primary: {
          100: "#fcf0f6",
          200: "#fae1ee",
          300: "#f7d3e5",
          400: "#f5c4dd",
          500: "#f2b5d4",
          600: "#c291aa",
          700: "#916d7f",
          800: "#614855",
          900: "#30242a",
        },
        greenAccent: {
          100: "#edf4dd",
          200: "#dce9bc",
          300: "#cadf9a",
          400: "#b9d479",
          500: "#a7c957",
          600: "#86a146",
          700: "#647934",
          800: "#435023",
          900: "#212811",
        },
        redAccent: {
          100: "#fdd3e7",
          200: "#fca8ce",
          300: "#fa7cb6",
          400: "#f9519d",
          500: "#f72585",
          600: "#c61e6a",
          700: "#941650",
          800: "#630f35",
          900: "#31071b",
        },
        blueAccent: {
          100: "#daf4fa",
          200: "#b6eaf4",
          300: "#91dfef",
          400: "#6dd5e9",
          500: "#48cae4",
          600: "#3aa2b6",
          700: "#2b7989",
          800: "#1d515b",
          900: "#0e282e",
        },
      }
    : {
        grey: {
          100: "#2f2f2f",
          200: "#5f5f5d",
          300: "#8e8e8c",
          400: "#bebeba",
          500: "#edede9",
          600: "#f1f1ed",
          700: "#f4f4f2",
          800: "#f8f8f6",
          900: "#fbfbfb",
        },
        primary: {
          100: "#30242a",
          200: "#614855",
          300: "#916d7f",
          400: "#c291aa",
          500: "#f2b5d4",
          600: "#f5c4dd",
          700: "#f7d3e5",
          800: "#fae1ee",
          900: "#fcf0f6",
        },
        greenAccent: {
          100: "#212811",
          200: "#435023",
          300: "#647934",
          400: "#86a146",
          500: "#a7c957",
          600: "#b9d479",
          700: "#cadf9a",
          800: "#dce9bc",
          900: "#edf4dd",
        },
        redAccent: {
          100: "#31071b",
          200: "#630f35",
          300: "#941650",
          400: "#c61e6a",
          500: "#f72585",
          600: "#f9519d",
          700: "#fa7cb6",
          800: "#fca8ce",
          900: "#fdd3e7",
        },
        blueAccent: {
          100: "#0e282e",
          200: "#1d515b",
          300: "#2b7989",
          400: "#3aa2b6",
          500: "#48cae4",
          600: "#6dd5e9",
          700: "#91dfef",
          800: "#b6eaf4",
          900: "#daf4fa",
        },
      }),
});

// mui theme settings

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: { main: colors.primary[500] },
            secondary: { main: colors.greenAccent[500] },
            neutral: {
              dark: colors.blueAccent[700],
              main: colors.blueAccent[500],
              light: colors.blueAccent[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: { main: colors.primary[200] },
            secondary: { main: colors.greenAccent[500] },
            neutral: {
              dark: colors.blueAccent[800],
              main: colors.blueAccent[500],
              light: colors.blueAccent[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans 3", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
