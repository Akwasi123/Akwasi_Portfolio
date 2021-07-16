const burger = document.querySelector('.burger');
const nav = document.querySelector('.navlinks');

burger.addEventListener('click', () =>{
    burger.classList.toggle('toggle');
    nav.classList.toggle('showNav')
    
})