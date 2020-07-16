const gen = require("./generator/generator");
const categoryTypes = require('./types/collection/categoryTypes');

const catTypes = categoryTypes(gen);
gen.types.addTypes(catTypes);

module.exports = gen;
