import { updateValidationStateForInput } from './update-validation-state-for-input.js';
import { validateInterestsCheckboxGroup } from './validate-interests-checkbox-group.js';

/**
 * Handler for form `submit` event.
 * @param {SubmitEvent} event The event object for the `submit` event
 */
export const onSubmit = (event) => {
  /** @type {HTMLFormElement} */
  const formEl = event.target;
  // Update the validation UI state for all inputs that can be validated
  // with the Constraint Validation API.
  document
    .querySelectorAll('.js-validate')
    // eslint-disable-next-line @cloudfour/unicorn/no-array-for-each
    .forEach(updateValidationStateForInput);
  // The `isFormValid` boolean respresents all inputs that can be
  // validated via the Constraint Validation API.
  const isFormValid = formEl.checkValidity();
  // Fields that cannot be validated with the Constraint Validation API need
  // to be validated manually. This includes the "interests" checkbox group.
  const isInterestsGroupValid = validateInterestsCheckboxGroup(formEl);
  // If any of the validation checks fail, prevent the form from submitting.
  if (!isFormValid || !isInterestsGroupValid) {
    event.preventDefault();
  }
  // Set the focus to the first invalid input.
  const firstInvalidInputEl = formEl.querySelector(
    'input:invalid, fieldset.is-invalid input'
  );
  firstInvalidInputEl?.focus();
};
