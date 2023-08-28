import { initForm } from '../form-validation/init-form.js';
import { initInterestsCheckboxGroup } from '../form-validation/init-interests-checkbox-group.js';
import { initJsValidate } from '../form-validation/init-js-validate.js';

import { updateValidationStateForInput } from './update-validation-state-for-input.js';

const initVestValidation = (formEl: HTMLFormElement) => {
  // const jsValidateInputEls: NodeListOf<HTMLInputElement> =
  // document.querySelectorAll('.js-validate');
  // for (const inputEl of jsValidateInputEls) {
  document
    .querySelectorAll('.js-validate')
    // eslint-disable-next-line @cloudfour/unicorn/no-array-for-each
    .forEach((inputEl: HTMLInputElement) => {
      // Set up `blur` and `input` validation for the inputs that can be validated
      // with the Constraint Validation API.
      inputEl.addEventListener('input', (event) => {
        updateValidationStateForInput(event.target as HTMLInputElement);
      });
      inputEl.addEventListener('blur', (event) => {
        updateValidationStateForInput(event.target as HTMLInputElement);
      });
      // Adding `aria-invalid` provides users who use assistive technology
      // with a way to know if the input is invalid.
      // Should initially be set to `false` before interaction/validity check.
      inputEl.setAttribute('aria-invalid', 'false');

      // Update the state for prefilled inputs.
      if (inputEl.value !== '') {
        updateValidationStateForInput(inputEl);
      }
    });
};

/**
 * Initialize validation setup
 */
export const init = () => {
  // Update the JS enabled state.
  document.body.dataset.jsEnabled = 'true';

  const formEl = initForm();
  initJsValidate();

  initInterestsCheckboxGroup(formEl);
};
