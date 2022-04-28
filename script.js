// tomando clases
const navigation = document.querySelector('.js-navigation')
const btn1 = document.querySelector('.js-button__cerrar')
const btn2 = document.querySelector('.js-button__abrir')
const menu = document.querySelector('.js-show-menu')
const btn3 = document.querySelector('.js-show-button')

// evento
btn2.addEventListener('click', mostrarMenu)
btn1.addEventListener('click', cerrarMenu)

//fuciones 
function mostrarMenu () {
  btn1.classList.add('block')
  btn2.classList.add('hide')
  navigation.classList.add('active')
}

function cerrarMenu() {
  btn1.classList.remove('block')
  btn2.classList.remove('hide')
  navigation.classList.remove('active')
}


