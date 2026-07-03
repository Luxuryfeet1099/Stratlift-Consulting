const button = document.getElementById("lang-toggle");

let lang = "de";

button.addEventListener("click", () => {

    lang = lang === "de" ? "en" : "de";

    button.textContent =
        lang === "de"
        ? "EN"
        : "DE";

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-de]").forEach(el => {

        if (lang === "de") {
            el.innerHTML = el.dataset.de;
        } else {
            el.innerHTML = el.dataset.en;
        }

    });

});
