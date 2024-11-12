/** @type {import('tailwindcss').Config} */
export default {
    content: ["./*.hbs", "./**/*.hbs"],
    darkMode: "media",
    mode: "jit",
    theme: {
        extend: {
            screens: {
                "3lg": "1275px",
                "2lg": "1120px",
                xs: "400px",
                xxs: "350px",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
