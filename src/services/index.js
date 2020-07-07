const users = require('./users/users.service.js');
const syslog = require('./syslog/syslog.service.js');
const ticket = require('./ticket/ticket.service.js');
const ticketClass = require('./ticket-class/ticket-class.service.js');
const ticketClassFields = require('./ticket-class-fields/ticket-class-fields.service.js');
const system = require('./system/system.service.js');

const deletedRecords = require('./deleted-records/deleted-records.service.js');

const recordClass = require('./record-class/record-class.service.js');

const table = require('./ticket/ticket.service.js');

const apiTable = require('./api/table/table.service.js');

const cmdbClass = require('./cmdb-class/cmdb-class.service.js');

const apiItsmTask = require('./api/itsm/task/task.service.js');

const apiAdminGroups = require('./api/admin/groups/groups.service.js');

const apiAdminRoles = require('./api/admin/roles/roles.service.js');

const apiAdminUsers = require('./api/admin/users/users.service.js');

const apiAdminSettings = require('./api/admin/settings/settings.service.js');

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(syslog);
  app.configure(ticket);
  app.configure(ticketClass);
  app.configure(ticketClassFields);
  app.configure(system);
  app.configure(deletedRecords);
  app.configure(recordClass);
  app.configure(table);
  app.configure(apiTable);
  app.configure(cmdbClass);
  app.configure(apiItsmTask);
  app.configure(apiAdminGroups);
  app.configure(apiAdminRoles);
  app.configure(apiAdminUsers);
  app.configure(apiAdminSettings);
};
