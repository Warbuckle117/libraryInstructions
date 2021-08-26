
exports.up = function(knex) {
    return knex.schema.createTable('books', function (table) {
        table.increments('id');
        table.string('bookTitle');
        table.string('Author');
        table.string('ISBNNumber');
        table.boolean('bookCheckedOut');
      });
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('books');
};
