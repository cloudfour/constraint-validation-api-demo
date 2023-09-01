/* eslint-disable no-throw-literal */
import { create, test, enforce, only } from 'vest';

export const validationSuite = create(
  /**
   * @param {HTMLInputElement} inputEl - The input element to validate
   */
  (inputEl) => {
    only(inputEl.name);

    test('customerFirstName', () => {
      if (inputEl.validity.valueMissing) {
        throw 'Please enter your first name.';
      }
    });

    test('customerLastName', () => {
      if (inputEl.validity.valueMissing) {
        throw 'Please enter your last name.';
      }
    });

    test('customerEmail', () => {
      if (inputEl.validity.valueMissing) {
        throw 'Please enter an email address.';
      }
      if (inputEl.validity.typeMismatch) {
        throw 'Please enter a valid email address.';
      }
    });

    test('demoUrl', () => {
      if (inputEl.validity.valueMissing) {
        throw 'Please enter a URL.';
      }
      if (inputEl.validity.typeMismatch) {
        throw 'Please enter a valid URL.';
      }
    });

    test('demoTooShort', () => {
      if (inputEl.validity.valueMissing) {
        throw 'Please enter a value.';
      }
      if (inputEl.validity.tooShort) {
        throw `Please make the text longer, it should be at least ${inputEl.getAttribute(
          'minLength'
        )} characters. Right now, it's only ${inputEl.value.length} ${
          inputEl.value.length === 1 ? 'character' : 'characters'
        }.`;
      }
    });

    test('demoTooLong', () => {
      if (inputEl.validity.tooLong) {
        throw `Please shorten this text to a maximum of ${inputEl.getAttribute(
          'maxLength'
        )} characters. It currently exceeds that limit.`;
      }
    });

    test('demoRangeEven', () => {
      if (inputEl.validity.valueMissing) {
        throw 'Please enter a number value.';
      }
      if (inputEl.validity.badInput) {
        throw 'Please enter a valid number value.';
      }
      if (
        inputEl.validity.rangeUnderflow ||
        inputEl.validity.rangeOverflow ||
        inputEl.validity.stepMismatch
      ) {
        throw 'Please enter an even number between 10 and 20.';
      }
    });

    test('demoPattern', () => {
      if (inputEl.validity.tooShort || inputEl.validity.tooLong) {
        throw 'The code should be between 3 and 5 digits long.';
      }
      if (inputEl.validity.patternMismatch) {
        throw 'Please enter a valid 3-5 digit code.';
      }
    });

    // test('customerFirstName', 'Please enter your first name.', () =>
    //   inputEl.checkValidity()
    // );

    // test('customerFirstName', 'Your first name is required', () => {
    //   enforce(formData.customerFirstName).isNotBlank();
    // });

    // test('username', 'Username must be at least 3 characters long', () => {
    //   enforce(formData.username).longerThan(2);
    // });
  }
);
