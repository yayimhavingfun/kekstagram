const Keys = {
  ESC: 'Esc',
  ESCAPE: 'Escape',
};

const main = document.querySelector('main');

const errorTemplate = document.querySelector('#error').content;
const errorFragment = document.createDocumentFragment();

const successTemplate = document.querySelector('#success').content;
const successFragment = document.createDocumentFragment();

const onAlertEscKeyDown = (evt) => {
  if (evt.key === Keys.ESC || evt.key === Keys.ESCAPE) {
    removeAlert();
  }
}

const removeAlert = (type) => {
  document.querySelector(type).remove();
  document.removeEventListener('keydown', (evt) => {
    if (evt.key === Keys.ESC || evt.key === Keys.ESCAPE) {
      removeAlert();
    }
  });
}


const showError = (text, button) => {
  const errorElement = errorTemplate.cloneNode(true);

  const errorTitle = errorElement.querySelector('.error__title');
  const errorButton = errorElement.querySelector('.error__button');

  errorTitle.textContent = text;
  errorButton.textContent = button;

  document.addEventListener('click', (evt) => {
    let innerError = document.querySelector('.error__inner');
    if (!innerError.contains(evt.target)) {
      removeAlert('.error');
    }
  });

  errorButton.addEventListener('click', () => {
    removeAlert('.error');
  });

  document.addEventListener('keydown', onAlertEscKeyDown);

  errorFragment.appendChild(errorElement);
  main.appendChild(errorFragment);
};


const showSuccess = (text) => {
  const successElement = successTemplate.cloneNode(true);
  const successButton = successElement.querySelector('.success__button');

  successElement.querySelector('.success__title').textContent = text;

  document.addEventListener('click', (evt) => {
    let innerSuccess = document.querySelector('.success__inner');
    if (!innerSuccess.contains(evt.target)) {
      removeAlert('.success');
    }
  });

  successButton.addEventListener('click', () => {
    removeAlert('.success');
  });

  document.addEventListener('keydown', onAlertEscKeyDown);

  successFragment.appendChild(successElement);
  main.appendChild(successFragment);
}

export { showError, showSuccess };
