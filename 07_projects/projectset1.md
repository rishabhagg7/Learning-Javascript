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