"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class OrderTypeSchema extends Schema {
  up() {
    this.create("order_types", table => {
      table.increments();
      table
        .integer("order_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("orders")
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
      table.timestamps();
    });
  }

  down() {
    this.drop("order_types");
  }
}

module.exports = OrderTypeSchema;
