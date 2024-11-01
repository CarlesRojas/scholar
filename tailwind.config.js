/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./app/**/*.{js,jsx,ts,tsx}'],
    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            screens: {
                mouse: { raw: '(hover: hover)' }
            }
        }
    },
    plugins: []
};
