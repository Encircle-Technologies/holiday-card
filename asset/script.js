$(document).ready(function () {
  var e = document.getElementById("popupclose"),
    t = document.getElementById("overlay"),
    n = document.getElementById("btnclose"),
    s = document.getElementById("iframe");
  e.addEventListener("click", function e() {
    t.classList.add("open"),
      s.classList.toggle("fade-in"),
      btnclose.classList.toggle("fade-in");
  }),
    n.addEventListener("click", function e() {
      t.classList.remove("open");
    });
});
