const oItems = document.querySelectorAll('.item')
const oItemsArr = Array.from(oItems)
oItemsArr.forEach((v, i) => {
  v.addEventListener('click', () => {
    v.classList.add('active')
  })
})