import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Support extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name : string

  @column()
  public email : string

  @column()
  public subject : string

  @column()
  public message : string

  @column()
  public isReplied : string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

}
