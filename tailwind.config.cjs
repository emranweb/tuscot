/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#6C5DD3",

                    secondary: "#4318FF",

                    accent: "#78716c",

                    neutral: "#191D24",

                    "base-100": "#2A303C",

                    info: "#3ABFF8",

                    success: "#36D399",

                    warning: "#FBBD23",

                    error: "#F87272",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
    // corePlugins: {
    //     container: false,
    // },
    // theme: {
    //     fontFamily: {
    //         inter: "Inter",
    //         late: "Lato",
    //         montserrat: "Montserrat",
    //         open: "Open Sans",
    //         poppins: "Poppins",
    //         raleway: "Raleway",
    //         roboto: "Roboto",
    //     },

    //     screens: {
    //         "2xl": { max: "1535px" },
    //         xl: { max: "1279px" },
    //         lg: { max: "1023px" },
    //         md: { max: "767px" },
    //         sm: { max: "639px" },
    //     },

    //     colors: {
    //         transparent: "transparent",
    //         current: "currentColor",
    //         white: "#ffffff",
    //         primary: "#4318FF",
    //         secondary: {
    //             light: "#e9d5ff",
    //             default: "#8b5cf6",
    //             dark: "#6b21a8",
    //         },
    //         dashboard: "#F4F7FE",
    //         textprimary: "#2B3674",
    //         textsecondary: "#A3AED0",
    //     },
    //     extend: {},
    // },
    // plugins: [

    //     function ({ addComponents }) {
    //         addComponents({
    //             ".container": {
    //                 maxWidth: "1320px",
    //                 "@screen 2xl": {
    //                     maxWidth: "1140px",
    //                 },
    //                 "@screen xl": {
    //                     maxWidth: "960px",
    //                 },
    //                 "@screen lg": {
    //                     maxWidth: "720px",
    //                 },
    //                 "@screen md": {
    //                     maxWidth: "540px",
    //                 },
    //                 "@screen sm": {
    //                     maxWidth: "100%",
    //                     paddingLeft: "1rem",
    //                     paddingRight: "1rem",
    //                 },
    //             },
    //         });
    //     },
    // ],
};
