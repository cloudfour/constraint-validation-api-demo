# Series: Progressively Enhancing the Form Validation Experience

- [Progressively Enhanced Form Validation, Part 1: HTML and CSS](https://cloudfour.com/thinks/progressively-enhanced-form-validation-part-1-html-and-css/)
- [Progressively Enhanced Form Validation, Part 2: Layering in JavaScript](https://cloudfour.com/thinks/progressively-enhanced-form-validation-part-2-layering-in-javascript/)
- [Progressively Enhanced Form Validation, Part 3: Validating a checkbox group](https://cloudfour.com/thinks/progressively-enhanced-form-validation-part-3-validating-a-checkbox-group/)
- Part 4: Use the `ValidityState` object to write custom error messages, use Vest for validation abstraction

---

## Part 4 resource links

- https://caniuse.com/mdn-api_validitystate
- https://www.conf42.com/JavaScript_2020_Alush_Evyatar_form_validations_vest
- https://guillaumepotier.github.io/gettext.js/
- Chris Ferdinand's version: https://css-tricks.com/form-validation-part-2-constraint-validation-api-javascript/

## Part 4 notes

- For `rangeUnderflow` or `rangeOverflow`, I can't mention even/odd number detail because the message needs to be more generic.
- String.prototype.includes is not supported in IE11: https://caniuse.com/es6-string-includes
- If a more restrictive email, use `pattern` attribute instead of `type="email"`: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#pattern_validation
- Basic email validation regex: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#basic_validation

## TODO Once all parts are published

### Part 2

Add links:

- Part 4 of this series will explore this very topic.
- Part 4 will explore using the Constraint Validation API’s ValidityState interface to help render custom validation error messages.

## Notes

Add somewhere:

> Using the aria-describedby property to provide a descriptive label for user interface controls

- https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA1

## Use `validity()` to write custom error messages!

https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#the_constraint_validation_api

## Use "Wrapping Up" section to close out

Better (IMO) than "Conclusion" or "Summary".

## Examples of video ideas

- https://twitter.com/jlengstorf/status/1684624174889984000

## Chrome

### :user-valid/:user-invalid support bug

https://bugs.chromium.org/p/chromium/issues/detail?id=1156069

### Chrome wants to close out issue

https://bugs.chromium.org/p/chromium/issues/detail?id=1322670
