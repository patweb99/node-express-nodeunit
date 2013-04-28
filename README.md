node-express-nodeunit
=====================

This is an example project that shows you how you can use modules such as nodeunit
in conjunction with node-dev to do local on the fly unit testing to help with TDD
development.

I've wrapped up the functionality within a Express project to show how it can be used
within one of the NodeJS frameworks.

Modules used:
- [Express](https://github.com/visionmedia/express) Visual Framework
- [Jade](https://github.com/visionmedia/jade) Template engine that Express uses out of the box
- [Commander](https://github.com/visionmedia/commander.js/) Enables the ability to pass in command line arguments
- [klass](https://github.com/ded/klass) Simple class structure
- [node-dev](https://github.com/fgnass/node-dev) Development flavor of Node that restarts the app upon file save
- [nodeunit](https://github.com/caolan/nodeunit) Unit Testing framework

To get started simply run the following command once you've download the code:
> node-dev app -t

The option -t tells the application to run all the unit tests within the /tests folder
upon every save.