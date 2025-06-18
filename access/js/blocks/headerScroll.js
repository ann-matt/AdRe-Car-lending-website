const bgHeader = () => {
    const header = document.querySelector('.nav__container')

    window.scrollY >= 50 ? header.classList.add('bg-header')
                         : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader);