//const showButton = document.querySelectorAll(".buttonArr")

document.querySelectorAll('.buttonArr').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.cardSixtSectionContent');
        const content = card.querySelector('.sixtSectionContentText');

        content.classList.toggle('hidden');


        card.classList.toggle('active');
    });
});




