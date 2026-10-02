// Theme toggle and in-page table of contents. No dependencies.
(function () {
  var root = document.documentElement;

  function currentTheme() {
    var set = root.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  var toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // Build the contents list for pages with `toc: true`.
  var toc = document.querySelector(".toc");
  var body = document.querySelector(".article__body");
  if (toc && body) {
    var list = toc.querySelector("ol");
    var heads = body.querySelectorAll("h2[id], h3[id]");
    heads.forEach(function (h) {
      var li = document.createElement("li");
      if (h.tagName === "H3") li.className = "toc__sub";
      var a = document.createElement("a");
      a.href = "#" + h.id;
      a.textContent = h.textContent;
      li.appendChild(a);
      list.appendChild(li);
    });
    if (heads.length > 1) toc.hidden = false;
  }
})();
