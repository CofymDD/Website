/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
        extend: {
            dropShadow: {
                telegram: "0 0 1em rgba(125, 211, 252, 1)",
                instagram: "0 0 1em rgba(253, 164, 175, 1)",
                discord: "0 0 1em rgba(129, 140, 248, 1)",
                twitch: "0 0 1em rgba(192, 132, 252, 1)",
                applemusic: "0 0 1em rgba(252, 165, 165, 1)",
                youtube: "0 0 1em rgba(248, 113, 113, 1)",
                steam: "0 0 1em rgba(243, 244, 246, 1)",
				wakatime: "0 0 1em rgba(243, 244, 246, 1)",
				github: "0 0 1em rgba(243, 244, 246, 1)",
                osu: "0 0 1em rgba(249, 168, 212, 1)",
            },
        },
    },
	plugins: []
  }