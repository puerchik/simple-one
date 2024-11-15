// shadow while scrolling

window.addEventListener('scroll', function () {
    const contentHeader = document.querySelector('.content__header')

    if (window.scrollY > 10) {
        contentHeader.classList.add('content__header-scrolled')
    } else {
        contentHeader.classList.remove('content__header-scrolled')
    }
})


// display of selected elements of the select

function displaySelected(selectId, wrapperId) {
    const select = document.getElementById(selectId)
    const selectedOptions = Array.from(select.selectedOptions)
    const selectedOptionsText = selectedOptions.map(option => option.outerText)
    const isMultiple = select.multiple
    const wrapper = document.getElementById(wrapperId)

    selectedOptionsText.forEach(item => {
        const p = document.createElement('p')

        p.textContent = item
        p.classList.add('form__select-selected')
        wrapper.appendChild(p)

        if (isMultiple) {
            const btn = document.createElement('button')
            const closeImg = document.createElement('img')

            btn.type = 'button'
            closeImg.src = './../images/icons/close.svg'
            btn.classList.add('form__select-selected-button')
            p.classList.add('form__select-selected-multiple')
            p.appendChild(btn)
            btn.appendChild(closeImg)
        }
    })
}

displaySelected('form-responsible', 'form-responsible-wrapper')
displaySelected('form-group', 'form-group-wrapper')
displaySelected('form-coordinating', 'form-coordinating-wrapper')
displaySelected('form-who-opened', 'form-who-opened-wrapper')
displaySelected('form-created-by', 'form-created-by-wrapper')