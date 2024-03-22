'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const subBtn = document.getElementById('subscribing-btn');
  const email = document.getElementById('email');
  const errorMsg = document.getElementById('error-msg');
  const successMsg = document.getElementById('success-msg');
  const mainContent = document.getElementById('main-content');

  const emailFormat = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

  email.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      subBtn.click();
    }
  });

  subBtn.addEventListener('click', function () {
    if (!email.value.match(emailFormat)) {
      errorMsg.classList.remove('hidden');
      email.className = 'email-input-error';
    } else {
      errorMsg.classList.add('hidden');
      email.classList.remove('email-input-error');
      mainContent.className = 'hidden';
      successMsg.classList.remove('hidden');
    }
  });
});
