const canvas = document.getElementById('desk')
const ctx = canvas.getContext('2d')
const cWidth = 400
const cHeight = 300
const dWidth = 100
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

function randomDicePoint () {
  return Math.floor(Math.random() * 6) + 1
}

init()