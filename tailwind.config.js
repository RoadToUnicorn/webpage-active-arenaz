/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
        },
        screens: {
            xs: "500px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1400px",
            "3xl": "1500px",
            "4xl": "1780px",
        },
        extend: {
            fontSize: {
                h1: [
                    "2.25rem",
                    {
                        lineHeight: "2.75rem",
                    },
                ],
                h2: [
                    "1.875rem",
                    {
                        lineHeight: "2.375rem",
                    },
                ],
                h3: [
                    "1.5rem",
                    {
                        lineHeight: "2rem",
                    },
                ],
                h4: [
                    "1.25rem",
                    {
                        lineHeight: "1.75rem",
                    },
                ],
                h5: [
                    "1.125rem",
                    {
                        lineHeight: "1.625rem",
                    },
                ],
                h6: [
                    "1rem",
                    {
                        lineHeight: "1.5rem",
                    },
                ],
                quote: [
                    "1.125rem",
                    {
                        lineHeight: "1.75rem",
                        fontWeight: "600",
                    },
                ],
            },
            colors: {
                primary: {
                    DEFAULT: "#FF0117",
                },
            },

            boxShadow: {
                card: "0px 0px 0px 1px rgba(35, 38, 59, 0.05), 0px 2px 4px rgba(35, 38, 59, 0.1)",
                "card-hover":
                    "0px 0px 0px 1px rgba(35, 38, 59, 0.05), 0px 3px 4px rgba(35, 38, 59, 0.1)",
                "card-two": "0px 8px 12px rgba(0, 0, 0, 0.08)",
                "menu-shadow": "0px 0px 8px rgba(0, 0, 0, 0.12)",
            },
        },
    },
};
