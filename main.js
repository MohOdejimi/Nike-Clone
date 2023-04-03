const openMenu = document.querySelector('.openmenu')
const closeMenu = document.querySelector('.closemenu')
const mainMenu = document.querySelector('header nav ul')


openMenu.addEventListener('click', show)
closeMenu.addEventListener('click', close)

function show () {
  mainMenu.style.display = 'flex'
  mainMenu.style.top = '0'
}
function close () {
  mainMenu.style.top = '100%'
}
