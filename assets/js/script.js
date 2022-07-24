// let inputEl = document.querySelector('input');

// function sendMail() {
//   let params = {
//     name: document.querySelector('#name').value,
//     email: document.querySelector('#email').value,
//     phone: document.querySelector('#phone').value,
//     message: document.querySelector('#message').value,
//   };
//   emailjs.send('service_zb21x3m', 'template_5o1bdzs', params)
//   .then(function(res) {
//     inputEl.textContent = '';
//     alert('Success!');
//   })
// }

function sendMail() {
  Email.send({
    SecureToken: "b9c509a9-537f-4658-92f5-f8d210b6c93b",
    To : 'condreaychris@gmail.com',
    From : document.querySelector('#email').value,
    Subject : "New Contact Form Inquery",
    Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

