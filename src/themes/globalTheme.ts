// src/themes/globalTheme.ts
import { createTheme } from "@mui/material";
import { colors } from "./themeColors";

declare module "@mui/material/styles" {
    interface Palette {
        border: {
            light: string;
            meduim: string;
        },
        icon: {
            white: string | undefined;
            primary: string;
            secondary: string;
        },
        customBackground: {
            sideBar: string;
        }

    }
    interface PaletteOptions {
        border: {
            light: string;
            meduim: string;
        },
        icon: {
            primary: string;
            secondary: string;
            white: string;
        },
        customBackground: {
            sideBar: string;
        }
    }
    interface IconOptions {
        primary: string;
        secondary: string;
    }
}

export const globalTheme = createTheme({
    palette: {
        primary: {
            main: colors.primaryMain,
            light: colors.primaryLight,
            dark: colors.primaryDark,
            contrastText: colors.primaryContrastText
        },
        secondary: {
            main: colors.secondaryMain,
            light: colors.secondaryLight,
            dark: colors.secondaryDark,
            contrastText: colors.secondaryContrastText
        },
        error: {
            main: colors.errorMain,
            light: colors.errorLight,
            dark: colors.errorDark,
            contrastText: colors.errorContrastText
        },
        border: {
            light: colors.border.light,
            meduim: colors.border.medium
        },
        icon: {
            primary: colors.icon.primary,
            secondary: colors.icon.secondary,
            white: colors.icon.white
        },
        customBackground: {
            sideBar: colors.customBackground.sideBar
        }
    },
    typography: {
        fontFamily: "Poppins",
    }
});