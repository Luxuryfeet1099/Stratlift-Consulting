const button = document.getElementById("lang-toggle");

let lang = "de";

button.addEventListener("click", () => {

    lang = lang === "de" ? "en" : "de";

    button.textContent = lang === "de" ? "EN" : "DE";

    document.querySelectorAll("[data-de]").forEach(el => {

        el.textContent =
            lang === "de"
            ? el.dataset.de
            : el.dataset.en;

    });

});
