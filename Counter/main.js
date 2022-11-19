let count = 0
const counter = document.querySelector('#counter')
const buttons = document.querySelectorAll('.btn')

buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const buttonType = e.currentTarget.classList
        if (buttonType.contains('decrement')) {
            count--
        } else if (buttonType.contains('increment')) {
            count++
        } else if (buttonType.contains('reset')) {
            count = 0
        }
        if (count > 0) {
            counter.style.color = 'green'
        } else if (count < 0) {
            counter.style.color = 'red'
        } else {
            counter.style.color = 'black'
        }
        counter.textContent = count
    })
})