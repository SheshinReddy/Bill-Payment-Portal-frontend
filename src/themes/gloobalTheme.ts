import { createTheme } from "@mui/material";

export const globalTheme = createTheme({
    palette: {
        primary: {
            main: "#181A22",
            light: "#78c581",
            dark: "#278b37",
            contrastText: "#FFFFFF"
        },
        secondary: {    //the secondary colors have been randomly generated
            main: "#44EABB",
            light: "#757de8",
            dark: "#002984",
            contrastText: "#fff"
        },
        error: {
            main: "#d32f2f",
            light: "#ef5350",
            dark: "#c62828",
            contrastText: "#fff"
        }
    },
    typography: {
        fontFamily: "Poppins",
    }
})