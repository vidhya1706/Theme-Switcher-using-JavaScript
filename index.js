function isDarkMode() {
  const darkMode = localStorage.getItem("darkMode");
  return darkMode == "true";
}

function addDarkMode() {
  localStorage.setItem("darkMode", "true");
  document.getElementsByTagName("body")[0].classList.add("dark-mode");
}

function removeDarkMode() {
  localStorage.setItem("darkMode", "false");
  document.getElementsByTagName("body")[0].classList.remove("dark-mode");
}

function enableDarkMode() {
  addDarkMode();
}

function enableLightMode() {
  removeDarkMode();
}

if (isDarkMode()) {
  addDarkMode();
}
