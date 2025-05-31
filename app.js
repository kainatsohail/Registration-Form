const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
});

function validateInputs() {
  const nameValue = nameInput.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  // Name
  if (nameValue === '') {
    setError(nameInput, 'Name is required');
  } else {
    setSuccess(nameInput);
  }

  // Email
  if (emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Email is not valid');
  } else {
    setSuccess(email);
  }

  // Password
  if (passwordValue === '') {
    setError(password, 'Password is required');
  } else if (passwordValue.length < 6) {
    setError(password, 'Password must be at least 6 characters');
  } else {
    setSuccess(password);
  }

  // Confirm Password
  if (password2Value !== passwordValue || password2Value === '') {
    setError(password2, 'Passwords do not match');
  } else {
    setSuccess(password2);
  }
}

function setError(input, message) {
  const formGroup = input.parentElement;
  formGroup.className = 'form-group error';
  formGroup.querySelector('small').innerText = message;
}

function setSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.className = 'form-group success';
  formGroup.querySelector('small').innerText = '';
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}