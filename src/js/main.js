const nav = document.querySelector('.nav__list')
const navBtn = document.querySelector('.hamburger')
const allNavItems = document.querySelectorAll('.nav__list-item')
const footerYear = document.querySelector('.footer__year')


const handleNav = () => {
    navBtn.classList.toggle('is-active');
    nav.classList.toggle('nav__list--active');

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav__list--active')
            navBtn.classList.remove('is-active')
        })
    })
}

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();
navBtn.addEventListener('click', handleNav)

