import Application from '@ioc:Adonis/Core/Application'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CampType from 'App/Models/CampType'

export default class CampTypesController {
  public async index({ }: HttpContextContract) {
    const campTypes = await CampType.all();
    return campTypes;
  }

  public async create({request,response }: HttpContextContract) {
    try {
      const { name } = request.body(); //icon,
      const icon = request.file("icon");
      if (icon) {
        await icon.move(Application.tmpPath("uploads"))
      }
        await CampType.create({
          icon: "/uploads/" +icon?.clientName,
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
