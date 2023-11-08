import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class JobAndEdu extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public type: string

  @column()
  public startedMonth: string

  @column()
  public startedYear : string

  @column()
  public endMonth : string

  @column()
  public endYear : string

  @column()
  public name : string

  @column()
  public place : string

}
