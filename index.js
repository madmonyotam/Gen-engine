const gen = require("./generator/generator");
const categoryTypes = require('./types/collection/categoryTypes');

const catTypes = categoryTypes(gen);
gen.types.addTypes(catTypes);


const schema = {
  name: { type: "firstName" }
};

module.exports = gen;
