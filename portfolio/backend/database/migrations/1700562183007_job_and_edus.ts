import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'job_and_edus'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string("description");
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
