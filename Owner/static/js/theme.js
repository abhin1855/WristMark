/* =================================
   THEME TOGGLE
================================= */

document.addEventListener("DOMContentLoaded", () => {

    const toggleBtn = document.getElementById("themeToggle");
    const sliderBtn = document.getElementById("themeSwitch");
    const lightLabel = document.getElementById("lightLabel");
    const darkLabel = document.getElementById("darkLabel");
    const themeIcon = document.getElementById("themeIcon");

    /* =================================
       APPLY THEME
    ================================= */

    function applyTheme(theme){

        if(theme === "dark"){
            document.body.classList.add("dark-mode");

            /* SETTINGS PAGE SLIDER */

            if(sliderBtn){
                sliderBtn.classList.add("dark");
            }

            /* LABELS */

            if(lightLabel && darkLabel){
                darkLabel.classList.add("active");
                lightLabel.classList.remove("active");
            }

            /* TOPBAR ICON */

            if(themeIcon){
                themeIcon.classList.remove("ri-sun-line");
                themeIcon.classList.add("ri-moon-line");
            }
        }
        else{
            document.body.classList.remove("dark-mode");

            /* SETTINGS PAGE SLIDER */

            if(sliderBtn){
                sliderBtn.classList.remove("dark");
            }

            /* LABELS */

            if(lightLabel && darkLabel){
                lightLabel.classList.add("active");
                darkLabel.classList.remove("active");
            }

            /* TOPBAR ICON */

            if(themeIcon){
                themeIcon.classList.remove("ri-moon-line");
                themeIcon.classList.add("ri-sun-line");
            }
        }
    }

    /* =================================
       LOAD SAVED THEME
    ================================= */

    const savedTheme =
        localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);

    /* =================================
       TOGGLE FUNCTION
    ================================= */

    function toggleTheme(){
        const isDark =
            document.body.classList.contains("dark-mode");
        const newTheme =
            isDark ? "light" : "dark";
        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);

    }

    /* =================================
       TOPBAR SWITCH
    ================================= */

    if(toggleBtn){
        toggleBtn.addEventListener("click", () => {
            toggleTheme();
        });
    }

    /* =================================
       SETTINGS PAGE SWITCH
    ================================= */

    if(sliderBtn){
        sliderBtn.addEventListener("click", () => {
            toggleTheme();
        });
    }
});


function updateDateTime() {
    const now = new Date();

    document.getElementById("liveDate").textContent =
        new Date().toLocaleString("en-IN", {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric"
        });
}

updateDateTime();