import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
export default class Message extends BaseModel {
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
  public isReplied : boolean

  @column.dateTime({ autoCreate: true })
  public date : DateTime
}
