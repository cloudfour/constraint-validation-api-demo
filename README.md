# Series: Progressively Enhancing the Form Validation Experience

- Part 1: Use browser built-in form validation (no JS)
- Part 2: Use JavaScript and the Constraint Validation API to enhance the experience
- Part 3: How to validate a checkbox group (not supported by built-in features)
- Part 4: Use the `ValidityState` object to write custom error messages, use Vest for validation abstraction

---

## Special thanks

### Part 3

Thank you to the A11Y Slack community (especially Juliette Alexandria, Joe Schunk, and Adrian Roselli) for providing feedback on the accessibility of a checkbox group validation solution.

---

## Notes

## Checkbox group validation without JavaScript

Seems like it can't be done.

- https://html.form.guide/checkbox/html-form-checkbox-required/
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation

## MDN's examples

> If so, we call the `setCustomValidity()` method with a custom message. This
> renders the input invalid, so that when you try to submit the form, submission
> fails and the custom error message is displayed.

- [Validating forms without a built-in API](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#validating_forms_without_a_built-in_api) (Use this for the checkbox group article)

## Part 3 resources

- [Support for Marking Radio Buttons Required, Invalid](https://adrianroselli.com/2022/02/support-for-marking-radio-buttons-required-invalid.html)
- https://twitter.com/aardrian/status/1225185061668098048
- https://twitter.com/aardrian/status/1253053177395625984

## SVG

- https://www.svgrepo.com/svg/12848/x-symbol

## Use `validity()` to write custom error messages!

https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#the_constraint_validation_api

## Radio group required attribute

If you add a `required` attribute to any radio input in a radio group, then a
radio group choice is required. This is not the case with a checkbox group.

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#required

## Accessibility

### Checkbox group

- https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/
- https://blog.tenon.io/accessible-validation-of-checkbox-and-radiobutton-groups/
- https://dequeuniversity.com/rules/axe/3.5/checkboxgroup
- https://design-system.service.gov.uk/components/checkboxes/#error-messages

## Use "Wrapping Up" section to close out

Better (IMO) than "Conclusion" or "Summary".

## Warning! Server-side validation is still required

> Warning: Never trust data passed to your server from the client. Even if your form is validating correctly and preventing malformed input on the client-side, a malicious user can still alter the network request.

From: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#what_is_form_validation

## Examples of video ideas

- https://twitter.com/jlengstorf/status/1684624174889984000

## Respond to tweet with my article?

- https://twitter.com/EvansKwofie5/status/1684876036343762945?s=20
