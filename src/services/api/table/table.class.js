/* eslint-disable no-unused-vars */
exports.Table = class Table {
  constructor (options, app) {
    this.options = options || {};

  }

  async find (params) {
    
    const { app } = params;

    const test = await app.service('system').find();
    return params;
  }

  async get (id, params) {
    return {
      id, text: `A new message with ID: ${id}!`
    };
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update (id, data, params) {
    return data;
  }

  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
    return { id };
  }

  // setup(app) {
  //   this.app = app;
  // }
};
