let hard = document.querySelector('#hardButton')
let easy = document.querySelector('#easyButton')
let h1 = document.querySelector('h1')
let message = document.querySelector('#message')
let resetButton = document.querySelector('button#reset')
let cuadros = document.querySelectorAll('.square');
let color = document.querySelector('#colorDisplay')

function reset() {
  colors = [];
  let type = (hard.classList.contains('selected') ? 6 : 3) 

  function randomColor() {
    return Math.trunc(Math.random() * 255);
  }

  function generateRandomColors() {
    let i = 0
    while(i < type){
      let color = 'rgb(' + randomColor() + ', ' + randomColor() + ', ' + randomColor() + ')'
      colors.push(color)
      i++
    }
  }
  generateRandomColors()

  function pickColor(max) {
    return Math.trunc(Math.random() * type);
  }
  
  let pickedColor = colors[pickColor()]
  document.querySelector('#colorDisplay').textContent = pickedColor

  for (let i = 0; i < cuadros.length; i++) {
    if (colors[i] == undefined) {
      cuadros[i].style.display = 'none'
    }else{
      cuadros[i].style.backgroundColor = colors[i];
      cuadros[i].style.display = 'block'

    }
    cuadros[i].addEventListener("click", comprobarColor)
  }
}



for (let i = 0; i < cuadros.length; i++) {
  cuadros[i].addEventListener("click", comprobarColor)
}

function changeColors(color) {
  for (let i = 0; i < cuadros.length; i++) {
    cuadros[i].style.backgroundColor = color;
  }
}

function comprobarColor() {
  color = document.querySelector('#colorDisplay').textContent
  if (this.style.backgroundColor == color) {
    let colorCorrecto = this.style.backgroundColor
    this.addEventListener('click', changeColors(colorCorrecto))
    h1.style.backgroundColor = colorCorrecto
    message.textContent = '¡Correcto!'
    resetButton.textContent = 'Play Again?'
  } else {
    this.style.backgroundColor = 'darkgreen'
    message.textContent = 'Intentalo Nuevamente'
  }
}


hard.addEventListener('click', function () {
  this.classList.add('selected')
  easy.classList.remove('selected')
  reset();
})

easy.addEventListener('click', function () {
  this.classList.add('selected')
  hard.classList.remove('selected')
  reset();
})


document.querySelector('button#reset').addEventListener('click', function() {
  resetButton.textContent = 'Nuevos Colores'
  message.textContent = ''
  h1.style.backgroundColor = 'darkgreen'
  reset();
})

window.onload(reset())