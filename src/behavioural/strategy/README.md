# Patterns and intents

- **Strategy** - is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.

## Pros and Cons

### Pros

- You can swap algorithms used inside an object at runtime.
- You can isolate the implementation details of an algorithm from the code that uses it.
- You can replace inheritance with composition.
- Open/Closed Principle. You can introduce new strategies without having to change the context.

### Cons

- If you only have a couple of algorithms and they rarely change, there’s no real reason to overcomplicate the program with new classes and interfaces that come along with the pattern.
- The Client code must be aware of the differences between strategies to be able to select a proper one.
- You can achieve the same result with functions if the programming language allows.
