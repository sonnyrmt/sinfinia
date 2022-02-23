let header = document.querySelector("header");
let navHam = document.querySelector(".fa-bars");
let wpp = document.querySelector(".fa-whatsapp");


window.addEventListener('scroll' , function() {
  header.classList.toggle("sticky", window.scrollY > 0);
  navHam.classList.toggle("sticky-icons" , window.scrollY > 0);
  wpp.classList.toggle("sticky-icons" , window.scrollY > 0);
});

/* navbar black when scroll */
/* hamburguer function */
let menu = document.getElementById("menu");

function toggle(element) {
  element.classList.toggle("change");
  if (element.classList.value == 'fa fa-bars sticky-icons change' || element.classList.value == 'fa fa-bars change' ) {
    element.classList.replace("fa","fas");
    element.classList.replace("fa-bars", "fa-times");
  } else if (element.classList.value == 'fas fa-times sticky-icons' || element.classList.value == 'fas fa-times') {
    element.classList.replace("fas","fa");
    element.classList.replace("fa-times","fa-bars");
  }
}

function toggleLinks() {
  navHam.classList.remove('change');
  navHam.classList.replace('fas', 'fa')
  navHam.classList.replace('fa-times', 'fa-bars')
}

/* hamburguer function */
/* animation when scroll */
window.sr = ScrollReveal({reset: true});

sr.reveal('.hero-text h1', {
  duration: 1500,
  origin: 'bottom',
  distance: '-80px'
});

sr.reveal('.hero-text p', {
  duration: 3000,
  origin: 'bottom',
  distance: '-30px'
});

sr.reveal('.hero-text a', {
  duration: 3000,
  origin: 'bottom',
  distance: '-80px'
});

sr.reveal('.about-container', {
  duration: 1500,
});

sr.reveal('#about-title', {
  duration: 1500,
  origin: 'top',
  distance: '-50px'
});

sr.reveal('#about-subtitle', {
  duration: 3000,
  origin: 'top',
  distance: '-50px'
});

sr.reveal('.block', {
  duration: 1500,
  origin: 'top',
  distance: '-50px'
});

sr.reveal('#action', {
  duration: 1500,
  origin: 'top',
  distance: '-50px'
});

/* animation when scroll */
/* contact section */

let button = document.querySelector('.button');
let buttonText = document.querySelector('.tick');
let nameArea = document.querySelector('.name-');
let emailArea = document.querySelector('.email-');
let textArea = document.querySelector('.text-');
let textAreaArroba = textArea.value;

const tickMark = "<svg width=\"20\" height=\"30\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";

buttonText.innerHTML = "Submit";

button.addEventListener('click', function() {

  if (buttonText.innerHTML !== "Submit") {
    buttonText.innerHTML = "Submit";
  } else if (nameArea.value !== "" && emailArea.value !== "" && textArea !== "" && textAreaArroba.includes("@")) {
    this.classList.toggle('button__circle');
    buttonText.innerHTML = tickMark;
    document.getElementById('action').action = 'https://formsubmit.co/sonnyrmt@gmail.com';
  }
});



/* window.addEventListener('scroll', reveal);

function reveal() {
  let reveals = document.querySelectorAll('.reveal');

  for(let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 100;

    if(revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
} */

let test = document.querySelector(".text--quote");
let testL = test.innerHTML;
console.log(testL.length);