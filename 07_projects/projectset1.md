# Project Related to DOM

## Project Link

[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

### Project 1

```
const buttons = document.querySelectorAll('.button')
console.log(buttons)
const body = document.querySelector('body')
console.log(body)

buttons.forEach((button)=> {
  button.addEventListener('click', (e)=>{
    body.style.backgroundColor = e.target.id
  })
})
```

### Project 2

```
const form = document.querySelector('form')
form.addEventListener('submit',(e)=>{
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = "Please give a valid height"
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = "Please give a valid weight"
  }else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    if(bmi < 18.6){
      results.innerHTML = `<span>Under Weight: ${bmi}</span>`
    }else if(bmi < 26.5){
      results.innerHTML = `<span>Normal Range: ${bmi}</span>`
    }else{
      results.innerHTML = `<span>Overweight: ${bmi}</span>`
    }
  }
})
```

### Project 3
```
const clock = document.querySelector('#clock')

setInterval(function(){
  let currDate = new Date()
  let currTime = currDate.toLocaleTimeString()
  clock.innerHTML = currTime
},1000)
```

### Project 4

```
let generatedRandomNumber = Math.round((Math.random()*100)+1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessResult = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
const p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
  submit.addEventListener('click',(e) => {
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert("Please enter a valid number")
  }else if(guess < 1){
    alert("Please enter a number more than 0")
  }else if(guess > 100){
    alert("Please enter a number less than 100")
  }else{
    prevGuess.push(guess)
    displayGuess(guess)
    checkGuess(guess)
  }
}

function checkGuess(guess){
  if(guess === generatedRandomNumber){
    displayMessage(`You guessed it right`)
    endGame()
  }else if(numGuess === 11){
    displayMessage(`Game Over. Random Number was ${generatedRandomNumber}`)
    endGame()
  }else if(guess < generatedRandomNumber){
    displayMessage(`Number is low`)
  }else if(guess > generatedRandomNumber){
    displayMessage(`Number is high`)
  }
}

function displayGuess(guess){
  userInput.value = ''
  guessResult.innerHTML += `${guess} `
  numGuess++
  remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click',(e)=>{
    generatedRandomNumber = Math.round((Math.random()*100)+1)
    prevGuess = [];
    numGuess = 1;
    guessResult.innerHTML = '';
    remaining.innerHTML = `${11-numGuess}`;
    userInput.removeAttribute(`disabled`);
    submit.removeAttribute('disabled')
    startOver.removeChild(p);
    lowOrHi.innerHTML = ''
    playGame = true;
  })
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled','')
  submit.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}


```