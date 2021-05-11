'use strict';
// Hamburger Menu
const hamBtn = document.querySelector('.sidebar__hamburger');
const links = document.querySelector('.sidebar__links');
const btnClose = document.querySelector('.sidebar__links--close');

hamBtn.addEventListener('click', function () {
  links.style.visibility = 'visible';
});

btnClose.addEventListener('click', function () {
  links.style.visibility = 'hidden';
});

// Selection Button
const elecLink = document.querySelectorAll('.hero__details--select__link');
const btnElecLink = document.querySelector('.hero__details--select__bg');
const activeLink = document.querySelector('.active');

for (let i = 0; i < elecLink.length; i++) {
  elecLink[i].addEventListener('click', function () {
    if (i === 1) {
      btnElecLink.style.left = '100%';
      btnElecLink.style.transform = 'translateX(-100%)';
      elecLink[0].classList.remove('active');
      elecLink[i].classList.add('active');
    } else {
      btnElecLink.style.left = '0';
      btnElecLink.style.transform = 'translateX(0)';
      elecLink[1].classList.remove('active');
      elecLink[i].classList.add('active');
    }
  });
}
