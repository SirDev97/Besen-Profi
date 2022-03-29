const menuOpen = document.querySelector('.menu');
const menuClose = document.querySelector('.menu-close');
const navList = document.querySelector('.nav__list');

menuOpen.addEventListener('click', () => {
  navList.classList.replace('d-none', 'd-flex');
  menuOpen.classList.toggle('d-none');
  menuOpen.classList.toggle('d-block');
  menuClose.classList.toggle('d-none');
  menuClose.classList.toggle('d-block');
});

menuClose.addEventListener('click', () => {
  navList.classList.replace('d-flex', 'd-none');
  menuOpen.classList.toggle('d-none');
  menuOpen.classList.toggle('d-block');
  menuClose.classList.toggle('d-none');
  menuClose.classList.toggle('d-block');
});

function addMultiEvents(element, eventNames, listener) {
  const events = eventNames.split(' ');
  for (let i = 0, iLen = events.length; i < iLen; i++)
    element.addEventListener(events[i], listener, false);
}

addMultiEvents(window, 'load resize', function () {
  const windowWidth = window.innerWidth;

  if (windowWidth > 768) navList.classList.add('d-flex');
  if (windowWidth <= 768 && menuClose.classList.contains('d-none')) {
    navList.classList.remove('d-flex');
    navList.classList.add('d-none');
  }
});
