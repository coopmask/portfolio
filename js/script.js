const menuToggle = document.querySelector('.menu-toggle-checkbox');
const navList = document.querySelector('.nav-list');
const navItem = document.querySelector('.nav-item');
const navItemLink = document.querySelectorAll('.nav-item-link');

// Toggling the menu by clicking hamburger icon or links
const toggle = () => {
    navList.classList.toggle('active'),
    menuToggle.classList.toggle('active')
};

menuToggle.addEventListener('click', toggle);
navItemLink.forEach(e => e.addEventListener('click', toggle));