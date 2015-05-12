## Providers

Bellavista dependency injection works with providers. Providers tell Bellavista how to treat dependencies, whether they are static values, services that are global to the app, or objects that need to be instantiated each time they are injected.

Bellavista currently has two types of providers: **factories** and **services**.

### Factory

A factory in Bellavista is a provider in which an object is constructed when it is injected as a dependency. That object is created once every time it is injected, so changes made to the object do not outlive the scope of the object it is injected into.

### Service

A service is a singleton that is initialized the first time it is injected and lives for the duration of the application.