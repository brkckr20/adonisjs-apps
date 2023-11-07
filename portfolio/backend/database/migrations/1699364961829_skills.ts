import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'skills'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer("userId")
      table.string("name")
      table.string("image")
      table.string("icon")
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
