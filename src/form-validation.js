// form
const FORM = document.getElementById('signUpForm');
const FIRST_NAME = document.getElementById('firstName');
const LAST_NAME = document.getElementById('lastName');
const EMAIL = document.getElementById('email');
const PHONE_NUM = document.getElementById('phoneNumber');
const PASSWORD = document.getElementById('password');
const PASSWORD_CONFIRM = document.getElementById('confirmPassword');

// form hints
const FIRST_NAME_HINT = document.getElementById('firstNameHint');
const LAST_NAME_HINT = document.getElementById('lastNameHint');
const EMAIL_HINT = document.getElementById('emailHint');
const PHONE_NUM_HINT = document.getElementById('phoneNumberHint');
const PASSWORD_HINT = document.getElementById('passwordHint');
const PASSWORD_CONFIRM_HINT = document.getElementById('confirmPasswordHint');

// when user clicks "Create Account!" without entering anything ********
FORM.addEventListener('submit', (event) => {
  event.preventDefault();

  if (FIRST_NAME.value === '') {
    FIRST_NAME.style.border = '1px solid #ff0000';
    FIRST_NAME_HINT.textContent = '*This field is required';
  } if (LAST_NAME.value === '') {
    LAST_NAME.style.border = '1px solid #ff0000';
    LAST_NAME_HINT.textContent = '*This field is required';
  } if (EMAIL.value === '') {
    EMAIL.style.border = '1px solid #ff0000';
    EMAIL_HINT.textContent = '*This field is required';
  } /* if (PHONE_NUM.value === '') {
    PHONE_NUM_HINT.style.color = '#808080';
    PHONE_NUM_HINT.textContent = 'This field is optional';
  } */ if (PASSWORD.value === '') {
    PASSWORD.style.border = '1px solid #ff0000';
    PASSWORD_HINT.textContent = '*This field is required';
  } if (PASSWORD_CONFIRM.value === '') {
    PASSWORD_CONFIRM.style.border = '1px solid #ff0000';
    PASSWORD_CONFIRM_HINT.textContent = '*Password does not match';
  }
});
// ********
function passwordDoesMatch() {
  return PASSWORD.value === PASSWORD_CONFIRM.value;
}

function passwordDoesNotMatch() {
  return PASSWORD.value !== PASSWORD_CONFIRM.value;
}

function validateEmail(email) {
  // eslint-disable-next-line no-useless-escape
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return EMAIL_REGEX.test(email);
}

// function validatePassword(password) {
// eslint-disable-next-line max-len
//   const PASS_REGEX = /^(?=.*[!@#$%^&*_-])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9].*[0-9])(?=.*[A-Z].*[A-Z])(?=.*[!@#$%^&*_-].*[!@#$%^&*_-])(?!.*(.)\1)[!@#$%^&*_-a-zA-Z0-9]{8,32}$/;
//   /* password rules:
//     1. Contains at least two digits
//     2. Contains at least two uppercase letters
//     3. Contains at least two special characters
//     4. No consecutive repeating characters
//   */
//   return PASS_REGEX.test(password);
// }

function checkInputEvent() {
  FIRST_NAME.addEventListener('focus', () => {
    FIRST_NAME.style.border = '1px solid #808080';
    FIRST_NAME_HINT.textContent = '';
  });
  FIRST_NAME.addEventListener('blur', () => {
    if (FIRST_NAME.value === '') {
      FIRST_NAME.style.border = '1px solid #ff0000';
      FIRST_NAME_HINT.textContent = '*This field is required';
    } else {
      FIRST_NAME.style.border = '1px solid #008000';
      FIRST_NAME_HINT.textContent = '';
    }
  });

  LAST_NAME.addEventListener('focus', () => {
    LAST_NAME.style.border = '1px solid #808080';
    LAST_NAME_HINT.textContent = '';
  });
  LAST_NAME.addEventListener('blur', () => {
    if (LAST_NAME.value === '') {
      LAST_NAME.style.border = '1px solid #ff0000';
      LAST_NAME_HINT.textContent = '*This field is required';
    } else {
      LAST_NAME.style.border = '1px solid #008000';
      LAST_NAME_HINT.textContent = '';
    }
  });

  EMAIL.addEventListener('focus', () => {
    EMAIL.style.border = '1px solid #808080';
    EMAIL_HINT.textContent = '';

    if (validateEmail(EMAIL.value) === false && EMAIL.value !== '') {
      EMAIL.style.border = '1px solid #ff0000';
      EMAIL_HINT.textContent = '*Please enter a valid email';
    }
  });
  EMAIL.addEventListener('blur', () => {
    EMAIL.style.border = '1px solid #ff0000';
    EMAIL_HINT.textContent = '*This field is required';

    if (EMAIL.value !== '' && validateEmail(EMAIL.value) === true) {
      EMAIL.style.border = '1px solid #008000';
      EMAIL_HINT.textContent = '';
    } else if (EMAIL.value !== '' && validateEmail(EMAIL.value) === false) {
      EMAIL.style.border = '1px solid #ff0000';
      EMAIL_HINT.textContent = '*Please enter a valid email';
    }
  });

  PHONE_NUM.addEventListener('focus', () => {
    PHONE_NUM.style.border = '1px solid #808080';
    PHONE_NUM_HINT.textContent = '';
  });
  PHONE_NUM.addEventListener('blur', () => {
    if (PHONE_NUM.value === '') {
      PHONE_NUM.style.border = '1px solid #808080';
      PHONE_NUM_HINT.textContent = '*This field is optional';
    }
  });

  PASSWORD.addEventListener('focus', () => {
    PASSWORD.style.border = '1px solid #808080';
    PASSWORD_HINT.textContent = '';

    if (passwordDoesNotMatch() && PASSWORD.value !== '') {
      PASSWORD.style.border = '1px solid #ff0000';
      PASSWORD_HINT.textContent = '*Passwords do not match';
    }
  });
  PASSWORD.addEventListener('blur', () => {
    if (PASSWORD.value === '') {
      PASSWORD.style.border = '1px solid #ff0000';
      PASSWORD_HINT.textContent = '*This field is required';
    } else if (passwordDoesNotMatch() && PASSWORD_CONFIRM.value === '') {
      PASSWORD.style.border = '1px solid #808080';
      PASSWORD_HINT.textContent = '';
    } else if (passwordDoesMatch()) {
      PASSWORD.style.border = '1px solid #808080';
      PASSWORD_HINT.textContent = '';
      PASSWORD_CONFIRM.style.border = '*1px solid #808080';
      PASSWORD_CONFIRM_HINT.textContent = '';
      PASSWORD.style.border = '1px solid #008000';
      PASSWORD_CONFIRM.style.border = '1px solid #008000';
    } else {
      PASSWORD.style.border = '1px solid #ff0000';
      PASSWORD_HINT.textContent = '*Passwords do not match';
      PASSWORD_CONFIRM.style.border = '1px solid #ff0000';
      PASSWORD_CONFIRM_HINT.textContent = '*Passwords do not match';
    }
  });

  PASSWORD_CONFIRM.addEventListener('focus', () => {
    PASSWORD_CONFIRM.style.border = '1px solid #808080';
    PASSWORD_CONFIRM_HINT.textContent = '';

    if (passwordDoesNotMatch() && PASSWORD_CONFIRM.value !== '') {
      PASSWORD_CONFIRM.style.border = '1px solid #ff0000';
      PASSWORD_CONFIRM_HINT.textContent = '*Passwords do not match';
    }
  });
  PASSWORD_CONFIRM.addEventListener('blur', () => {
    if (PASSWORD_CONFIRM.value === '') {
      PASSWORD_CONFIRM.style.border = '1px solid #ff0000';
      PASSWORD_CONFIRM_HINT.textContent = '*This field is required';
    } else if (passwordDoesMatch()) {
      PASSWORD_CONFIRM.style.border = '1px solid #808080';
      PASSWORD_CONFIRM_HINT.textContent = '';
      PASSWORD.style.border = '1px solid #808080';
      PASSWORD_HINT.textContent = '';
      PASSWORD_CONFIRM.style.border = '1px solid #008000';
      PASSWORD.style.border = '1px solid #008000';
    } else {
      PASSWORD_CONFIRM.style.border = '1px solid #ff0000';
      PASSWORD_CONFIRM_HINT.textContent = '*Passwords do not match';
      PASSWORD.style.border = '1px solid #ff0000';
      PASSWORD_HINT.textContent = '*Passwords do not match';
    }
  });
}

checkInputEvent();
