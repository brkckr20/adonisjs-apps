import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ActivitiesController {
  public async index({ view }: HttpContextContract) {
    return view.render('activities')
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
