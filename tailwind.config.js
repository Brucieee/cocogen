import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                jost: ['Jost', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
            colors: {
                primary: {
                    teal: "#008080",
                    "bright-teal": "#0CC8C8",
                    pink: "#E4509A",
                    "light-pink": "#FB9FCD",
                    black: "#2D2727",
                    "black-text": "#303030",
                    "light-black-text": "#3B3939",
                    "caption-black-text": "#585858",
                    white: "#FFFFFF",
                },
                secondary: {
                    green: "#54B947",
                    "light-green": "#D0FCCB",
                    "deep-light-green": "#A9D3A4",
                    "aqua-blue": "#1B96DB",
                    "light-aqua-blue": "#9BD4F4",
                    "deep-light-aqua-blue": "#8DBBD4",
                    blue: "#003592",
                    "baby-blue": "#8DB4F9",
                    "light-baby-blue": "#CEE0FF",
                },
                teal: {
                    1: "#F0FFFF",
                    2: "#E0F5F5",
                    3: "#C0E6E6",
                    4: "#A8D9D9",
                    5: "#90CCCC",
                    6: "#60B3B3",
                    7: "#309999",
                    8: "#008080",
                    9: "#006666",
                    10: "#004D4D",
                    11: "#003E3E",
                    12: "#003333",
                },
                surfaces: {
                    1: "#F5FAFF",
                    2: "#D7DEE3",
                    3: "#BBC1C7",
                    4: "#9FA6AC",
                    5: "#848A90",
                    6: "#6A6F74",
                    7: "#505558",
                    8: "#373A3D",
                    9: "#1E1F21",
                    10: "#050505",
                },
                status: {
                    "light-red": "#FFE2E2",
                    "highlight-red": "#FFF7F7",
                    red: "#DD0707",
                    salmon: "#FFAFAF",
                    "light-yellow": "#FFF4DA",
                    "subdued-yellow": "#FFF9EC",
                    yellow: "#F5BC16",
                    "mellow-yellow": "#F5D373",
                    "light-green": "#E1F4E5",
                    green: "#09A12A",
                },
            },
        },
    },

    plugins: [forms, require('daisyui')],
};
