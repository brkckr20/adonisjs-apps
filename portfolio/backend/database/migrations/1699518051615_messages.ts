import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'messages'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string("name").notNullable();
      table.string("email").notNullable();
      table.string("subject").notNullable();
      table.string("message").notNullable();
      table.boolean("isReplied").defaultTo(false);
      table.timestamp('date', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
