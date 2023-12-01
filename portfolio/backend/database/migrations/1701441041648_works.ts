import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'works'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('slug')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
