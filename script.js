const imagem = document.getElementById('imagem');
const opcao1 = document.getElementById('opcao1');
const opcao2 = document.getElementById('opcao2');
const imageContainer = document.querySelector('.image-container');

opcao1.addEventListener('click', function () {
    imagem.src = 'blusa-vermelha-removebg-preview.png'; 
    imageContainer.classList.remove('selected-black');
    imageContainer.classList.add('selected');
});

opcao2.addEventListener('click', function () {
    imagem.src = 'blusa-preta-removebg-preview.png'; 
    imageContainer.classList.remove('selected');
    imageContainer.classList.add('selected-black');
});

window.addEventListener('load', function () {
    document.getElementById('opcao2').removeAttribute('checked');
});