import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'job_and_edus'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string("type")
      table.string("startedMonth").nullable();
      table.string("startedYear").nullable();
      table.string("endMonth").nullable();
      table.string("endYear").nullable();
      table.string("name").nullable();
      table.string("place").nullable();
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
