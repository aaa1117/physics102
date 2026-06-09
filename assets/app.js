/* ===== Physics Final Study Site — shared chrome & behaviour ===== */
(function () {
  "use strict";

  // Single source of truth for navigation. file is repo-relative.
  var UNITS = [
    { name: "Unit 1 · Electrostatics", topics: [
      { n: 1, slug: "coulombs-law",            title: "Coulomb's Law" },
      { n: 2, slug: "electric-field",          title: "The Electric Field" },
      { n: 3, slug: "gauss-law",               title: "Gauss's Law & Conductors" },
      { n: 4, slug: "electric-potential",      title: "Electric Potential" },
      { n: 5, slug: "capacitance",             title: "Capacitance & Dielectrics" },
    ]},
    { name: "Unit 2 · Circuits", topics: [
      { n: 6, slug: "current-resistance",      title: "Current & Resistance" },
      { n: 7, slug: "dc-circuits",             title: "DC Circuits" },
    ]},
    { name: "Unit 3 · Magnetism", topics: [
      { n: 8, slug: "magnetic-force",          title: "Magnetic Field & Force" },
      { n: 9, slug: "magnetic-field-sources",  title: "Sources of Magnetic Field" },
    ]},
    { name: "Unit 4 · Induction", topics: [
      { n: 10, slug: "induction",              title: "Electromagnetic Induction" },
      { n: 11, slug: "inductance",             title: "Inductance" },
    ]},
  ];

  // Flat ordered list for prev/next.
  var FLAT = [];
  UNITS.forEach(function (u) { u.topics.forEach(function (t) { FLAT.push(t); }); });

  function fileFor(t) {
    return "topics/" + String(t.n).padStart(2, "0") + "-" + t.slug + ".html";
  }

  var root = document.body.getAttribute("data-root") || "";   // "" on home, "../" on topic pages
  var current = document.body.getAttribute("data-topic") || "home";
  function href(repoPath) { return root + repoPath; }

  /* ---------- Top bar ---------- */
  var topbar = document.createElement("header");
  topbar.className = "topbar";
  topbar.innerHTML =
    '<button class="menu-btn" aria-label="Toggle navigation">&#9776;</button>' +
    '<a class="brand" href="' + href("index.html") + '">' +
      '<span class="logo">⚡</span><span>Physics II Final</span></a>' +
    '<span class="sub">Electricity &amp; Magnetism · PHYS102/104</span>' +
    '<span class="spacer"></span>' +
    '<a class="ghost-link" href="' + href("index.html") + '#formula-sheet">Formula sheet</a>';
  document.body.insertBefore(topbar, document.body.firstChild);

  /* ---------- Sidebar ---------- */
  var sidebar = document.createElement("nav");
  sidebar.className = "sidebar";
  var html = "";
  UNITS.forEach(function (u) {
    html += '<div class="unit"><p class="unit-title">' + u.name + "</p>";
    u.topics.forEach(function (t) {
      var active = (t.slug === current) ? " active" : "";
      html += '<a class="navlink' + active + '" href="' + href(fileFor(t)) + '">' +
                '<span class="num">' + t.n + "</span><span>" + t.title + "</span></a>";
    });
    html += "</div>";
  });
  sidebar.innerHTML = html;
  topbar.after(sidebar);

  /* ---------- Mobile backdrop ---------- */
  var backdrop = document.createElement("div");
  backdrop.className = "backdrop";
  sidebar.after(backdrop);

  var menuBtn = topbar.querySelector(".menu-btn");
  function closeNav() { document.body.classList.remove("nav-open"); }
  menuBtn.addEventListener("click", function () { document.body.classList.toggle("nav-open"); });
  backdrop.addEventListener("click", closeNav);
  sidebar.addEventListener("click", function (e) { if (e.target.closest("a")) closeNav(); });

  /* ---------- Prev / next pager ---------- */
  var page = document.querySelector(".page");
  var idx = FLAT.findIndex(function (t) { return t.slug === current; });
  if (page && idx !== -1) {
    var prev = FLAT[idx - 1];
    var next = FLAT[idx + 1];
    var pager = document.createElement("nav");
    pager.className = "pager";
    pager.innerHTML =
      (prev
        ? '<a class="prev" href="' + href(fileFor(prev)) + '"><span class="dir">← Previous</span><br><span class="ttl">' + prev.n + ". " + prev.title + "</span></a>"
        : '<a class="prev" href="' + href("index.html") + '"><span class="dir">← Home</span><br><span class="ttl">Overview &amp; formula sheet</span></a>') +
      (next
        ? '<a class="next" href="' + href(fileFor(next)) + '"><span class="dir">Next →</span><br><span class="ttl">' + next.n + ". " + next.title + "</span></a>"
        : '<span class="empty"></span>');
    page.appendChild(pager);
  }

  /* ---------- Solution show/hide toggles ---------- */
  document.querySelectorAll(".solution-toggle").forEach(function (btn) {
    btn.setAttribute("aria-expanded", "false");
    btn.addEventListener("click", function () {
      var sol = btn.parentElement.querySelector(".solution") ||
                document.getElementById(btn.getAttribute("data-target"));
      if (!sol) return;
      var open = sol.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.textContent = open ? "Hide solution" : "Show solution";
    });
  });

  /* ---------- Render math (offline KaTeX auto-render) ---------- */
  function renderMath() {
    if (window.renderMathInElement) {
      window.renderMathInElement(document.body, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "\\[", right: "\\]", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
        ],
        throwOnError: false,
      });
    }
  }
  if (document.readyState !== "loading") renderMath();
  else document.addEventListener("DOMContentLoaded", renderMath);
})();
