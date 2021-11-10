let num = 0;
function changeNum(){
  document.getElementById('numberDisplayed').textContent = num
}
function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);

  document.body.style.background = bgColor;
}

document.getElementById("up").addEventListener("click", () => {
  num++
  changeNum()
});

document.getElementById("down").addEventListener("click", () => {
  num --
  changeNum()
});

document.getElementById("random").addEventListener("click", () => {
  random_bg_color();
});

document.getElementById("reset").addEventListener("click", () => {
  num = 0
  document.body.style.background = "rgb(225,225,225)";
  changeNum()
});