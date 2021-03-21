# Patterns and intents

- **State** - is a behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.

## Pros and Cons

### Pros

- Single Responsibility Principle. Organize the code related to particular states into separate classes.
- Open/Closed Principle. Introduce new states without changing existing state classes or the context.
- Simplify the code of the context by eliminating bulky state machine conditionals.

### Cons

- Applying the pattern can be overkill if a state machine has only a few states or rarely changes.
