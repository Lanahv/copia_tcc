//Script para os botoes de navegação do slide
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");



var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");


}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
    sliderNav(i);
    });
});



//navbar

// Script para o botão de toggle do menu
// const toggleBtn = document.querySelector('.toggle_btn');
// const menu = document.querySelector('.menu');

// toggleBtn.onclick = function() {
//     menu.classList.toggle('open'); // Alternar a classe 'open' no menu
// }

const toggleBtn = document.querySelector('.toggle_btn');
const menu = document.querySelector('.menu');

toggleBtn.onclick = function() {
    menu.classList.toggle('open'); // Alternar a classe 'open' no menu
}


