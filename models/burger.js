'use strict';

const orm = require('../config/orm');

class Burguer {
    constructor(database = orm) {
        this.db = database;
    }

    list() {
        return this.db.selectAll();
    }

    add(burger) {
        return this.db.updateOne(id, data);
    }

    delete(id, datat = {}) {
        return this.db.deleteOne(id, data);
    }
}