import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Facility from 'App/Models/Facility';

export default class FacilitiesController {
  public async index({}: HttpContextContract) {}

  public async create({ request, response, session }: HttpContextContract) {
    try {
      const { name, className } = request.body();
      await Facility.create({
        name,
        class_name : className
      })
      session.flash('bilgi', 'Kayıt işlemi başarılı')
      return response.redirect("/admin/facilities")
    } catch (error) {
        return error
    }
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
