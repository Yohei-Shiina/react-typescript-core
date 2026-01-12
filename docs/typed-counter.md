## Added in this branch

- feature/typed-counter: Added typed counter component

- if typing, it should be either

  - `useState<number>(0)`
    or
  - `useState<number | null>(null)`

- Type interface works when initial value is clear such as `0`
- Explicit typing is useful for null states
- when using null, null-checks are required before usage
  `'count' is possibly 'null'.`
