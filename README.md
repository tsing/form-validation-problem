# [Form validation problem](https://springload.github.io/form-validation-problem/)

We've created this problem to evaluate how developers tackle a real-world problem. If you've been assigned this problem you should spend around **2 hours** working on it. The last thing we want you to do is toil away for days on end!

If you've stumbled across this and want to work at [Springload](https://www.springload.co.nz/) feel free to submit it too. We're always on the lookout for skilled developers.

## Problem definition

Included in this repository is an [index.html](index.html) file that contains a form. You must ensure all of the following rules are met before the form is posted to the (in this case imaginary) server:

* `Email` must be a valid email address.
* `Password` must be longer than 8 characters.
* `Colour` must be selected.
* At least two `Animal`s must be chosen.
* If `Tiger` is one of the chosen `Animal`s then `Type of tiger` is required to be a non-empty string.

## Other requirements

If the form is submitted and an error occurs, the error element's parent should have a CSS `error` class added to it.

```html
<p class="error">
    <label for="field"></label>
    <input id="field" type="text" value="foo">
</p>
```

## The cherry on the cake

Beyond the problem statement, show us the consideration you have given to some or all of the following:

- Documentation
- Accessibility
- Progressive enhancement
- Browser support
- Testing
- Tooling


## My consideration about this problem

* The form validation problem is a classic problem for frontend developer,
  I read the requirements carefully and thought how I would solve it in my
  mind.
* I added webpack and babel to the codebase in order to setup a comfort dev
  environment.
* Then I translate the form validation requirements into a `rules` object in
  `src/main.js` which make the requirements easy to understand and extensible.
* And then I add logic in onsubmit function to build form vaule and apply
  the rules to it.
* I think the code in `src/main.js` is very straightforward and self
  explain.
* I tested the page under Firefox, Chrome, Safari and IE11.
* Although I was planned to use mocha for testing, but I am run out of time because
  I was running out of 2 hours time.
* The form validation code is added to the form dynamically, so it's possible that
  user submit the form before the code is loaded, in that case,
  malformed data could be send to server side.
* The password input's `name` attribute is different with its `id` and
  `label`, it weird and may cause problem in development.


## Submission

Please email us a link to your fork of this repository, or a zip of your solution to `1337h4x0r@springload.co.nz`.
