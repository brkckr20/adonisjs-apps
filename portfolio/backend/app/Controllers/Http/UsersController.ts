import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import User from '../../Models/User';
// import Socialmedia from '../../Models/Socialmedia';

export default class UsersController {
  public async user({ response,auth }: HttpContextContract) { // admin ekranı için
    try {
      const user = auth.user;
      delete user?.$attributes.parola;
      response.send(user);
    } catch (error) {
      console.log(error);
    }
  }

  public async getPublicUser({ response }: HttpContextContract) { // admin ekranı için değil
    const user = await User.findOrFail(2);
    delete user?.$attributes.parola;
    response.send(user);
  }

  public async create({request,response} : HttpContextContract) {
    try {
      await Database.insertQuery().table("users").insert(request.body())
      response.json({message : "Kayıt işlemi başarılı"})
    } catch (error) {
      console.log(error)
    }
  }

  async update({ request, response, auth }: HttpContextContract) {
    const user = auth.user;
    const id = user.$attributes.id;
    const updateUser = await User.findOrFail(id);
    const { ad_soyad, unvan, adres, mail, mail2, telefon } = request.body();
    updateUser.ad_soyad = ad_soyad;
    updateUser.unvan = unvan;
    updateUser.adres = adres;
    updateUser.mail = mail;
    updateUser.mail2 = mail2;
    updateUser.telefon = telefon;
    await updateUser.save();
    response.json({
      message: "Kullanıcı güncelleme işlemi başarılı",
      code : 200
    })
  }

  // async update({ request, response }: HttpContextContract) {
  //   const coverImage = request.file('resim');
  //   const { parola } = request.body();
  //   const hashedPassword = await Hash.make(parola);
  //       if (coverImage) {
  //         await coverImage.move(Application.tmpPath('uploads'));
  //         await User
  //           .query()
  //           .where('id', 2)
  //           .update({ resim: "/uploads/" + coverImage.clientName, parola : hashedPassword });
  //   }
  //   response.json({
  //     message : "Güncelleme işlemi başarıyla tamamlandı!"
  //   })
  // }

}
