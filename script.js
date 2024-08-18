var i = 0;
function change() {
  i++;
  if (i == 3) i = 0;
  if (i == 0) {
    document.getElementById("xiezhen3").style.display = "none";
    document.getElementById("xiezhen1").style.display = "flex";
  } else if (i == 1) {
    document.getElementById("xiezhen1").style.display = "none";
    document.getElementById("xiezhen2").style.display = "flex";
  } else if (i == 2) {
    document.getElementById("xiezhen2").style.display = "none";
    document.getElementById("xiezhen3").style.display = "flex";
  }
}
function main() {
  document.getElementById("xiezhen1").style.opacity = "flex";
  document.getElementById("xiezhen2").style.display = "none";
  document.getElementById("xiezhen3").style.display = "none";
  setInterval(change, 5000);
}