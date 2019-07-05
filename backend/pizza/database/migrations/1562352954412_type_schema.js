"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TypeSchema extends Schema {
  up() {
    this.create("types", table => {
      table.increments();
      table
        .integer("product_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("products")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("title").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("types");
  }
}

module.exports = TypeSchema;
