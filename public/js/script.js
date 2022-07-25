const contactForm = document.querySelector('.contact-form')
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let message = document.querySelector('#message');

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
