let currentLang = "en";

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  location.reload();
}

function loadLanguage() {
  currentLang = localStorage.getItem("lang") || "en";
  const t = translations[currentLang];

  document.getElementById("title").innerText = t.title;
  document.getElementById("subtitle").innerText = t.subtitle;
  document.getElementById("login").innerText = t.login;
  document.getElementById("username").placeholder = t.username;
  document.getElementById("password").placeholder = t.password;
  document.getElementById("button").innerText = t.button;
  document.getElementById("footer").innerText = t.footer;
}

function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "operator01" && pass === "aadhaar123") {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText =
      translations[currentLang].error;
  }
}
