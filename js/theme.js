(function () {
  var STORAGE_KEY = "site-theme";
  var select = document.getElementById("theme-select");

  function applyTheme(mode) {
    if (mode === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }

  function init() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") {
      applyTheme(stored);
      if (select) select.value = stored;
    } else {
      applyTheme("light");
      if (select) select.value = "light";
    }
  }

  if (select) {
    select.addEventListener("change", function () {
      var v = select.value;
      localStorage.setItem(STORAGE_KEY, v);
      applyTheme(v);
    });
  }

  init();
})();
