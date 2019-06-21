const db = require('../database/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
}

function find() {
    return db('users').select('id', 'username');
}

function findBy(filter) {
    return db('users').where(filter).select('id', 'username');
}

function findById(id) {
    return db('users').select('id', 'username').where({id}).first();
}

async function add(user) {
    const [id] = await db('users').insert(user);

    return findById(id);
}