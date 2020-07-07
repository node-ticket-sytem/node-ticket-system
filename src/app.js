const path = require('path');
const favicon = require('serve-favicon');
const compress = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('./logger');

const feathers = require('@feathersjs/feathers');
const configuration = require('@feathersjs/configuration');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');


const middleware = require('./middleware');
const services = require('./services');
const appHooks = require('./app.hooks');
const channels = require('./channels');

const authentication = require('./authentication');

const mongodb = require('./mongodb');

const app = express(feathers());

// Load app configuration
app.configure(configuration());
// Enable security, CORS, compression, favicon and body parsing
app.use(helmet());
app.use(cors());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(favicon(path.join(app.get('public'), 'favicon.ico')));
// Host the public folder
app.use('/', express.static(app.get('public')));

// Set up Plugins and providers
app.configure(express.rest());
app.configure(socketio());

app.configure(mongodb);

// Configure other middleware (see `middleware/index.js`)
app.configure(middleware);
app.configure(authentication);
// Set up our services (see `services/index.js`)
app.configure(services);
// Set up event channels (see channels.js)
app.configure(channels);

// Configure a middleware for 404s and the error handler
app.use(express.notFound());
app.use(express.errorHandler({ logger }));

app.hooks(appHooks);

// setTimeout( () => {
//   var faker = require('faker');

//   var i = 0;

//   while ( i < 500 ) {

//     var user = {
//       display_name: faker.name.findName(),
//       first_name: faker.name.firstName(),
//       email: faker.internet.email(),
//       last_name: faker.name.lastName(),
//       password: faker.name.lastName()
      
//     };

//     app.service('users').create(user);
//     i ++;
//   }
// }, 3000);

// DEFINE TICKET CLASSES FOR NEW DB!
// const initTicketClasses = async () => {
//   const classes = [
//     {
//       name: 'Task',
//       prefix: 'TSK',
//       slug: 'task'

//     }
//   ]
// };

// const initSystem = async () => {
//   const currentTicketClasses = await app.service('ticket-classes').find();
//   if(currentTicketClasses.total == 0) {
//     await initTicketClasses();
//   }
// };

// setTimeout( () => {
//   initSystem();
// }, 2500);

module.exports = app;
 