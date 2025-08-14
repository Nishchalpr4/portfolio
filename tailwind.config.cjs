/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { base:"#0B0A14", surface:"#111021", border:"rgba(255,255,255,0.08)", text:"#E8EAF4", muted:"#A6AECE", primary:"#7C3AED", accent:"#06B6D4" },
      boxShadow: { glow: "0 0 40px rgba(124,58,237,.35)", card:"0 10px 30px rgba(0,0,0,.35)" },
      fontFamily: { inter:["Inter","sans-serif"], grotesk:["Space Grotesk","sans-serif"] },
      backgroundImage: { 'radial-faint': "radial-gradient(800px 400px at 10% -10%, rgba(124,58,237,.18), transparent 60%), radial-gradient(800px 400px at 100% 10%, rgba(6,182,212,.14), transparent 50%)" },
      keyframes: { float:{"0%,100%":{transform:"translateY(0)"},"50%":{transform:"translateY(-8px)"}}, spinSlow:{"0%":{transform:"rotate(0)"},"100%":{transform:"rotate(360deg)"}} },
      animation: { float:"float 6s ease-in-out infinite", spinSlow:"spinSlow 26s linear infinite" }
    },
  }, plugins: [],
};
