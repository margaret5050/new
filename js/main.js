window.onscroll = () => {
  const nav = document.querySelector("#navbar");
  if (this.scrollY <= 10) nav.className = "";
  else nav.className = "scroll";
};

function fading() {
  let increment = 0.045;
  let opacity = 0;
  let instance = window.setInterval(function () {
    document.getElementById("type1").style.opacity = opacity;
    opacity = opacity + increment;
    if (opacity > 1) {
      window.clearInterval(instance);
    }
  }, 100);
}
fading();

function fadingtwo() {
  let increment = 0.045;
  let opacity = 0;
  let instance = window.setInterval(function () {
    document.querySelector("h5").style.opacity = opacity;
    opacity = opacity + increment;
    if (opacity > 1) {
      window.clearInterval(instance);
    }
  }, 100);
}
fadingtwo();
