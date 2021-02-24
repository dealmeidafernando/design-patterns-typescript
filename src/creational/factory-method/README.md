# Patterns and intents

- **Factory** - Define an interface to create an object, but let the subclasses decide which class to instantiate. Factory Method allows you to postpone instantiation for subclasses.

## Pros and Cons

### Pros

- You avoid tight coupling between the creator and the concrete products.
- Single Responsibility Principle. You can move the product creation code into one place in the program, making the code easier to support.
- Open/Closed Principle. You can introduce new types of products into the program without breaking existing client code.

### Cons

- The code may become more complicated since you need to introduce a lot of new subclasses to implement the pattern. The best case scenario is when you’re introducing the pattern into an existing hierarchy of creator classes.
