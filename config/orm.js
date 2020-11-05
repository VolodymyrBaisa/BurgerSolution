const connection = require("./connection.js");
const { promisify } = require("util");

module.exports = class ORM {
    async getAll(table) {
        const q = `SELECT * FROM ${table};`;
        return await this.query(q);
    }
    async create(table, val) {
        const q = `INSERT INTO ${table} SET ?`;
        await this.query(q, val);
    }
    async update(table, val, where) {
        const q = `UPDATE ${table} SET ? WHERE ?`;
        await this.query(q, [val, where]);
    }

    async quire(q) {
        return (await promisify(connection.query).bind(connection))(q);
    }

    async query(q, ...args) {
        return (await promisify(connection.query).bind(connection))(q, ...args);
    }
};
