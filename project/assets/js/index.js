const EVENT_POSY = 400;
const startedButtonRef = document.getElementById('startedButton');
window.addEventListener('scroll', () => {
    if (window.scrollY >= EVENT_POSY) {
        startedButtonRef.classList.add('green-button');
    }
    else {
        startedButtonRef.classList.remove('green-button');
    }
});