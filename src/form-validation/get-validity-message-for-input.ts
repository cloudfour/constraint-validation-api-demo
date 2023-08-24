/**
 * Uses the Constraint Validation ValidityState API to return a custom validity message
 * @param {HTMLInputElement} inputEl The input element
 * @returns {string} A custom validity message for the given input element
 */
export const getValidityMessageForInput = (
  inputEl: HTMLInputElement
): string => {
  // If the input is valid, return an empty string.
  if (inputEl.validity.valid) return '';

  // If the input is invalid, return the appropriate error message.
  if (inputEl.validity.valueMissing) {
    return `Please provide a value for the "${inputEl.labels
      ?.item(0)
      .textContent?.trim()}" field.`;
  }
  if (inputEl.validity.typeMismatch) {
    if (inputEl.type === 'email') {
      return 'Please provide a valid email address.';
    }
    if (inputEl.type === 'url') {
      return 'Please provide a valid URL.';
    }
  }
  if (inputEl.validity.tooShort) {
    const currCharCount = inputEl.value.length;
    return `Please make the text longer, it should be at least ${inputEl.getAttribute(
      'minLength'
    )} characters. Right now, it's only ${currCharCount} ${
      currCharCount === 1 ? 'character' : 'characters'
    }.`;
  }
  if (inputEl.validity.tooLong) {
    const currCharCount = inputEl.value.length;
    return `Please shorten this text to a maximum of ${inputEl.getAttribute(
      'maxLength'
    )} characters. It currently exceeds that limit.`;
  }
  if (inputEl.validity.rangeUnderflow) {
    return `Please choose a number that is ${inputEl.getAttribute(
      'min'
    )} or more.`;
  }
  if (inputEl.validity.rangeOverflow) {
    return `Please choose a number that is ${inputEl.getAttribute(
      'max'
    )} or less.`;
  }
  if (inputEl.validity.stepMismatch) {
    return `Please enter a valid value for the "${inputEl.labels
      ?.item(0)
      .textContent?.trim()}" field.`;
  }
  if (inputEl.validity.badInput) {
    return `Please provide a valid value of type "${inputEl.getAttribute(
      'type'
    )}".`;
  }
  if (inputEl.validity.patternMismatch) {
    return 'Please match the requested format.';
  }
  if (inputEl.validity.customError) {
    return inputEl.validationMessage;
  }

  // If all else fails, return a generic catchall error message.
  return 'The value you provided for this field is invalid.';
};
