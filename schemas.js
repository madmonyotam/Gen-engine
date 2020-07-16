const fs = require("fs");
const path = require("path");

class schemas {
  constructor() {
    this.schemas = {};
  }

  getSchema(library, category) {
    if (!this.schemas[library]) return undefined;
    return this.schemas[library][category];
  }

  setSchemas(schemas) {
    this.schemas = schemas;
  }
}

module.exports = schemas;
