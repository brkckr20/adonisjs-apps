import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AboutusesController {
  public async index({ view }: HttpContextContract) {
    view.render("about_us", {
      title : "pages"
    })
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
