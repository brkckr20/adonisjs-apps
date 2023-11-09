import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import Message from '../../Models/Message';

export default class MessagesController {
  public async create({ request, response }: HttpContextContract) {
    try {
      const { email } = request.body();
      const question = await Message.findBy("email", email);

      if (question !== null) {
        if (question.isReplied === false) {
          console.log(question.isReplied)
          response.json({
            message : "Daha önceden göndermiş olduğunuz ve cevaplanmamış maiileriniz var!!!"
          })
        }
        else {
          await Database.insertQuery().table("messages").insert(request.body());
        response.json({ message: "Kayıt işlemi başarılı" });
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
}
