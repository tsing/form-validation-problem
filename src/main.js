import validator from 'validator';

const rules = {
  email: val => {
    return validator.isEmail(val);
  },
  username: val => {
    return val.length >= 8;
  },
  colour: val => {
    return val !== '';
  },
  animal: val => {
    return val.length >= 2;
  },
  tiger_type: (val, formVal) => {
    if (formVal.animal.includes('tiger')) {
      return val !== '';
    }
    return true;
  }
};

function onFormSubmit(event) {
  event.preventDefault();

  const target = event.target;
  const colourElement = target.querySelector('[name=colour]');

  const formVal = {
    email: target.querySelector('[name=email]').value,
    username: target.querySelector('[name=username]').value,
    colour: colourElement.options[colourElement.selectedIndex].value,
    animal: Array.from(target.querySelectorAll('input[name=animal]'))
      .filter(node => node.checked)
      .map(node => node.value),
    tiger_type: target.querySelector('[name=tiger_type]').value
  };

  let allGood = true;
  for (const [name, func] of Object.entries(rules)) {
    if (func(formVal[name], formVal) === false) {
      target.querySelector('[name=' + name + ']').parentNode.className = 'error';
      allGood = false;
    } else {
      target.querySelector('[name=' + name + ']').parentNode.className = '';
    }
  }

  if (allGood) {
    alert('successful');
  }
}

const form = document.getElementsByTagName('form')[0];
if (form) {
  form.addEventListener('submit', onFormSubmit);
}
