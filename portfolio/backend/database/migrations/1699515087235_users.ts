import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('mail2')
      table.string('telefon')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
