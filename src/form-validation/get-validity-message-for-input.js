/**
 * Return custom validity messages referencing a given input's ValidityState object.
 * @param {HTMLInputElement} inputEl The input element
 * @returns {string} A custom validity message for the given input element
 */
// eslint-disable-next-line complexity
export const getValidationMessageForInput = (inputEl) => {
  // If the input is valid, return an empty string.
  if (inputEl.validity.valid) return '';

  /**
   * Validation constraints:
   * - required
   */
  if (inputEl.name === 'customerFirstName' && inputEl.validity.valueMissing) {
    return 'Please enter your first name. (This field is required.)';
  }

  /**
   * Validation constraints:
   * - required
   */
  if (inputEl.name === 'customerLastName' && inputEl.validity.valueMissing) {
    return 'Please enter your last name. (This field is required.)';
  }

  /**
   * Validation constraints:
   * - required
   * - type=email
   */
  if (inputEl.name === 'customerEmail') {
    if (inputEl.validity.valueMissing) {
      return 'Please enter an email address. (This field is required.)';
    }
    if (inputEl.validity.typeMismatch) {
      return 'Please enter a valid email address.';
    }
  }

  /**
   * Validation constraints:
   * - required
   * - type=date
   * - min
   * - max
   */
  if (inputEl.name === 'purchaseDate') {
    if (inputEl.validity.valueMissing) {
      return 'Please enter a purchase date. (This field is required.)';
    }
    if (inputEl.validity.typeMismatch) {
      return 'Please enter a valid purchase date.';
    }
    if (inputEl.validity.rangeUnderflow) {
      return 'The purchase date must be within the last 10 years.';
    }
    if (inputEl.validity.rangeOverflow) {
      return 'The purchase date cannot be a future date.';
    }
  }

  /**
   * Validation constraints:
   * - required
   * - type=url
   */
  if (inputEl.name === 'demoUrl') {
    if (inputEl.validity.valueMissing) {
      return 'Please enter a URL. (This field is required.)';
    }
    if (inputEl.validity.typeMismatch) {
      return 'Please enter a valid URL.';
    }
  }

  /**
   * Validation constraints:
   * - required
   * - minLength
   */
  if (inputEl.name === 'demoTooShort') {
    if (inputEl.validity.valueMissing) {
      return 'Please enter a text value. (This field is required.)';
    }
    if (inputEl.validity.tooShort) {
      const minLength = inputEl.getAttribute('minLength');
      const difference = Number(minLength) - inputEl.value.length;
      return `Please enter at least ${minLength} characters. (Add ${difference} more ${
        difference === 1 ? 'character' : 'characters'
      }.)`;
    }
  }

  /**
   * Validation constraints:
   * - maxLength
   */
  if (inputEl.name === 'demoTooLong' && inputEl.validity.tooLong) {
    return `Please shorten this text to a maximum of ${inputEl.getAttribute(
      'maxLength'
    )} characters. It currently exceeds that limit.`;
  }

  /**
   * Validation constraints:
   * - required
   * - type=number
   * - min
   * - max
   * - step
   */
  if (inputEl.name === 'demoRangeEven') {
    if (inputEl.validity.valueMissing) {
      return 'Please enter a number. (This field is required.)';
    }
    if (inputEl.validity.badInput) {
      return 'Please enter a valid number value.';
    }
    if (
      inputEl.validity.rangeUnderflow ||
      inputEl.validity.rangeOverflow ||
      inputEl.validity.stepMismatch
    ) {
      return `The value should be an even number between ${inputEl.getAttribute(
        'min'
      )} and ${inputEl.getAttribute('max')}.`;
    }
  }

  /**
   * Validation constraints:
   * - type=number
   * - min
   * - max
   * - step
   */
  if (inputEl.name === 'demoRangeOdd') {
    if (inputEl.validity.valueMissing) {
      return 'Please enter a number. (This field is required.)';
    }
    if (inputEl.validity.badInput) {
      return 'Please enter a valid number value.';
    }
    if (
      inputEl.validity.rangeUnderflow ||
      inputEl.validity.rangeOverflow ||
      inputEl.validity.stepMismatch
    ) {
      return `The value should be an odd number between ${inputEl.getAttribute(
        'min'
      )} and ${inputEl.getAttribute('max')}.`;
    }
  }

  if (inputEl.name === 'demoPattern') {
    if (inputEl.validity.tooShort || inputEl.validity.tooLong) {
      return 'The code should be between 3 and 5 digits long.';
    }
    if (inputEl.validity.patternMismatch) {
      return 'Please enter a valid 3-5 digit (number) code.';
    }
  }

  // If all else fails, return the default built-in message.
  return inputEl.validationMessage;
};
