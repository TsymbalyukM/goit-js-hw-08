import throttle from 'lodash.throttle';

const inputEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const form = document.querySelector('.feedback-form');
const FEEDBACK_FORM_STATE = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

updateForm();

inputEl.addEventListener(
  'input',
  throttle(() => {
    formData.email = inputEl.value;
    localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(formData));
  }, 500)
);

messageEl.addEventListener(
  'input',
  throttle(() => {
    formData.message = messageEl.value;
    localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(formData));
  }, 500)
);
form.addEventListener('submit', handleSubmit);

function updateForm() {
  if (localStorage.getItem(FEEDBACK_FORM_STATE)) {
    formData.email = JSON.parse(
      localStorage.getItem(FEEDBACK_FORM_STATE)
    ).email;
    formData.message = JSON.parse(
      localStorage.getItem(FEEDBACK_FORM_STATE)
    ).message;
    inputEl.value = formData.email;
    messageEl.value = formData.message;
  } else {
    return;
  }
}
function handleSubmit(event) {
  event.preventDefault();

  if (inputEl.value && messageEl.value) {
    console.log(formData);
    localStorage.removeItem(FEEDBACK_FORM_STATE);
    event.currentTarget.reset();
    formData = {
      email: '',
      message: '',
    };
  } else {
    alert('Всі поля повинні бути заповнені!');
  }
}
