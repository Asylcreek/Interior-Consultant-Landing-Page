document.querySelector('.button').addEventListener('click', (event) => {
    const parent = event.target.closest('.button');
    parent.classList.toggle('active');
    document.querySelector('.popup-navbar').classList.toggle('active');
});