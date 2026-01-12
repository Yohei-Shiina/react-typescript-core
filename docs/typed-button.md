## Added in this branch

- feature/typed-button: Added two typed Button components

  - ConstButton
  - FunctionButton

- Named function declarration:

  - Commonly seen in React documentation
  - Better debug output as the component's name appears

- const + arrow function
  - easily convert to memo
  - consistent with modern React patterns (hooks, callbacks, utilities)
  - commonly used in real-world codebases
  - function name is preserved in modern browsers for debugging

Both implementation behave identically at runtime.
