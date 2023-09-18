import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Slider extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public baslik: string

  @column()
  public aciklama: string

  @column()
  public link: string

  @column()
  public resim: string

}
