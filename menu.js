(function () {
  var bouton = document.getElementById("burger");
  var liens = document.getElementById("liens");
  var menu = document.querySelector("nav.menu");
  if (!bouton || !liens || !menu) return;

  function ouvrir(etat) {
    liens.classList.toggle("ouvert", etat);
    bouton.setAttribute("aria-expanded", etat ? "true" : "false");
    bouton.setAttribute("aria-label", etat ? "Fermer le menu" : "Ouvrir le menu");
    bouton.textContent = etat ? "✕" : "☰";
  }

  bouton.addEventListener("click", function () {
    ouvrir(!liens.classList.contains("ouvert"));
  });

  liens.addEventListener("click", function (e) {
    if (e.target.tagName === "A") ouvrir(false);
  });

  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target)) ouvrir(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") ouvrir(false);
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) ouvrir(false);
  });

  var page = location.pathname.split("/").pop() || "index.html";
  liens.querySelectorAll("a").forEach(function (a) {
    if (a.getAttribute("href") === page) a.setAttribute("aria-current", "page");
  });
})();
