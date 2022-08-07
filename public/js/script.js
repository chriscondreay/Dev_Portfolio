const contactForm = document.querySelector('.contact-form')
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let message = document.querySelector('#message');

// Send contact info event listener

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let formData = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
  }

  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/');
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function() {
    console.log(xhr.responseText);
    if (xhr.responseText == 'success') {
      alert('Email was sent!');
      name.value = '';
      email.value = '';
      phone.value = '';
      message.value = '';
    } else {
      alert('Email not sent')
    }
  }

  xhr.send(JSON.stringify(formData));

});

// Navbar hide and reveal

// let prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   let currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector(".navbar").style.top = "0";
//   } else {
//     document.querySelector(".navbar").style.top = "-150px";
//   }
//   prevScrollpos = currentScrollPos;
// }

// Responsive hamburger
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li')

  burger.addEventListener('click', () => {
    // Toggle the nav
    nav.classList.toggle('nav-active');

    // Animating links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .4}s`
      }
    });
    
    // Animate Burger button
    burger.classList.toggle('toggle')
  });
}

const getDate = () => {
  let date = new Date().getFullYear();
  let spanEl = document.querySelector('span');
  let footerText = document.querySelector('.footer-text');

  spanEl.textContent = `${date} Chris Condreay.`;
  footerText.append(spanEl);
}

// const navSlidBack = () => {
//   const a = document.querySelector('a');
//   const nav = document.querySelector('.nav-links');
  
//   a.addEventListener('click', () => {
    
//       nav.classList.toggle('nav-toggle');
//   })
// }

// navSlidBack()

getDate();
navSlide();