import { initForm } from './init-form.js';
import { initInterestsCheckboxGroup } from './init-interests-checkbox-group.js';
import { initJsValidate } from './init-js-validate.js';

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
