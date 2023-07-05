<!-- # Built-in browser validation first -->

# Form validation in layers: From built-in browser validation to the Constraint Validation API

## Layers

1. Built-in browser validation
2. Constraint Validation API (JavaScript)

<!-- # Progressively enhanced form validation with the Constraint Validation API -->

<!-- Confession time: I didn't really understand the [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#the_constraint_validation_api) until recently, despite it's [decade-long support by browsers](https://caniuse.com/constraint-validation). I feel, umm, embarrassed. How'd this happen? -->

<!-- I probably found a jQuery form validation plugin back in the day, which led me to depend on JavaScript libraries for form validation. I remember getting excited when built-in browser validation started being supported, but the inability to customize the design reinforced my reliance on JavaScript libraries for form validation. Moreover, applying `:valid`/`:invalid` styles would display the "invalid" state before users could input anything, making it challenging to persuade my design team to adopt built-in browser validation. -->

What if you could use built-in browser validation and have a custom design in a progressively enhanced manner? You can! The Constraint Validation API provides a way to customize the design of the validation error UI/UX while leveraging browser built-in features for the validation of the form data. This article explores one example of how to progressively enhance the form validation experience with the Constraint Validation API.

## First layer: Built-in browser validation

Browser [built-in form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation) features are able to validate most user data without relying on JavaScript. This provides the strong foundation required for building a progressively enhanced experience.

This can be accomplished by:

- Choosing the most semantically appropriate value for the [`input` `type` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#type) (e.g., `type="email"`)
- Adding other [validation attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation#validation-related_attributes) to layer more constraints (e.g., `required`)
- Using validation-related pseudo-classes to style the form controls: [`:valid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:valid), [`:required`](https://developer.mozilla.org/en-US/docs/Web/CSS/:required), [`:optional`](https://developer.mozilla.org/en-US/docs/Web/CSS/:optional), [`:invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid) as well as [`:user-valid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:user-valid)/[`:user-invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid) where supported (provides a better user experience)

### Base experience: Example

- TODO Rename heading
- TODO Video? GIF?
- TODO Side-by-side comparison of `:invalid` vs `:user-invalid`

[Image of browsers that don't support `:user-invalid`]()

One of the pushbacks against using browser built-in form validation is that `:invalid` styles are applied on page load before the user interacts with the form controls. No worries! This is where a progressive enhancement layer can be applied in browsers that support `:user-invalid`/`:user-valid`. Using `:user-invalid`/`:user-valid` instead of `:invalid`/`:valid` will only apply the styles after the user has interacted with the form control.

To support all browsers and apply `:user-invalid`/`:user-valid` in a progressively enhanced manner, the CSS could look something like this:

```css
/* Use `:user-invalid`/`:user-valid` only if supported */
@supports selector(:user-invalid) {
  input:user-valid {
    /*  */
  }
  input:user-invalid {
    /*  */
  }
}
/** 
 * When not supported, fallback to `:invalid`/`:valid` 
 * Wrapping `:valid`/`:invalid` in a "not" `@supports` block ensures that the 
 * invalid styles are not applied on page load in browsers that do 
 * support `:user-invalid`/`:user-valid`
 */
@supports not selector(:user-invalid) {
  input:valid {
    /* styles */
  }
  input:invalid {
    /*  */
  }
}
```

### Base experience: Pros

- No JavaScript required
- No need to write custom validation logic
- Can handle the majority of validation use cases
- The validation errors are automatically rendered and styled by the browser providing a consistent browser-specific experience
- Validation error messages are localized automatically

### Base experience: Cons

- The validation error messages are not customizable
- The `:invalid` styles are applied before the user has a chance to fill out the form field on browsers that do not support `:user-invalid`
- Some form controls (e.g., a `checkbox` group) cannot be validated

### Base experience: Summary

TODO Work on this

This is a fantastic example of how progressive enhancement can shine. All of these cons can be addressed with JavaScript. Progressive enhancement FTW!

---

<!-- ## Intro  -->

<!-- And, to my surprise, it's been [well-supported by browsers](https://caniuse.com/?search=constraint%20validation%20api) for about a decade now. I feel, umm, embarrassed. How'd this happen? -->

<!-- ## Base experience (no JavaScript)

The base form validation experience uses built-in browser validation features. A semantic HTML form is the strong foundation from which to progressively enhance the experience with JavaScript. There are a couple of semantic input types, `type="url"` and `type="email"`, plus a handful of validation attributes, for example `required` and `minlength`, that can be used to layer more constraints onto form controls. MDN has excellent [semantic input type and validation attribute documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation#intrinsic_and_basic_constraints) to reference. -->
