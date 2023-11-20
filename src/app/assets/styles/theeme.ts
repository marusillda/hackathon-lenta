import {createTheme} from "@mui/material";
import {ruRU} from "@mui/material/locale";
import GilroyBold from "../fonts/Gilroy-Bold.woff";
import GilroyMeduim from "../fonts/Gilroy-Medium.woff";
import GilroyRegular from "../fonts/Gilroy-Regular.woff";

import GilroyBold2 from "../fonts/Gilroy-Bold.woff2";
import GilroyMeduim2 from "../fonts/Gilroy-Medium.woff2";
import GilroyRegular2 from "../fonts/Gilroy-Regular.woff2";

const theme = createTheme(
    {
        palette: {
            primary: {
                main: "#003C96",
                dark: "#001E64",
                light: "#B4C8FF",
            },
            background: {
                default: "#FFFFFF",
                paper: "#F8F8F8",
            },
            secondary: {
                main: "#FFB900",
                dark: "rgba(0, 60, 150, 0.5)",
                light: "rgba(0, 60, 150, 0.05)",
            },
            text: {
                primary: "#2C2A29",
                secondary: "#808185",
                disabled: "#AAABAD",
            },
            error: {
                main: "#EE505A",
            },
            warning: {
                main: "#FF9500",
            },
            success: {
                main: "#00BE64",
            },
            info: {
                main: "#003C9680",
            },
        },
        spacing: 4,
        typography: {
            fontFamily: "Gilroy",
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: `
        @font-face {
          font-family: 'Gilroy';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${GilroyRegular2}) format('woff2'),
               url(${GilroyRegular}) format('woff');
        }

        @font-face {
          font-family: 'Gilroy';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: url(${GilroyMeduim2}) format('woff2'),
               url(${GilroyMeduim}) format('woff');
        }

        @font-face {
          font-family: 'Gilroy';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: url(${GilroyBold2}) format('woff2'),
               url(${GilroyBold}) format('woff');
        }

        input:-webkit-autofill {
         -webkit-text-fill-color: #2C2A29;
          transition: all 5000s ease-in-out;
        }

        #root {
          height: 100vh;
        }
      `,
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: "none",
                    },
                },
            },
            MuiChip: {
                styleOverrides: {
                    root: {
                        "& .MuiChip-deleteIcon": {
                            margin: "0 10px 0 -6px",
                        },
                    },
                },
            },
        },
    },
    ruRU
);

export default theme;
