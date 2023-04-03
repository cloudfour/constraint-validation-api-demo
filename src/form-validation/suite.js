import { create, test, enforce, omitWhen } from 'vest';

const suite = create(
  'demoValidationSuite',
  /**
   * The suite callback function; called every time the validation suite runs.
   * @param {FormData} formData The form data to validate
   */
  (formData) => {
    /**
     * A block statement to encapsulate the form field validation per input.
     * Why? It felt cleaner to keep the logic encapsulated from other fields.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block#using_a_block_statement_to_encapsulate_data
     */
    {
      /**
       * The Constraint Validation API provides all the information needed to
       * handle custom form field validation.
       *
       * The validation message string and checkValidity() function can slot
       * right in to the Vest validation test. This means the built-in localized
       * validation error message will be displayed.
       *
       * @see https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
       * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validationMessage
       * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity
       *
       * @type {HTMLInputElement}
       */
      const inputEl = document.querySelector('[name="customerEmail"]');
      test('customerEmail', inputEl.validationMessage, inputEl.checkValidity);
    }

    {
      /** @type {HTMLInputElement} */
      const inputEl = document.querySelector('[name="purchaseDate"]');
      test('purchaseDate', inputEl.validationMessage, inputEl.checkValidity);
    }

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

    /**
     * A basic validation example using a Vest `enforce` rule.
     */
    test('interests', 'Please choose at least one interest.', () => {
      enforce(formData.getAll('interests')).isNotEmpty();
    });
  }
);

export default suite;
