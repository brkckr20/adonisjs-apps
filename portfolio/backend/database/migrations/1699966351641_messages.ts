import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'messages'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string("isReplied2");
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
