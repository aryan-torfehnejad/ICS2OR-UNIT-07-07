document.getElementById('button').addEventListener('click',click)

let firstNum=0
let secondNum=0
let counter=0
let answer = 0
let negative=0

function click () {
  firstNum = document.getElementById ('input').value
  secondNum = document.getElementById ('input2').value
  firstNum = parseInt(firstNum)
  secondNum = parseInt(secondNum)
  answer = 0
  negative = false

  if (firstNum < 0) {
    negative = !negative
    firstNum = Math.abs(firstNum)
  }
  if (secondNum < 0) {
    negative = !negative
    secondNum = Math.abs(secondNum)
  }

  for (counter = 0; counter < firstNum; counter ++)
  {
    answer = answer + secondNum
  }
  document.getElementById('answer').innerHTML = answer
}