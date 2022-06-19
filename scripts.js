const menu = document.querySelector('.menu')
const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')
const firstLinks = document.querySelector('.first-links')
const secondLinks = document.querySelector('.second-links')
const thirdLinks = document.querySelector('.third-links')
const firstTitle = document.querySelector('.first-title')
const secondTitle = document.querySelector('.second-title')
const thirdTitle = document.querySelector('.third-title')

openMenu.addEventListener('click', function() {
    menu.classList.add('open')
    closeMenu.style.display = 'block';
})

closeMenu.addEventListener('click', function() {
    menu.classList.remove('open')
    closeMenu.style.display = 'none';
})

firstTitle.addEventListener('click', function() {
    firstLinks.style.display = 'block';
})

secondTitle.addEventListener('click', function() {
    secondLinks.style.display = 'block';
})

thirdTitle.addEventListener('click', function() {
    thirdLinks.style.display = 'block';
})