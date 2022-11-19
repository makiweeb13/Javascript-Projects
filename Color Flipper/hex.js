
const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
const flipperBtn = document.getElementById('flipper-btn')
const color = document.querySelector('.color')

flipperBtn.addEventListener('click', function() {
    let hex = '#'
    document.body.style.backgroundColor = getHexValue(hex)
    color.textContent = getHexValue(hex)
})

function getRandomNum() {
    return Math.floor(Math.random()*16)
}

function getHexValue(hex) {
    for (let i = 0; i < 6; i++) {
        hex += hexValues[getRandomNum()]
    }
    return hex
}