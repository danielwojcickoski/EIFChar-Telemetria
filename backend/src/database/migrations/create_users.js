exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.string('user').primary();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('authorization').notNullable();
    table.string('socketWeb').notNullable();
    table.string('socketWeb').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users')
};
