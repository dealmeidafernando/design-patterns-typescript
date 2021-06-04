# Patterns and intents

- **Oberserver** - is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.

## Pros and Cons

### Pros

- Open/Closed Principle. You can introduce new subscriber classes without having to change the publisher’s code (and vice versa if there’s a publisher interface).
- Single Responsibility Principle.
- You can establish relations between objects at runtime.

### Cons

- Subscribers are notified in random order.
