# Demo: Progressively enhanced form validation

- Uses browser built-in form validation when JS is not available
- Uses JavaScript and the Constraint Validation API to enhance the experience when JS is available

## What?

- Progressively enhance built-in browser validation (with vanilla JS)
- Progressively enhance with UI framework (like Svelte) and validation abstraction (like Vest)

---

Browsers nowadays have built-in form validation (or "constraint validation") features that are super helpful for validating form controls.

From the [MDN docs regarding constraint validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation):

> [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5) introduced new mechanisms for forms: it added new semantic types for the [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) element and _constraint validation_ to ease the work of checking the form content on the client side. Basic, usual constraints can be checked, without the need for JavaScript, by setting new attributes; more complex constraints can be tested using the Constraint Validation API.

This article will explore some examples of building a progressively enhanced form control validation experience. We'll look at a base (non-JavaScript) experience as well as an enhanced version that uses JavaScript and the [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#validating_forms_using_javascript). We'll even take a peek at how we might use a UI framework ([Svelte](https://svelte.dev/)) in addition to a framework-agnostic form validation library ([Vest](https://vestjs.dev/)) to help abstract the UI logic that handles rendering the validation error messages.

The MDN Web Docs have great [built-in form validation examples](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#built-in_form_validation_examples), but we can take a look at a basic example below:

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

- [Validation-related attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation#validation-related_attributes)
- [Complex constraints using the Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation#complex_constraints_using_the_constraint_validation_api)
- [HTMLObjectElement.validationMessage](https://developer.mozilla.org/en-US/docs/Web/API/HTMLObjectElement/validationMessage)

## SVG

- https://www.svgrepo.com/svg/12848/x-symbol

## Talk about complex constraints

https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation#complex_constraints_using_the_constraint_validation_api

## Use `validity()` to write custom error messages!

https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#the_constraint_validation_api
