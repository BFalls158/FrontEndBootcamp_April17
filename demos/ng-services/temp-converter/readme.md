## Angular Service Example
A service is a component in the Angular ecosystem. You can make your own
services. Then you can have Angular inject them into your controllers
(see app.js) and use them there.

There are two ways to define a service. One is to use the `service()` method
(see `temp-service.js`). The other is to use the `factory()` method
(see `temp-factory.js`). Both end up with about the same result but achieve it
differently.

Compare and contrast the two files: `temp-service.js` and `temp-factory.js`. At
the bottom of index.html you can choose which of the two files to use. It
doesn't make sense to use both at the same time since they do the same thing.
The program will behave exactly the same no matter which file you use.
