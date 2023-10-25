import Application from '@ioc:Adonis/Core/Application'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Slider from 'App/Models/Slider';

export default class SlidersController {
  public async index({ }: HttpContextContract) {
    const sliders = await Slider.all();
    return sliders;
  }

  public async create({ request, response,session }: HttpContextContract) {
    try {
      const { baslik, aciklama, link } = request.body();
      const resim = request.file('resim');
      if (resim) {
        await resim.move(Application.tmpPath('uploads'))
      }
      await Slider.create({
        aciklama, baslik, link,
        resim : "/uploads/" +resim?.clientName
      });
      session.flash('bilgi','Kayıt işlemi başarılı')
      return response.redirect("/admin/slider")
    } catch (error) {
      return error
    }
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({ params,session,response }: HttpContextContract) {
    const id = params.id;
    const slider = await Slider.find(id);
    session.flash({
      bilgi : "Silme işlemi başarılı..."
    })
    await slider?.delete();
    return response.redirect("/admin/slider")
  }
}
