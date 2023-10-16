import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public post_image :string
  @column()
  public title :string
  @column()
  public content :string
  @column()
  public type :string
}
