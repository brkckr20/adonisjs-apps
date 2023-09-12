import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async info({response }: HttpContextContract) {
    response.json({message : "Başarıyla kontroller eklendi"})
  }
}
