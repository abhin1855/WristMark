/* THEME TOGGLE */

document.addEventListener("DOMContentLoaded", () => {

    const toggleBtn = document.getElementById("themeToggle");

    /* LOAD SAVED THEME */

    if(localStorage.getItem("theme") === "dark"){

        document.body.classList.add("dark-mode");

        if(toggleBtn){
            toggleBtn.innerHTML = '<i class="ri-sun-line"></i>';
        }
    }

    /* TOGGLE BUTTON */

    if(toggleBtn){

        toggleBtn.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            const icon = toggleBtn.querySelector("i");

            /* DARK MODE */

            if(document.body.classList.contains("dark-mode")){

                localStorage.setItem("theme", "dark");

                icon.classList.remove("ri-moon-line");
                icon.classList.add("ri-sun-line");

            }

            /* LIGHT MODE */

            else{

                localStorage.setItem("theme", "light");

                icon.classList.remove("ri-sun-line");
                icon.classList.add("ri-moon-line");

            }

        });

    }

});