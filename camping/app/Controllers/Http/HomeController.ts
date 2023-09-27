import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Slider from 'App/Models/Slider';
import CampType from 'App/Models/CampType';
import Post from 'App/Models/Post';

export default class HomeController {
  public async index({ view }: HttpContextContract) {
    const sliders = await Slider.all();
    const campTypes = await CampType.all();
    const posts = await Post.all();
    return view.render('home', {
      title: "home",
      sliders: sliders,
      campTypes: campTypes,
      posts : posts,
    })
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
