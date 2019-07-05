"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class SizeTypeSchema extends Schema {
  up() {
    this.create("size_types", table => {
      table.increments();
      table
        .integer("size_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("sizes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("type_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("types")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.float("price");
      table.timestamps();
    });
  }

  down() {
    this.drop("size_types");
  }
}

module.exports = SizeTypeSchema;
