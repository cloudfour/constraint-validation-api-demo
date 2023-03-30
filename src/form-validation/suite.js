import { create, test, enforce, omitWhen } from 'vest';

const suite = create(
  'demoValidationSuite',
  /**
   * The suite callback function; called every time the validation suite runs.
   * @param {FormData} formData
   */
  (formData) => {
    /**
     * A block statement to encapsulate all `purchaseDate` field validation.
     * Why? The `purchaseDate` string is used multiple times and I didn't want
     * to mistype it. So I made it a variable scoped to this block only.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block#using_a_block_statement_to_encapsulate_data
     */
    {
      // The field name to be validated.
      const fieldName = 'purchaseDate';

      test(fieldName, 'Purchase date is required.', () => {
        enforce(formData.get(fieldName)).isNotBlank();
        return;
      });

      omitWhen(!formData.get(fieldName), () => {
        /**
         * Get the field element to get access to the validity state object.
         * @see https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
         * @type {HTMLInputElement}
         */
        const purchaseDateEl = document.querySelector(`[name='${fieldName}']`);
        const { rangeOverflow, rangeUnderflow } = purchaseDateEl.validity;

        test(
          fieldName,
          'Please provide a valid date within the past year.',
          () => {
            enforce(rangeOverflow || rangeUnderflow).isFalsy();
          }
        );
      });
    }

    test('interest', 'Please choose at least one interest.', () => {
      enforce(formData.getAll('interest')).isNotEmpty();
    });
  }
);

export default suite;
