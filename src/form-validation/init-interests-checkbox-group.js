import { validateInterestsCheckboxGroup } from './validate-interests-checkbox-group.js';

/**
 * Initializes the set up for the "interests" checkbox group.
 * @param {HTMLFormElement}  formEl  The form element
 */
export const initInterestsCheckboxGroup = (formEl) => {
  // Set up `blur` and `change` validation for the "interests" checkbox group.
  const interestsCheckboxInputEls = formEl.querySelectorAll(
    'input[name="interests"]'
  );
  for (const checkboxInputEl of interestsCheckboxInputEls) {
    // Updates the UI state for the checkbox group when checked/unchecked
    checkboxInputEl.addEventListener('change', () =>
      validateInterestsCheckboxGroup(formEl)
    );
    // Set up late validation for the checkbox group
    checkboxInputEl.addEventListener('blur', (event) => {
      // FocusEvent.relatedTarget is the element receiving focus.
      /** @type {HTMLInputElement} */
      const activeEl = event.relatedTarget;
      // Validate only if the focus is not going to another checkbox.
      if (activeEl?.getAttribute('name') !== 'interests') {
        validateInterestsCheckboxGroup(formEl);
      }
    });
  }

  // On page load, if a checkbox is checked, update UI state
  const isInterestsGroupChecked =
    document.querySelectorAll('input[name="interests"]:checked').length > 0;
  if (isInterestsGroupChecked) {
    validateInterestsCheckboxGroup(formEl);
  }
};
