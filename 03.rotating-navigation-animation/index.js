const oButton = document.querySelector('.button')
const oMain = document.querySelector('.main')
const oUl = document.querySelector('ul')
oButton.addEventListener('click', () => {
  if(oMain.className === 'main') {
    oMain.className = 'main move'
    oUl.classList.add('active')
  } else {
    oMain.className = 'main'
    oUl.classList.remove('active')
  }
})

