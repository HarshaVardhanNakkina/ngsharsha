if (document.readyState === 'loading') {
  // Loading hasn't finished yet
  document.addEventListener('DOMContentLoaded', function () {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = localStorage.getItem('theme');
    // const temp = (theme && theme === 'dark') || prefersDarkMode ? 'dark' : 'light';
    const temp = theme && theme === 'dark' ? 'dark' : 'light';
    localStorage.setItem('theme', temp);
    document.documentElement.setAttribute('data-theme', temp);
    switchThemeToggleIcon(temp);
  });
}

function switchTheme() {
  const theme = document.documentElement.getAttribute('data-theme');
  const temp = theme && theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', temp);
  document.documentElement.setAttribute('data-theme', temp);

  switchThemeToggleIcon(temp);
}

function switchThemeToggleIcon(theme) {
  const themeToggle = document.getElementById('theme-toggle');
  if (theme === 'dark') {
    themeToggle.innerText = '🌞';
  } else {
    themeToggle.innerText = '🌙';
  }
}
