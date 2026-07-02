// Language Switcher 

const langButton = document.getElementById("lang-toggle");

let currentLang = "de";

const translations = {

    de: {
        services: "Leistungen",
        about: "Über mich",
        contact: "Kontakt",
        cta: "Kostenloses Erstgespräch",
        hero:
            "Unternehmensberatung für KMU mit Fokus auf Wachstum, Prozessoptimierung und KI-gestützte Effizienzsteigerung."
    },

    en: {
        services: "Services",
        about: "About",
        contact: "Contact",
        cta: "Free Initial Consultation",
        hero:
            "Business consulting for SMEs focused on growth, process optimization and AI-driven efficiency."
    }
};

langButton.addEventListener("click", () => {

    currentLang = currentLang === "de" ? "en" : "de";

    langButton.textContent = currentLang === "de" ? "EN" : "DE";

    const t = translations[currentLang];

    document.querySelector('a[href="#services"]').textContent = t.services;
    document.querySelector('a[href="#about"]').textContent = t.about;
    document.querySelector('a[href="#contact"]').textContent = t.contact;

    document.querySelector(".cta").textContent = t.cta;

    document.querySelector(".hero p").textContent = t.hero;
});

// Scroll Animation

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
