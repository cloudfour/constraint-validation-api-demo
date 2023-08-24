import { create, enforce, test } from 'vest';

const suite = create(
  'demoValidationSuite',
  /**
   * The suite callback function; called every time the validation suite runs.
   * @param {FormData} formData The form data to validate
   */
  (formData) => {
    /**
     * The Constraint Validation API provides all the information needed to
     * handle custom form field validation.
     *
     * The validation message string and checkValidity() function can slot
     * right in to the Vest validation test. This means the browser built-in
     * localized validation error message will be displayed.
     *
     * For this example, loop through the field names intended to be validated
     * by the Constraint Validation API.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validationMessage
     * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity
     */
    for (const fieldName of ['customerEmail', 'purchaseDate']) {
      /** @type {HTMLInputElement} */
      const inputEl = document.querySelector(`[name="${fieldName}"]`);
      test(fieldName, inputEl.validationMessage, inputEl.checkValidity);
    }

    /**
     * An example that does not use the Constraint Validation API. Since the form
     * data is passed in to the Vest validation suite, the code has access to all
     * of the submitted data so it can be validated however is needed.
     */
    test('interests', 'Please choose at least one interest.', () => {
      enforce(formData.getAll('interests')).isNotEmpty();
    });
  }
);

export default suite;

// omitWhen(!formData.get(fieldName), () => {
//   test(
//     fieldName,
//     'Please provide a valid date within the past year.',
//     () => {
//       enforce(
//         validity.rangeOverflow || validity.rangeUnderflow
//       ).isFalsy();
//     }
//   );
// });
