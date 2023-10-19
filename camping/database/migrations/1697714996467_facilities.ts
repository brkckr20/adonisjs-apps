import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'facilities'

  public async up () {
    this.schema.alterTable('facilities', (table) => {
      table.dropColumn('className')
      table.string('class_name')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
