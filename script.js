const HEXMAP = "0123456789ABCDEF".split("");


document.querySelector("button").onclick = generateHexVal;

function generateHexVal() {
  let randomVals = [],
    HEXVAL = ["#"];
  while (randomVals.length < 6) {
    randomVals.push(randomNumber(16));
  }
  randomVals.forEach((val) => {
    HEXVAL.push(HEXMAP[val]);
  });
  updateUI(HEXVAL.join(""));
  return true;
}

function randomNumber(MAX) {
  return Math.floor(Math.random() * Math.floor(MAX));
}
function updateUI(HEXVAL) {
    updateBackgroundColor(HEXVAL);
    updateHexCode(HEXVAL);
}

function updateBackgroundColor(HEXVAL) {
    document.body.style.backgroundColor = HEXVAL;
}
function updateHexCode(HEXVAL) {
    document.getElementById("HexVal").innerText = HEXVAL;
}