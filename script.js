'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
/////////
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section'); // this will return node list

// console.log(allSections); // node list

const section1 = document.getElementById('section--1');
// console.log(section1);

const allButtons = document.getElementsByTagName('button'); // return html collection
// console.log(allButtons);

//console.log(document.getElementsByClassName('btn')); // return html collection

//Creating and inserting elements
//.insertAdjacentHtml
const message = document.createElement('div'); // this one will create a DOM element
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improve functionality and analytics.';
message.innerHTML =
  'We use cookies for improve functionality and analytics. <button class = "btn btn--close-cookie">Got it!</button>';

//header.prepend(message); // to add as the first child element
header.append(message); // to add as the last child element
//header.append(message.cloneNode(true)); // to add the element in multiple places.
//header.before(message);
header.after(message);
//Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    //message.remove(); // new way
    message.parentElement.removeChild(message); // old way
  });

//Styles
message.style.backgroundColor = '#37383d'; // inline styles
message.style.width = '120%'; // inline styles
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle.height, 10) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes

const logo = document.querySelector('.nav__logo');

logo.alt = 'Beautiful minimalist logo';
console.log(logo.src);
console.log(logo.alt);
console.log(logo.className);
console.log(logo.getAttribute('designer')); // this will set the attributes
logo.setAttribute('company', 'Bankist');
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.getAttribute('href')); // this will get relative path
console.log(link.href); // this will bring absolute path
