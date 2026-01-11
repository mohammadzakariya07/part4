/**************************************
 * Smart Aadhaar Center – script.js
 * Features:
 * - Multilingual UI support
 * - Secure demo login
 * - Session start for 30 min timeout
 **************************************/

let currentLang = "en";

/* ===============================
   LANGUAGE HANDLING
================================ */

function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    location.reload();
}

function loadLanguage() {
    currentLang = localStorage.getItem("lang") || "en";
    const t = translations[currentLang];

    // Safety check
    if (!t) return;

    document.getElementById("title").innerText = t.title;
    document.getElementById("subtitle").innerText = t.subtitle;
    document.getElementById("login").innerText = t.login;

    document.getElementById("username").placeholder = t.username;
    document.getElementById("password").placeholder = t.password;

    document.getElementById("button").innerText = t.button;
    document.getElementById("footer").innerText = t.footer;
}

/* ===============================
   LOGIN + SESSION START
================================ */

function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    // Demo credentials (hackathon only)
    if (user === "operator01" && pass === "aadhaar123") {

        // Start session
        sessionStorage.setItem("loggedIn", "true");
        sessionStorage.setItem("loginTime", Date.now());

        // Redirect to dashboard
        window.location.href = "./dashboard.html";

    } else {
        document.getElementById("error").innerText =
            translations[currentLang].error;
    }
}

/* ===============================
   AUTO LOAD LANGUAGE ON PAGE OPEN
================================ */

window.onload = function () {
    if (typeof translations !== "undefined") {
        loadLanguage();
    }
};
