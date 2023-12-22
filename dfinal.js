
const setDarkMode = (active = false) => {
    const wrapper = document.querySelector(":root");
    if (active) {
        wrapper.setAttribute("data-theme", "dark");
        // localStorage.setItem("theme", "dark");
    } else {
        wrapper.setAttribute("data-theme", "light");
        // localStorage.setItem("theme", "light");
    }
};

const toggleDarkMode = () => {
    const theme = document.querySelector(":root").getAttribute("data-theme");
    // If the current theme is "light", we want to activate dark
    setDarkMode(theme === "light");
};

const initDarkMode = () => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    // const themePreference = localStorage.getItem("theme");

    let active = query.matches;
    // if (themePreference === "dark") {
    //   active = true;
    // }
    // if (themePreference === "light") {
    //   active = false;
    // }

    setDarkMode(active);

    query.addListener(e => setDarkMode(e.matches));

    const toggleButton = document.querySelector(".js__dark-mode-toggle");
    toggleButton.addEventListener("click", toggleDarkMode);
};

initDarkMode();