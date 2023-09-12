import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public ad_soyad : string

  @column()
  public parola : string

  @column()
  public unvan : string

  @column()
  public adres : string

  @column()
  public mail : string

  @column()
  public resim : string

}
