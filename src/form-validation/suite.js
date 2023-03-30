import { create, test, enforce } from 'vest';

const suite = create(
  'demoValidationSuite',
  /**
   * The suite callback function; called every time the validation suite runs.
   * @param {object} data The data to be validated
   */
  // (data = {}) => {
  /**
   * @param {FormData} formData
   */
  (formData) => {
    test('purchaseDate', 'Purchase date is required.', () => {
      enforce(formData.get('purchaseDate')).isNotBlank();
    });

    test('interest', 'Please choose at least one interest.', () => {
      enforce(formData.getAll('interest')).isNotEmpty();
    });

    // test('username', 'Username must be at least 3 characters long', () => {
    //   enforce(data.username).longerThan(2);
    // });
  }
);

export default suite;
