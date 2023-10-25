module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            }
        },
        colors: {
            darkbg: "#1D1D1D",
            darkbg2: "#212121",
            darkbg3: "#262626",
            darkgreytext: "#999999",
            graytext: "#CCCCCC",
            darktext2: "#BCBCBC",
            white: "#FFFFFF",
            purple: "#654982",
            blue: "#4B55AC",
            lightpurple: "#A056CC",
            darkpurple: "#130E19",
        },
    },
    darkMode: "class",
    plugins: [],
}