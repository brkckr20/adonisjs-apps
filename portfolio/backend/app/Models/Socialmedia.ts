import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Socialmedia extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public social_media_name: string

  @column()
  public icon: string

  @column()
  public url : string
}
