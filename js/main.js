const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnIcon = document.querySelector('#nav-btn-icon');

navBtn.onclick = () => {
   if (nav.classList.toggle('open')) {
      navBtnIcon.src = "./img/icons/nav-close.svg"
   } else {
      navBtnIcon.src = "./img/icons/nav-open.svg"
   }
}

AOS.init({
   once: true
});