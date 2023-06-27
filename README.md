# Demo: Progressively enhanced form validation

- Intro

## Base experience (no JavaScript)

- Built-in form validation
- The `type` value first
- Other validation attributes
- Mention `:invalid` and other pseudo-states(?)
  - Note about using `:user-invalid` and `:user-valid` instead of `:invalid` and `:valid`
  - Thread: https://cloudfour.slack.com/archives/C03ECJ38E/p1680650240215439
- Pros
- Cons
- Summary?

## Enhance with JavaScript + Constraint Validations API

- Add `novalidate` to remove browser validation messages
- Show how to validate
- Attach onSubmit, onSubmitHandler
- Summary?

## What?

- Progressively enhance built-in browser validation (with vanilla JS)
- Progressively enhance with UI framework (like Svelte) and validation abstraction (like Vest)

---

Browsers nowadays have built-in form validation (or "constraint validation") features that are super helpful for validating form controls.

From the [MDN docs regarding constraint validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation):

> [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5) introduced new mechanisms for forms: it added new semantic types for the [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) element and _constraint validation_ to ease the work of checking the form content on the client side. Basic, usual constraints can be checked, without the need for JavaScript, by setting new attributes; more complex constraints can be tested using the Constraint Validation API.

This article will explore some examples of building a progressively enhanced form control validation experience. We'll look at a base (non-JavaScript) experience as well as an enhanced version that uses JavaScript and the [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#validating_forms_using_javascript). We'll even take a peek at how we might use a UI framework ([Svelte](https://svelte.dev/)) in addition to a framework-agnostic form validation library ([Vest](https://vestjs.dev/)) to help abstract the UI logic that handles rendering the validation error messages.

## Base experience (no JavaScript)

Browser [built-in form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation) features are able to validate most user data without relying on JavaScript. This is a great place to start when building a progressively enhanced experience.

You'll want to:

- Choose the most semantically appropriate value for the [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#type) attribute of the `<input>` element (e.g., `type="email"`)
- Add other [validation attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation#validation-related_attributes) to layer more constraints (e.g., `required`)
- Use validation-related pseudo-classes to style the form controls: [`:valid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:valid), [`:required`](https://developer.mozilla.org/en-US/docs/Web/CSS/:required), [`:optional`](https://developer.mozilla.org/en-US/docs/Web/CSS/:optional), and/or [`:invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid)

> Note: If you only use the `:invalid` pseudo-selector, the form controls will start with invalid styles before the user even tries to fill out the field creating a poor user experience. Bramus has a good blog post showing [combinations of pseudo-selectors that result in a better validation experience](https://www.bram.us/2021/01/28/form-validation-you-want-notfocusinvalid-not-invalid/).

The MDN Web Docs have great [built-in form validation examples](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#built-in_form_validation_examples), but we can take a look at a basic example below:

```html
<form action="/" method="post">
  <!-- 
    1. Customer details
    2. Purchase details
    3. Something else

    Only show `:invalid` on `:focus`
   -->
  <label for="user-email">Your email:</label>
  <input id="user-email" type="email" />
  <input type="date" required max="2023-03-30" />
</form>
```

### Pros

- No JavaScript needed.
- Can handle most use cases.
- Relatively straightforward to set up.
- The validation errors are automatically rendered and styled by the browser providing a consistent browser-specific experience.
- Validation error messages are localized automatically.

### Cons

- The validation error message styles cannot be customized.
- The `:invalid` styles show before the user has a chance to fill out the form field.
- Some form controls (e.g., a `checkbox` group) cannot be validated.

### Summary

Regardless if the user experience you are building requires JavaScript or not, using built-in form validation should be the strong foundation to build upon.

## Special thanks

Special thanks to Tyler Sticka for challenging me to think about form validation from a different perspective. At some point, the story I created around form validation was one that immediately jumped to using JavaScript without considering the Constraint Validation API. In retrospect, it seems silly not to use the Constraint Validation API when the form validation requires JavaScript; no need to re-invent the wheel! Thanks for always challenging me and giving me the opportunity to find and embrace the challenge for continued growth.

---

## Notes

### Why not `content:` "x"?

It will be read aloud by screen reader. We don't want that.

### Why not [`HTMLInputElement.reportValidity()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/reportValidity)?

Because `HTMLInputElement.reportValidity()` will also report (show the error message) to the user with the default browser validation UI styles. In our case, we don't want that. We only want to _check_ validity.

- [`HTMLInputElement.checkValidity()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/checkValidity).

### Localized validation error messages?

By using the built-in browser constraint validation features, you get localized validation error messages for free! If a more custom UI/UX is desired, the Constraint Validation API provides the `

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

## JS/No JS/`:user-invalid`

JS/No JS: 2 use cases
Supports `:user-invalid`/No support: 2 use cases

Total use cases: 4

---

### No JS + no `:user-invalid` support

- Do not use `:user-invalid`
- Use `:invalid`
  - `:invalid` styles show on page load (before the user has a chance to fill out the form field)

### JS + no `:user-invalid` support

- Do not use `:user-invalid`
- Want to disable `:invalid` styles
  - Don't want to show error states on page load
- Use `.is-invalid`
  - Shows custom error messages
  - Shows input error state on `blur`/`input`/`submit`

### No JS + `:user-invalid` support

- Do not use `:invalid`
  - Don't want to show error states on page load
- Use `:user-invalid`
  - Only shows error state after user interacts with input

### JS + `:user-invalid` support

- Do not use `:invalid`
  - Don't want to show error states on page load
- Use `:user-invalid`
  - Only shows error state after user interacts with input
- Use `.is-invalid`
  - Shows custom error messages
