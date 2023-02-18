const oItems = document.querySelectorAll('.item')
const oItemsArr = Array.from(oItems)
// oItemsArr.forEach((v, i) => {
//   v.addEventListener('click', () => {
//     v.classList.add('active')
//   })
// })
let current = 0
let flag = true

const oButtons = document.querySelectorAll('.normal-button')
const oButtonsArr = Array.from(oButtons)
const oPrev = oButtons[0]
const oNext = oButtons[1]

const init = () => {
  oPrev.classList.add('disabled')
  oNext.classList.add('active')
}

const hClickNext = () => {
  oItemsArr[(current++) + 1].classList.add('active')
  if(current !== 0) {
    oPrev.classList.remove('disabled')
    oPrev.classList.add('active')
  }
  if(current === oItemsArr.length - 1) {
    oNext.classList.remove('active')
    oNext.classList.add('disabled')
  }
}

const hClickPrev = () => {
  console.log(current)
  oItemsArr[(current--)].classList.remove('active')
  if(current === 0) {
    oPrev.classList.remove('active')
    oPrev.classList.add('disabled')
  }
  if(current !== oItemsArr.length - 1) {
    oNext.classList.remove('disabled')
    oNext.classList.add('active')
  }
}

// 初始化
init()
// prev和next绑定事件
oPrev.addEventListener('click', hClickPrev)
oNext.addEventListener('click', hClickNext)