const Orm = require("../config/orm.js");
const orm = new Orm();

module.exports = class Burger {
    async getAll() {
        return await orm.getAll("burgers");
    }

    async create() {}

    async update() {}
};
