const colors = require("tailwindcss/colors");
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: colors.white,
            bluefrom: "#5956E9",
            blueto: "#3734B4",
            darkpurple: '#1B063D',
            bluepurple:'#AEACFF',
            violet: '#28104F',
            blueviolet: '#55328F',
            guppiegreen: '#2EFF81',
            oceanblue: '#4341C7',
            manatee: '#999FAE'
        },
        extend: {},
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
    ],
};