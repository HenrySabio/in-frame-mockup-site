const toggleTag = document.querySelector('.toggle-nav');
const mainTag = document.querySelector('main');

toggleTag.addEventListener('click', function () {
    mainTag.classList.toggle('open');

    if (mainTag.classList.contains('open')) {
        toggleTag.innerHTML = '<img src="img/close.svg" alt="close menu"> Close';
    } else {
        toggleTag.innerHTML = '<img src="img/menu.svg" alt="open menu"> Menu';
    }
});