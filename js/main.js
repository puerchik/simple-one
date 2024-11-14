window.addEventListener('scroll', function () {
    const contentHeader = document.querySelector('.content__header');

    if (window.scrollY > 10) {
        contentHeader.classList.add('content__header-scrolled');
    } else {
        contentHeader.classList.remove('content__header-scrolled');
    }
});