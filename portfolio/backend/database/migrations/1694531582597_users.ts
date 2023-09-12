import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string("ad_soyad")
      table.string("parola")
      table.string("unvan")
      table.string("adres")
      table.string("mail")
      table.string("resim")
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
