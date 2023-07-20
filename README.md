# Series: Progressively Enhancing the Form Validation Experience

- Part 1: Use browser built-in form validation (no JS)
- Part 2: Use JavaScript and the Constraint Validation API to enhance the experience
- Part 3: How to validate a checkbox group (not supported by built-in features)
- Part 4: Use the `ValidityState` object to write custom error messages, use Vest for validation abstraction

---

## Special thanks

Special thanks to Tyler Sticka for challenging me to think about form validation from a different perspective. At some point, the story I created around form validation was one that immediately jumped to using JavaScript without considering the Constraint Validation API. In retrospect, it seems silly not to use the Constraint Validation API when the form validation requires JavaScript; no need to re-invent the wheel! Thanks for always challenging me and giving me the opportunity to find and embrace the challenge for continued growth.

---

## Notes

### Why not `content:` "x"?

It will be read aloud by screen reader. We don't want that.

### Why not [`HTMLInputElement.reportValidity`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/reportValidity)?

Because `HTMLInputElement.reportValidity` will also report (show the error message) to the user with the default browser validation UI styles. In our case, we don't want that. We only want to _check_ validity.

- [`HTMLInputElement.checkValidity`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity).

## Checkbox group validation without JavaScript

Seems like it can't be done.

- https://html.form.guide/checkbox/html-form-checkbox-required/
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation

## MDN's examples

- https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#built-in_form_validation_examples

> If so, we call the `setCustomValidity()` method with a custom message. This
> renders the input invalid, so that when you try to submit the form, submission
> fails and the custom error message is displayed.

- [Validating forms without a built-in API](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#validating_forms_without_a_built-in_api)

## Resources

- [Complex constraints using the Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation#complex_constraints_using_the_constraint_validation_api)

## SVG

- https://www.svgrepo.com/svg/12848/x-symbol

## Talk about complex constraints

https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation#complex_constraints_using_the_constraint_validation_api

## Use `validity()` to write custom error messages!

https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#the_constraint_validation_api

## Radio group required attribute

If you add a `required` attribute to any radio input in a radio group, then a
radio group choice is required. This is not the case with a checkbox group.

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#required

## Accessibility

### General form

Use this!

- https://www.smashingmagazine.com/2023/02/guide-accessible-form-validation

Note, consider accessibility UX when using Live Validation, read this great article.

Others

- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-errormessage

### Checkbox group

- https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/
- https://blog.tenon.io/accessible-validation-of-checkbox-and-radiobutton-groups/
- https://dequeuniversity.com/rules/axe/3.5/checkboxgroup
