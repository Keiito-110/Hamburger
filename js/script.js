const openbtn = document.querySelector('.c-button--menu');
const sidebar = document.querySelector('.l-sidebar');
const main = document.querySelector('.c-columnlayout--cover');
openbtn.addEventListener('click', () => {
    sidebar.classList.toggle('open-menu');
    main.classList.toggle('open-menu');
});
const closebtn = document.querySelector('.p-hamburger');
closebtn.addEventListener('click', () => {
    sidebar.classList.toggle('open-menu');
    main.classList.toggle('open-menu');
});
