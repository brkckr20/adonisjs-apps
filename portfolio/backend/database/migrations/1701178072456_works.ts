import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'works'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string("category").nullable()
      table.string("title").nullable()
      table.string("description").nullable()
      table.string("mainImage").nullable()
      table.string("image1").nullable()
      table.string("image2").nullable()
      table.string("image3").nullable()
      table.string("image4").nullable()
      table.string("year").nullable()

    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
