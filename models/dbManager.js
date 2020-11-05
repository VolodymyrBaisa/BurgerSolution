const Orm = require("../config/orm.js");
const orm = new Orm();

const tableName = "burgers";

module.exports = class Burger {
    async getAll() {
        return await orm.getAll(tableName);
    }

    async create(val) {
        await orm.create(tableName, val);
    }

    async update(where) {
        await orm.update(tableName, { devoured: true }, { id: where });
    }
};
