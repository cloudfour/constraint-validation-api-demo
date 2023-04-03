<script>
  import validationSuite from '../form-validation/suite';
  import CustomerEmail from './form-fields/CustomerEmail.svelte';
  import Interests from './form-fields/Interests.svelte';
  import PurchaseDate from './form-fields/PurchaseDate.svelte';
  import FormFieldErrors from './FormFieldErrors.svelte';

  /**
   * Set initial form validation state.
   * This is used in the template to conditionally show errors depending on the
   * validation suite result state. The validation result is updated when the
   * form is submitted.
   * @type {import('vest').SuiteResult}
   */
  let validationResult = validationSuite.get();

  /**
   * @param {SubmitEvent} event
   */
  const onFormSubmit = (event) => {
    // Update the suite validation result by validating submitted data.
    validationResult = validationSuite(new FormData(event.target));
  };
</script>

<form
  on:submit|preventDefault={onFormSubmit}
  novalidate
  action=""
  method="post"
>
  <fieldset>
    <legend>Customer details</legend>
    <CustomerEmail />
    <FormFieldErrors {validationResult} fieldName="customerEmail" />
  </fieldset>

  <fieldset>
    <legend>Purchase details</legend>
    <PurchaseDate />
    <FormFieldErrors {validationResult} fieldName="purchaseDate" />
  </fieldset>

  <fieldset>
    <legend>Interests</legend>
    <Interests />
    <FormFieldErrors {validationResult} fieldName="interests" />
  </fieldset>

  <button type="submit">Submit</button>
</form>
