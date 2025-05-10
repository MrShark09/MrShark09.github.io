function makeItRain() {
  document.querySelectorAll(".rain").forEach((t) => (t.innerHTML = ""));
  let t = 0,
    e = "",
    a = "";
  for (; t < 100; ) {
    let n = Math.floor(98 * Math.random()) + 1,
      o = Math.floor(4 * Math.random()) + 2;
    t += o;
    let i = `\n      <div class="drop" style="left: ${t}%; bottom: ${
        2 * o - 1 + 100
      }%; animation-delay: 0.${n}s; animation-duration: 0.5${n}s;">\n        <div class="stem" style="animation-delay: 0.${n}s; animation-duration: 0.5${n}s;"></div>\n        <div class="splat" style="animation-delay: 0.${n}s; animation-duration: 0.5${n}s;"></div>\n      </div>`,
      r = i.replace(`left: ${t}%`, `right: ${t}%`);
    (e += i), (a += r);
  }
  (document.querySelector(".rain.front-row").innerHTML = e),
    (document.querySelector(".rain.back-row").innerHTML = a);
}
window.innerWidth < 768 &&
  [].slice
    .call(document.querySelectorAll("[data-bss-disabled-mobile]"))
    .forEach(function (t) {
      t.classList.remove("animated"),
        t.removeAttribute("data-bss-hover-animate"),
        t.removeAttribute("data-aos"),
        t.removeAttribute("data-bss-parallax-bg"),
        t.removeAttribute("data-bss-scroll-zoom");
    }),
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      "AOS" in window && AOS.init();
    },
    !1
  ),
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("button[data-target]").forEach((t) => {
      t.addEventListener("click", () => {
        let e = t.getAttribute("data-target");
        document.querySelectorAll(".scene").forEach((t) => {
          t.classList.remove("active");
        }),
          document.getElementById(e).classList.add("active");
      });
    });
  }),
  makeItRain();
