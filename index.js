const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerMenuLines = hamburgerMenu.children;
const navbar = document.querySelector('.navbar');
const navbarList = document.querySelector('.navbar-list');
const bodyOverlay = document.querySelector('#hambuger-overlay');

function hamburgerMenuOpen(){
  hamburgerMenuLines[0].style.transform = 'rotate(45deg)';
  hamburgerMenuLines[0].classList.add('hamburger-row-open');
  hamburgerMenuLines[1].style.display = 'none';
  hamburgerMenuLines[2].style.transform = 'rotate(-45deg)';
  hamburgerMenuLines[2].classList.add('hamburger-row-open');
}

function hamburgerMenuClose(){
  hamburgerMenuLines[0].style.transform = 'rotate(0)';
  hamburgerMenuLines[0].classList.remove('hamburger-row-open');
  hamburgerMenuLines[1].style.display = 'block';
  hamburgerMenuLines[2].style.transform = 'rotate(0)';
  hamburgerMenuLines[2].classList.remove('hamburger-row-open');
}

hamburgerMenu.addEventListener('click', () =>{
  if(navbar.classList.contains('navbar-phone') == true){
    navbar.classList.remove('navbar-phone');
    navbarList.classList.remove('navbar-list-phone');
    hamburgerMenuClose();
    bodyOverlay.classList.remove('hambuger-overlay');
  }else{
    navbar.classList.add('navbar-phone');
    navbarList.classList.add('navbar-list-phone');
    hamburgerMenuOpen();
    bodyOverlay.classList.add('hambuger-overlay');
  }
});

const videoBTN = document.querySelector('.video-BTN');
const heroVideo = document.querySelector('#hero-video');
const videoBG = document.querySelector('#video-bg');
const videoSource = document.querySelector('#video-source');

videoBTN.addEventListener('click', () =>{
  if(heroVideo.classList.contains('hero-video') == true){
    heroVideo.classList.remove('hero-video');
    videoBG.style.display = "none";
    videoBG.classList.remove('video-bg');
  }else{
    heroVideo.classList.add('hero-video');
    videoBG.style.display = "block";
    videoBG.classList.add('video-bg');
  }
});