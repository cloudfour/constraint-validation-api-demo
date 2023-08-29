import { getValidationMessageForInput } from './get-validity-message-for-input.js';

/**
 * Update the validation UI state for a given input element.
 * @param {HTMLInputElement} inputEl The input element to update the UI state for.
 */
export const updateValidationStateForInput = (inputEl: HTMLInputElement) => {
  // Check if the input is valid using the Constraint Validation API.
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity
  const isInputValid = inputEl.checkValidity();

  // Handle optional empty fields
  // For Firefox and Safari: Also check if valid because type="number" fields
  // report an empty string value when they have a non-numeric values.
  if (!inputEl.required && inputEl.value === '' && isInputValid) {
    // Clear validation state
    inputEl.classList.remove('is-valid', 'is-invalid');
  } else {
    // Required fields: Toggle valid/invalid state classes
    inputEl.classList.toggle('is-valid', isInputValid);
    inputEl.classList.toggle('is-invalid', !isInputValid);
  }

  // Update the `aria-invalid` state when validation occurs
  // https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21
  inputEl.setAttribute('aria-invalid', String(!isInputValid));

  // When JS is enabled, the default built-in error messages are not shown,
  // the code needs to set the error messages manually.
  // IF PART 4:
  // - Use custom validity messages.
  // ELSE:
  // - Use the browser built-in localized validation message. Will be
  //   an empty string if input constraints are satisfied.
  //   https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validationMessage
  const errorEl = inputEl.nextElementSibling as HTMLElement;
  // For demo purposes, show the custom validation messages for Part 4
  const validationMessage = window.location.pathname.includes('part-4')
    ? getValidationMessageForInput(inputEl)
    : inputEl.validationMessage;
  errorEl.textContent = validationMessage;
  // Show/hide the error message depending on the input's validity.
  errorEl.hidden = isInputValid;
};
