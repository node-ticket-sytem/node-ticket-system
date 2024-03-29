# node-ticket-system

> 

## About

Node Ticket System originally started out as a PHP application in 2013 to teach myself how to build a PHP/MySQL/Javascript CRUD application.

Over the years I have alway wanted to continue the development of [PHP Ticket System](https://sourceforge.net/projects/phpticketsystem/) I just kept puting it off for one reason or another.  Now that a decade has flow by I have decided to reboot the project, only this time using NodeJS, Angular, and MongoDB.

### Why the language change?

I honestly did not keep up with all of the PHP changes from version 5 to 7+ and I find NodeJS much simpiler, portable, and easier to use tool for building web applications.

### Frameworks used

[Feathers](http://feathersjs.com): An open source web framework for building modern real-time applications.



## Testing the app
### This app is in very early stages of being developed.

1. Make sure you have mongo db running on localhost...

2. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
3. Install your dependencies

    ```
    cd path/to/node-ticket-system
    npm install
    ```

4. Start your app

    ```
    npm start
    ```

5. Open a browser and visit [http://localhost:3030/setup](https://localhost:3030/setup)

6. Using the setup wizard - currently just put anything into one of the fields and click next next finish.

7. Once you see the loading spinner you can browse to [http://localhost:3030](https://localhost:3030) and login with admin@system.local / P0pc0rn1

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).
