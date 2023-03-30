<script>
  import { getISOFormattedDate } from '../utils/get-iso-formatted-date';
  import validationSuite from '../form-validation/suite';
  import FormFieldErrors from './FormFieldErrors.svelte';

  // 1 year ago today.
  const oneYearAgoToday = new Date();
  oneYearAgoToday.setUTCFullYear(oneYearAgoToday.getUTCFullYear() - 1);

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
  <label for="purchase-date">Purchase date:</label>
  <input
    type="date"
    name="purchaseDate"
    id="purchase-date"
    required
    min={getISOFormattedDate(oneYearAgoToday)}
    max={getISOFormattedDate(new Date())}
  />
  <FormFieldErrors {validationResult} fieldName="purchaseDate" />

  <fieldset>
    <legend>Choose your interests</legend>
    <div>
      <input type="checkbox" id="coding" name="interest" value="coding" />
      <label for="coding">Coding</label>
    </div>
    <div>
      <input type="checkbox" id="music" name="interest" value="music" />
      <label for="music">Music</label>
    </div>
    <div>
      <input type="checkbox" id="art" name="interest" value="art" />
      <label for="art">Art</label>
    </div>
    <div>
      <input type="checkbox" id="sports" name="interest" value="sports" />
      <label for="sports">Sports</label>
    </div>
    <FormFieldErrors {validationResult} fieldName="interest" />
  </fieldset>

  <button type="submit">Submit</button>
</form>
