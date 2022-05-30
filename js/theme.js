const themeButton = document.getElementById("theme-button");
const body = document.body;
let theme = localStorage.getItem("theme");

if (theme) {
  body.classList.add(theme);
}

themeButton.onclick = () => {
  if (body.classList.contains("dark")) {
    body.classList.replace("dark", "light");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.replace("light", "dark");
    localStorage.setItem("theme", "dark");
  }
};
