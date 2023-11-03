import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Application from '@ioc:Adonis/Core/Application'
import User from '../../Models/User';
import Hash from '@ioc:Adonis/Core/Hash'
// import Socialmedia from '../../Models/Socialmedia';

export default class UsersController {
  public async user({ response,auth }: HttpContextContract) {
    try {
      const user = auth.user;
      delete user?.$attributes.parola;
      response.send(user);
    } catch (error) {
      console.log(error);

    }

    // response.json({message : "user tokeni karsilastirildi..."});
    // const user = await User.find(2)
    // delete user?.$attributes.parola;
    // // const jwt = await auth.use("api").generate(user, { expiresIn : "1 day"});
    // response.json({
    //   user: user,
    //   // token : jwt
    // });
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
            .where('id', 2)
            .update({ resim: "/uploads/" + coverImage.clientName, parola : hashedPassword });
    }
    response.json({
      message : "Güncelleme işlemi başarıyla tamamlandı!"
    })
  }

}
