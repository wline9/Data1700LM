document.addEventListener("DOMContentLoaded", () => {

    const nextButton = document.getElementById('nextButton');
    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');

    nextButton.addEventListener('click', () => {
        section1.classList.add('hidden');
        section2.classList.remove('hidden');
    });
});