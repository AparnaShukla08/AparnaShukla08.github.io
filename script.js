//scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.addEventListener('scroll',function(){
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop-150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
    };
});
})
    

//sticky navbar
window.onscroll=()=>{
  let header= document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY>100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active')
}

//toggle hamburger icon into close button
let menuIcon= document.getElementById('menu-icon')
let navbar= document.querySelector('.navbar');
menuIcon.onclick=()=>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active')
}

//

ScrollReveal({
  //  reset: true,
   distance:'80px',
   duration:2000,
   delay:200
});
ScrollReveal().reveal('.home-content, .heading, ', {origin:'top'})
ScrollReveal().reveal('.home-image, .services-container,.portfolio-box,.bar', {origin:'bottom'})
ScrollReveal().reveal('.home-content h1,.heading,.technical-skill', {origin:'left'})
ScrollReveal().reveal('.home-content p', {origin:'right'})




const moreProject= document.getElementById('project-heading');
moreProject.addEventListener('click', function(){
  document.querySelector('.more-project').style.display='block';
  document.getElementById('contact').style.backgroundColor='rgb(3, 54, 49)';
  document.getElementById('project-heading-less').style.display='block';
})
const lessProject= document.getElementById('project-heading-less');
lessProject.addEventListener('click',function(){
  document.querySelector('.more-project').style.display='none';
  document.getElementById('project-heading-less').style.display='none'
  document.getElementById('contact').style.backgroundColor='rgb(2, 26, 24)';
})



var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true
  },
  keyboard: {
    enabled: true
  },
  mousewheel: {
    thresholdDelta: 70
  },
  spaceBetween: 60,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});
