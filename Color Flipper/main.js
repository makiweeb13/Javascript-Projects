const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025']
const flipperBtn = document.getElementById('flipper-btn')
const color = document.querySelector('.color')

flipperBtn.addEventListener('click', function() {
    const randomNum = getRandomNum()
    document.body.style.backgroundColor = colors[randomNum]
    color.textContent = colors[randomNum]
})

function getRandomNum() {
    return Math.floor(Math.random()*4)
}