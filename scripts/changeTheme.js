function changeTheme() {
  let page = document.querySelector("body");
  let icon = document.querySelector(".themeMode button");
  page.classList.toggle("dark");
  if (page.classList.value == "dark") {
    icon.innerHTML = '<i class="fa fa-moon-o" aria-hidden="true"></i>';
  } else {
    icon.innerHTML = '<i class="fa fa-sun-o"></i>';
  }
}
