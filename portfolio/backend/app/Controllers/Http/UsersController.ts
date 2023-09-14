import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Application from '@ioc:Adonis/Core/Application'
import User from '../../Models/User';
import Hash from '@ioc:Adonis/Core/Hash'
import Socialmedia from '../../Models/Socialmedia';



export default class UsersController {
  public async user({ response }: HttpContextContract) {
    const user = await User.find(1)
    const socialMediaList = await Socialmedia.all();
    delete user?.$attributes.parola;

    response.json({
      user: user,
      socialMediaList
    });
  }

  async create({request,response} : HttpContextContract) {
    try {
      await Database.insertQuery().table("users").insert(request.body())
      response.json({message : "Kayıt işlemi başarılı"})
    } catch (error) {
      console.log(error)
    }
  }

  async update({ request, response }: HttpContextContract) {
    const coverImage = request.file('resim');
    const { parola } = request.body();
    const hashedPassword = await Hash.make(parola);
        if (coverImage) {
          await coverImage.move(Application.tmpPath('uploads'));
          await User
            .query()
            .where('id', 1)
            .update({ resim: "/uploads/" + coverImage.clientName, parola : hashedPassword });
    }
    response.json({
      message : "Güncelleme işlemi başarıyla tamamlandı!"
    })
  }
}
