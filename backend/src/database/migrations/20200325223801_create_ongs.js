
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table){
        table.string('id').primary()
        table.string('email').notNullable()
        table.string('whatsaapp').notNullable()
        table.string('city').notNullable()
        table.string('uf', 2).notNullable()
        table.string('name').notNullable()
    })
};
exports.down = function(knex) {
  return knex.schema.dropTable('ongs')
};
