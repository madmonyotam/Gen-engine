const gen = require("./generator");

describe("generate function", () => {
  it("should generate 10 items", () => {
    const schema = {
      name: { type: "firstName" }
    };

    const data = gen.generate(schema);

    expect(data.length).toEqual(10);
  });

  it("should generate 100 items", () => {
    const schema = {
      name: { type: "firstName" }
    };

    const data = gen.generate(schema, 100);

    expect(data.length).toEqual(100);
  });

  it("should generate 10000 items as max", () => {
    const schema = {
      name: { type: "firstName" }
    };

    const data = gen.generate(schema, 10005);

    expect(data.length).toEqual(10000);
  });
});
