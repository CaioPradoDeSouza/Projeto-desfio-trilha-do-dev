//const showButton = document.querySelectorAll(".buttonArr")

document.querySelectorAll('.buttonArr').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.cardSixtSectionContent');
        const content = card.querySelector('.sixtSectionContentText');

        // Toggle visibilidade do texto
        content.classList.toggle('hidden');

        // Toggle do fundo com classe 'active'
        card.classList.toggle('active');
    });
});


// function showContent(){
//     let conten = document.getElementById("sixtSectionContentText")

//     if(conten.classList.contains('hidden')){
//         conten.classList.remove('hidden')
//         conten.classList.add('showing')
//     }else{
//         conten.classList.remove('showing')
//         conten.classList.add('hidden')
//     }
// }



