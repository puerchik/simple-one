window.addEventListener('scroll', function () {
    const contentHeader = document.querySelector('.content__header')

    if (window.scrollY > 10) {
        contentHeader.classList.add('content__header-scrolled')
    } else {
        contentHeader.classList.remove('content__header-scrolled')
    }
})

const responsibleSelect = document.getElementById('form-responsible')
const responsibleSelectOptions = Array.from(responsibleSelect.selectedOptions)
const responsibleSelectValues = responsibleSelectOptions.map(option => option.outerText)

const formResponsiblWwrapper = document.getElementById('form-responsible-wrapper')

responsibleSelectValues.forEach(item => {
    const p = document.createElement('p')
    p.textContent = item
    p.classList.add('form__select-selected')
    formResponsiblWwrapper.appendChild(p)
})

