import { onSubmit } from './on-submit.js';

export const initForm = () => {
  // Get the form element.
  /** @type {HTMLFormElement} */
  const formEl = document.querySelector('#demo-form');
  // Turn off default form submit validation by adding `novalidate` attribute.
  formEl.setAttribute('novalidate', '');
  // Use form `submit` event to validate with Constraint Validation API instead.
  formEl.addEventListener('submit', onSubmit);

  return formEl;
};
