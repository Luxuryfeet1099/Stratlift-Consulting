// ======================================
// STRATLIFT CONSULTING
// Language Switcher
// ======================================

const button = document.getElementById("lang-toggle");

let lang = localStorage.getItem("lang") || "de";

function applyLanguage() {

    if (button) {
        button.textContent = lang === "de" ? "EN" : "DE";
    }

    document.querySelectorAll("[data-de]").forEach(el => {

        const translation =
            lang === "de"
                ? el.dataset.de
                : el.dataset.en;

        if (translation) {
            el.textContent = translation;
        }

    });

}

if (button) {

    button.addEventListener("click", () => {

        lang = lang === "de" ? "en" : "de";

        localStorage.setItem("lang", lang);

        applyLanguage();

    });

}

document.addEventListener("DOMContentLoaded", () => {

    applyLanguage();

});

// ======================================
// Scroll Animation
// ======================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});
