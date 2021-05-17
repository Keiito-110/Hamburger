const btn = document.querySelector('.c-buttonsidebar');
const sidebar = document.querySelector('.l-sidebar');
const main = document.querySelector('.c-columnlayout_main');
btn.addEventListener('click', () => {
    sidebar.classList.toggle('open-menu');
    main.classList.toggle('close-menu');
});