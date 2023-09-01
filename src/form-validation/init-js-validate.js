import { updateValidationStateForInput } from './update-validation-state-for-input.js';

export const initJsValidate = () => {
  const jsValidateInputEls = document.querySelectorAll('.js-validate');
  for (const inputEl of jsValidateInputEls) {
    // Set up `blur` and `input` validation for the inputs that can be validated
    // with the Constraint Validation API.
    inputEl.addEventListener('input', (event) =>
      updateValidationStateForInput(event.target)
    );
    inputEl.addEventListener('blur', (event) =>
      updateValidationStateForInput(event.target)
    );
    // Adding `aria-invalid` provides users who use assistive technology
    // with a way to know if the input is invalid.
    // Should initially be set to `false` before interaction/validity check.
    inputEl.setAttribute('aria-invalid', 'false');

    // Update the state for prefilled inputs.
    if (inputEl.value !== '') {
      updateValidationStateForInput(inputEl);
    }
  }
};
