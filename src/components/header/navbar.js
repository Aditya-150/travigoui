const anchor = document.querySelectorAll("navbar-link");

anchor.forEach((anchor) => anchor.addEventListener("click", onClick));

function onClick(e) {
  anchor.forEach((anchor) => anchor.classList.remove("active"));
  e.target.classList.add("active");
}
