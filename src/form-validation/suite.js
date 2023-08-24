import { create, test, enforce, only } from 'vest';

const suite = create(
  /**
   * @param {object} formData - The form data to validate
   * @param {HTMLInputElement} inputEl - The input element to validate
   */
  (formData = {}, inputEl) => {
    only(inputEl.name);

    debugger;

    test(
      'customerFirstName',
      'Your first name is required',
      inputEl.checkValidity
    );
    // test('customerFirstName', 'Your first name is required', () => {
    //   enforce(formData.customerFirstName).isNotBlank();
    // });

    // test('username', 'Username must be at least 3 characters long', () => {
    //   enforce(formData.username).longerThan(2);
    // });
  }
);

export default suite;
