const oInBoxs = document.querySelectorAll('.out-box .in-box')
const oInBoxsArr = Array.from(oInBoxs)
oInBoxsArr.forEach((v, i) =>{
  v.addEventListener('click', () => {
    oInBoxsArr.forEach((val, index) => {
      val.className = 'in-box'
    })
    v.className = 'in-box active'
  })
})