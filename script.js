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

//document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes

const logo = document.querySelector('.nav__logo');

logo.alt = 'Beautiful minimalist logo';
//console.log(logo.src);
//console.log(logo.alt);
//console.log(logo.className);
//console.log(logo.getAttribute('designer')); // this will set the attributes
logo.setAttribute('company', 'Bankist');
//console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
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

const btnScrollTo = document.querySelector('.btn--scroll-to');

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

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListenner: Your reading the heading');
};

h1.addEventListener('mouseenter', alertH1); // Mouse hover

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

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

const navLink = document.querySelector('.nav__link');
const navLinks = document.querySelector('.nav__links');

navLink.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('LINK');
});
