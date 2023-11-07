
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Skill extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public name : number

  @column()
  public image: number

  @column()
  public icon : number
}
