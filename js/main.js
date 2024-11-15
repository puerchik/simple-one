// shadow while scrolling

window.addEventListener('scroll', () => {
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
            closeImg.src = './images/icons/close.svg'
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

displaySelected('form-responsible-modal', 'form-responsible-modal-wrapper')
displaySelected('form-group-modal', 'form-group-modal-wrapper')
displaySelected('form-coordinating-modal', 'form-coordinating-modal-wrapper')
displaySelected('form-who-opened-modal', 'form-who-opened-modal-wrapper')
displaySelected('form-created-by-modal', 'form-created-by-modal-wrapper')
// modal window

const dialog = document.getElementById('content-modal')
const dialogOpener = document.getElementById('dialog-opener')
const dialogCloseButton = document.getElementById('modal-close-button')

function openModalAndLockScroll() {
    dialog.showModal()
    document.body.classList.add('scroll-lock')
}

function returnScroll() {
    document.body.classList.remove('scroll-lock')
}


function closeOnBackDropClick({ currentTarget, target }) {
    const dialogElement = currentTarget
    const isClickedOnBackDrop = target === dialogElement
    if (isClickedOnBackDrop) {
        dialogElement.close()
    }
}

dialogOpener.addEventListener('click', openModalAndLockScroll)
dialogCloseButton.addEventListener('click', () => { dialog.close() })
dialog.addEventListener('close', returnScroll)
dialog.addEventListener('click', closeOnBackDropClick)

// kebab menu

document.getElementById('kebabMenu').addEventListener('click', () => {
    const dropdown = document.getElementById('dropdownContent')
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block'
})

window.addEventListener('click', event => {
    if (!event.target.matches('.kebab-menu') && !event.target.matches('.kebab-menu span')) {
        const dropdowns = document.getElementsByClassName("dropdown-content")
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = "none"
        }
    }
})
