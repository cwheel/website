const useDarkMode = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

export default useDarkMode;