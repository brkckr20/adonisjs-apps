import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Work extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public category : string

  @column()
  public title : string

  @column()
  public description : string

  @column()
  public mainImage : string

  @column()
  public image1 : string

  @column()
  public image2 : string

  @column()
  public image3 : string

  @column()
  public image4 : string

  @column()
  public year : string

}
