const _ = require("lodash");

const typesClass = require("../types/types");

const nameTypes = require("../types/collection/nameTypes");
const fixedTypes = require("../types/collection/fixedTypes");
const webTypes = require("../types/collection/webTypes");
const numbersTypes = require("../types/collection/numbersTypes");
const textsTypes = require("../types/collection/textTypes");
const workTypes = require("../types/collection/workTypes");
const locatonTypes = require("../types/collection/locatonTypes");
const financeTypes = require("../types/collection/financeTypes");
const dateTypes = require("../types/collection/dateTypes");
const imageTypes = require("../types/collection/imageTypes");
const idTypes = require("../types/collection/idTypes");
const randomTypes = require("../types/collection/randomTypes");

const types = new typesClass();

types.addTypes(nameTypes);
types.addTypes(fixedTypes);
types.addTypes(webTypes);
types.addTypes(numbersTypes);
types.addTypes(textsTypes);
types.addTypes(workTypes);
types.addTypes(locatonTypes);
types.addTypes(financeTypes);
types.addTypes(dateTypes);
types.addTypes(imageTypes);
types.addTypes(idTypes);
types.addTypes(randomTypes);

const generateOneItem = (func, el, field) => {
  let value = func(el, field);
  if(el.addEmpty){
    var random = Math.random();
    if(random < 0.5) return null;
  }
  if (el.prefix) {
    value = el.prefix + value;
  }

  if (el.suffix) {
    value = value + el.suffix;
  }

  return value;
};

const getSize = (el) => {
  if(!el.randomSize) return el.size;
  const newSize = Math.floor( Math.random()*(Number(el.size)+1) );
  return newSize;
}

const generateFromType = (el, field) => {
  const allTypes = types.getTypes();

  if (!allTypes[el.type]) return `type ${el.type} does not exist in types`;
  const generateFunc = allTypes[el.type].generate;

  if (!_.isUndefined(el.size)) {
    let array = [];
    const finalSize = getSize(el);

    for (let i = 0; i < finalSize; i++) {
      array.push(generateOneItem(generateFunc, el, field));
    }
    return array;
  }

  return generateOneItem(generateFunc, el, field);
};

const modelator = (schema, path) => {
  let newData = {};

  for (const field in schema) {
    const el = schema[field];

    newData[field] = generateFromType(el, `${path}-${field}`);
  }

  return newData;
};

const generate = (schema, amount = 10) => {
  let path = 'path' 

  if (!schema) return "can't find schema";
  if (amount > 10000) amount = 10000;

  if (typeof schema === "string") {
    schema = schema.split(/[.,]/);
  }

  if (Array.isArray(schema)) {
    path = `${path}-${schema[0]}-${schema[1]}`;
    schema = schemas.getSchema(schema[0], schema[1]);
  }

  let mockList = [];
  for (let i = 0; i < amount; i++) {
    mockList.push(modelator(schema, path));
  }

  return mockList;
};

module.exports = { generate, types };
