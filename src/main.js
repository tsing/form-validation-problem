function onFormSubmit(event) {
  event.preventDefault();
  alert('submitted');
}

const form = document.getElementsByTagName('form')[0];
if (form) {
  form.addEventListener('submit', onFormSubmit);
}
