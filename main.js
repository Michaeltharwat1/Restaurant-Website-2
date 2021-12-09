
// Show Menu Bar When Click Toggle

const nav = document.querySelector('.nav');
const toggle = document.querySelector('.toggle-menu');

toggle.onclick = function(){
    nav.classList.toggle('show-nav')
}
// Remove Menu Bar

const navLink = document.querySelectorAll('.nav-link')
function linkAction(){
    const navMenu = document.querySelector('.nav')
    navMenu.classList.remove('show-nav')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


// Change Active Link

const linkColor = document.querySelectorAll('.nav-link')
function colorLink(){
    if(linkColor){
        linkColor.forEach(L => L.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(L => L.addEventListener('click', colorLink));

// Box Shadow on Header When Scroll Down

function scrollHeader(){
    const scrollHeader = document.querySelector('.header')
    if(this.scrollY >= 200){
        scrollHeader.classList.add('scroll-header')
    }
    else{
        scrollHeader.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader);

// Scroll Top Button

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 560){
        scrollTop.classList.add('scroll-top')
    }
    else{
        scrollTop.classList.remove('scroll-top')
    }
}
window.addEventListener('scroll', scrollTop);
