'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const section1 = document.getElementById('section--1');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const allButtons = document.getElementsByTagName('button');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section'); // this will return node list
const logo = document.querySelector('.nav__logo');
const navLink = document.querySelector('.nav__link');
const navLinks = document.querySelector('.nav__links');
const nav = document.querySelector('.nav');
const link = document.querySelector('.nav__link--btn');

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

//Page Navigation
btnScrollTo.addEventListener('click', function (e) {
  e.preventDefault();
  const s1coords = section1.getBoundingClientRect(); // getting the location of the section
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll(X/Y)', window.pageXOffset, window.pageYOffset); // getting the scroll position
  console.log(
    'height/width viewpoint',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  //Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//event doligation

// 1. Add eventListenner to a common parent element
// 2. determine what element originated the event
navLinks.addEventListener('click', function (e) {
  e.preventDefault();
  //Matcing strategy, to igone clicks that not happens on the links we need
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    console.log('Link');
  }
});

//Dom traversing

const h1 = document.querySelector('h1');
//Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children); // html collection
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

//Going Upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);
h1.closest('.header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-secondary)';

// Going sideways: siblings (previous and next one)
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
/////////
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// return html collection
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

//document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes

logo.alt = 'Beautiful minimalist logo';
//console.log(logo.src);
//console.log(logo.alt);
//console.log(logo.className);
//console.log(logo.getAttribute('designer')); // this will set the attributes
logo.setAttribute('company', 'Bankist');
//console.log(logo.getAttribute('src'));

//console.log(link.getAttribute('href')); // this will get relative path
//console.log(link.href); // this will bring absolute path

//Data attributes
//console.log(logo.dataset.versionNumber);

//Classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');

//don't use, because it will overwrite whatever already there
//logo.className = 'Ahmed';

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListenner: Your reading the heading');
// };

// h1.addEventListener('mouseenter', alertH1); // Mouse hover

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('addEventListenner: Your reading the heading');
// }; // this one is the old way

//Event handler two types Bubbling and Capturing
//Capturing event will triger the parent element before reaching the element it self ( for example if the button inside a <p> and the it's inside <section></section> and the section inside <div></div> and the div inside a <body></body>) the first element will be trigered is the body then the div then the section then the p and the last thing will be trigered will be the button.
//Capturing phase will start at the body element and the target phase will start at the button element
//Bubbling phase it the phase when the target phase is finished, then the event will travel from the child element to the parent element.
//Almost all the element have the three phases
//did
//Next we will use these events on the project

//rgb(255, 255, 255);
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// console.log(randomColor(0, 255));

// navLink.addEventListener('click', function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget); // e.target will be nav__link, because of the bubbling effect
//   //Stop propogation
//   //e.stopPropagation();
// });

// navLinks.addEventListener('click', function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = randomColor();
//   console.log('LINKS', e.target, e.currentTarget); // will be nav__link, because of the bubbling effect
//   console.log(e.currentTarget === this);
//   //Stop propogation
//   //e.stopPropagation();
// });

// nav.addEventListener('click', function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget); // e.target will be nav_link, because of the bubbling effect
//   //Stop propogation
//   //e.stopPropagation();
// });

//When we click on navLink the navLinks and Nav will triger the click event and this is the bubbling effect
