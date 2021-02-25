# Patterns and intents

- **Adapter** - is a structural design pattern that allows objects with incompatible interfaces to collaborate.

## Pros and Cons

### Pros

- Decouples the code from the application of third party codes
- Applies the SRP by separating the interface conversion from the application logic
- Applies the OCP. You can introduce new types of adapters into the program without breaking the existing client code, as long as they work with the adapters through the client interface.

### Cons

- The overall complexity of the code increases because you need to introduce a set of new interfaces and classes. Sometimes it’s simpler just to change the service class so that it matches the rest of your code.
