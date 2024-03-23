function scrollToSlide(slide) {
  document.getElementById(slide).scrollIntoView({ behavior: "smooth" });
}
function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

function scrollAndHide(slide) {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
  document.getElementById(slide).scrollIntoView({ behavior: "smooth" });
}
