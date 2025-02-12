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
                primary: '#006666', // Teal
                secondary: '#848A90', // gray
                backgroundhover: '#F0FFFF', // primarytext color
                borderhover: '#1E1F21',
                labelhover: '#848A90',
                incorrectbg: '#FFF7F7', // incorrect color
                incorrectbghover: '#FFE2E2',
            }
        },
    },

    plugins: [forms, require('daisyui')],
};


