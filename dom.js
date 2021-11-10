let num = 0;
function changeNum(){
  document.getElementById('numberDisplayed').textContent = num
}

document.getElementById("up").addEventListener("click", () => {
  num++
  changeNum()
});

document.getElementById("down").addEventListener("click", () => {
  num--
  changeNum()
});

document.getElementById("random").addEventListener("click", () => {
  num += Math.random()
  changeNum()
});

document.getElementById("reset").addEventListener("click", () => {
  num = 0
  changeNum()
});