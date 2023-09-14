import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'socialmedias'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string("social_media_name").nullable()
      table.string("icon").nullable()
      table.string("url").nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
