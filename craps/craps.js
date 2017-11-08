const canvas = document.getElementById('desk')
const ctx = canvas.getContext('2d')
const cWidth = 400
const cHeight = 300
const diceX = 50
const diceY = 50
const diceW = 100
const dotRadius = 6

function init () {
  drawDice(randomDicePoint())
}

function drawDice(n) {
  switch (n) {
    case 1: console.log(1); break
    case 2: console.log(2); break
    case 3: console.log(3); break
    case 4: console.log(4); break
    case 5: console.log(5); break
    case 6: console.log(6); break  
    default:
      break
  }
}

function draw1() {
  let dotX, dotY
  ctx.beginPath()
  dotX = diceX + .5 * diceW
  dotY = diceY + .5 * diceY
  ctx.arc(dotX, dotY, 0, Math.PI * 2, true)
  ctx.closePath()
  ctx.fill()
}
function draw2() {}
function draw3() {}
function draw4() {}
function draw5() {}
function draw6() {}

function randomDicePoint () {
  return Math.floor(Math.random() * 6) + 1
}

init()