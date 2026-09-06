(function () {
  const html = document.documentElement;
  const btn  = document.getElementById('theme-toggle');

  function applyTheme(isDark) {
    html.setAttribute('data-theme', isDark ? 'dark' : 'light');
    if (btn) btn.textContent = isDark ? 'light' : 'dark';
    document.querySelectorAll('img[data-light]').forEach(function (img) {
      img.src = isDark ? img.dataset.dark : img.dataset.light;
    });
  }

  function isDarkMode() {
    var t = html.getAttribute('data-theme');
    if (t === 'dark')  return true;
    if (t === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  // Apply on load — stored preference takes priority, else follow system
  var stored = localStorage.getItem('theme');
  if (stored) {
    applyTheme(stored === 'dark');
  } else {
    applyTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  // React to system preference changes (e.g. user switches OS dark mode)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches);
    }
  });

  if (btn) {
    btn.addEventListener('click', function () {
      var next = !isDarkMode();
      localStorage.setItem('theme', next ? 'dark' : 'light');
      applyTheme(next);
    });
  }
})();
