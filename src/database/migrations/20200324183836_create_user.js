// npx knex migrate:make create_users
//npx knex migrate:latest / rollback

exports.up = function(knex) {
    return knex.schema.createTable('users', function(table){
          table.increments()
          table.string('name').notNullable()
          table.string('lastname').notNullable()
          table.string('email').notNullable()
          table.string('permission').notNullable()
          table.string('status').notNullable()
          table.timestamps()
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('users')
  };
  