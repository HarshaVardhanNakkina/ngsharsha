const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = localStorage.getItem('theme');
const temp = (theme && theme === 'dark') || prefersDarkMode ? 'dark' : 'light';
// const temp = theme && theme === 'dark' ? 'dark' : 'light';
storeAndSwitch(temp);

function switchTheme() {
  const theme = document.documentElement.getAttribute('data-theme');
  const temp = theme && theme === 'dark' ? 'light' : 'dark';
  storeAndSwitch(temp);
}
function switchThemeToggleIcon(theme) {
  const themeToggle = document.getElementById('theme-toggle');
  if (theme === 'dark') {
    themeToggle.innerText = '🌞';
  } else {
    themeToggle.innerText = '🌙';
  }
}
function storeAndSwitch(theme) {
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  switchThemeToggleIcon(theme);
}
