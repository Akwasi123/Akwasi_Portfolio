const burger = document.querySelector('.burger');
const nav = document.querySelector('.navlinks');
let clicked = false;

burger.addEventListener('click', () =>{
    if(!clicked){
        burger.classList.toggle('toggle');
        nav.classList.toggle('showNav')
        clicked = true;
    }
    else{
        burger.classList.toggle('toggle');
        nav.classList.toggle('showNav')
        clicked = false;
    }
    
});

const navLinks = document.querySelectorAll('.navlinks li');

navLinks.forEach((link)=>{
    link.addEventListener('click', ()=>{
        nav.classList.remove('showNav')
        burger.classList.remove('toggle')
    })
})


const header = document.querySelector('.navbar');
const scrollButton = document.querySelector('.scrollToTop');
window.onscroll = function(){
    scrollFunction();
    // headerFunction();
};

function scrollFunction(){
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
        scrollButton.style.display = 'block';
        header.classList.add('stickyH');
    }
    else{
        scrollButton.style.display = 'none';
        header.classList.remove('stickyH');
    }
}

topFunction = ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
