import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CampType from 'App/Models/CampType'

export default class CampTypesController {
  public async index({ }: HttpContextContract) {
    const campTypes = await CampType.all();
    return campTypes;
  }

  public async create({request,response }: HttpContextContract) {
    try {
        const { icon, name } = request.body();
        await CampType.create({
          icon: icon,
          name : name
        })
        response.json({
          status: "ok",
          message : "Ekleme işlemi başarılı"
        })
      } catch (error) {
        console.log(error)
      }
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
