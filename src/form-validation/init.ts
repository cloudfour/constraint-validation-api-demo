import { initForm } from '../form-validation/init-form.js';
import { initInterestsCheckboxGroup } from '../form-validation/init-interests-checkbox-group.js';
import { initJsValidate } from '../form-validation/init-js-validate.js';

/**
 * Initialize validation setup
 */
export const init = () => {
  // Update the JS enabled state.
  document.body.dataset.jsEnabled = 'true';

  const formEl = initForm();
  initJsValidate();

  initInterestsCheckboxGroup(formEl);
};
