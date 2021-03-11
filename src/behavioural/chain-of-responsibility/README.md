# Patterns and intents

- **Chain of responsibility** - is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.

## Pros and Cons

### Pros

- You can control the order of request handling.
- SRP. You can decouple classes that invoke operations from classes that perform operations.
- Open/Closed Principle. You can introduce new handlers into the app without breaking the existing client code.

### Cons

- Some requests may end up unhandled.
