/**
 * Validates the "interests" checkbox group.
 * Custom validation is required because checkbox group validation
 * is not supported by the browser's built-in validation features.
 * @param {HTMLFormElement} formEl The form element
 * @returns {boolean} Is the "interests" checkbox group valid?
 */
export const validateInterestsCheckboxGroup = (formEl) => {
  // Bail if on "part-2" demo since the "interests" checkbox group
  // validation logic hasn't been introduced yet.
  // Return true so this doesn't block form submission.
  if (window.location.pathname.includes('part-2')) {
    console.log('Skipping "interests" checkbox group validation.');

    return true;
  }

  // Get the fieldset element for the "interests" checkbox group.
  const checkboxFieldsetEl = document.querySelector('.js-checkbox-fieldset');
  // Bail if no checkbox fieldset element is found.
  // Return true so this doesn't block form submission.
  // eslint-disable-next-line @cloudfour/typescript-eslint/no-unnecessary-condition
  if (!checkboxFieldsetEl) return true;

  console.log('Validate the "interests" checkbox group');

  // Get all the "interests" checkboxes.
  const interestsCheckboxInputEls = document.querySelectorAll(
    'input[name="interests"]'
  );
  // The legend error element is used to provide an inclusive experience for
  // users who use assistive technology. When a checkbox is in focus, the error
  // message is read out loud since the error message is in the legend.
  // The legend error element is hidden from sighted users.
  // https://blog.tenon.io/accessible-validation-of-checkbox-and-radiobutton-groups/#dynamicallyinjectingtheerrortextintothelegendoursolution
  const legendErrorEl = document.querySelector('.js-interests-legend-error');
  // The visual error message is for sighted users.
  const visualErrorEl = document.querySelector('.js-interests-visual-error');

  // Are any of the "interests" checkboxes checked? At least one is required.
  const formData = new FormData(formEl);
  const isValid = formData.getAll('interests').length > 0;

  // Need to place the `is-valid` class higher up in the DOM tree to
  // show a validation state icon (one icon for the group of checkboxes).
  checkboxFieldsetEl.classList.toggle('is-valid', isValid);
  checkboxFieldsetEl.classList.toggle('is-invalid', !isValid);
  // Also update aria-invalid on the fieldset.
  checkboxFieldsetEl.setAttribute('aria-invalid', String(!isValid));
  // Update the validation UI state for each checkbox.
  for (const checkboxInputEl of interestsCheckboxInputEls) {
    checkboxInputEl.classList.toggle('is-valid', isValid);
    checkboxInputEl.classList.toggle('is-invalid', !isValid);
  }

  // Update the validation error message.
  const errorMsg = isValid ? '' : 'Please select at least one interest.';

  // The error message is the same for both the legend and the visual error.
  legendErrorEl.textContent = errorMsg;
  visualErrorEl.textContent = errorMsg;

  // Show/hide the visual error message depending on the checkbox group's validity.
  visualErrorEl.hidden = isValid;

  // Return the validation state.
  return isValid;
};
