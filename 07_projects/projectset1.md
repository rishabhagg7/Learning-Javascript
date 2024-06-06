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