const nav = document.querySelector('.nav__list')
const navBtn = document.querySelector('.hamburger')
const allNavItems = document.querySelectorAll('.nav__list-item')
const teamTiles = document.querySelectorAll('.team__wrapper-tile')
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

function handleTeam() {
    if (this.firstElementChild.classList.contains('active-team')) {
        this.firstElementChild.classList.remove('active-team')
    } else {
        closehandleTeam()
        this.firstElementChild.classList.toggle('active-team');
    }

}

const closehandleTeam = () => {
    const allActiveItems = document.querySelectorAll('.team__wrapper-tile-info')
    allActiveItems.forEach(item => item.classList.remove('active-team'))
}

const clickOutsideTeam = e => {
    if (e.target.classList.contains('team__wrapper-tile') || e.target.classList.contains('team__wrapper-tile-info') ||
        e.target.classList.contains('team-title-three') || e.target.classList.contains('team-text')
    ) {
        return
    } else {
        closehandleTeam()
    }
}

const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();
navBtn.addEventListener('click', handleNav)
teamTiles.forEach(teamTile => teamTile.addEventListener('click', handleTeam))
window.addEventListener('click', clickOutsideTeam)
