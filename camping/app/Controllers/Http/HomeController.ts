import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Slider from 'App/Models/Slider';
import CampType from 'App/Models/CampType';

export default class HomeController {
  public async index({ view }: HttpContextContract) {
    const sliders = await Slider.all();
    const campTypes = await CampType.all();
    return view.render('home', {
      title: "home",
      sliders: sliders,
      campTypes: campTypes,
    })
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
