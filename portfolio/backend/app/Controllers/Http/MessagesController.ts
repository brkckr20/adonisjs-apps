import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import Mail from '@ioc:Adonis/Addons/Mail';
import Support from '../../Models/Support';

export default class MessagesController {
  public async create({ request, response }: HttpContextContract) {
    try {
      const { name, email, subject, message } = request.body();
      const mail = await Support.findBy("email", email);

      if (mail) {
        if (!mail.isReplied) {
          return response.json({ message: "Cevaplanmamış mailleriniz var!", code: 400});
        }
      }
      const veri = {
        isReplied: "hayir",
        ...request.body(),
      }
      await Database.insertQuery().table("supports").insert(veri);
      const html = `
        <div>
          <p>Name: ${name}</p>
          <p>Email:  ${email}</p>
          <p>Subject: ${subject}</p>
          <p>Message: ${message}</p>
        </div>
      `;

      await Mail.send((message) => {
        message
          .from(email)
          .to("burak2043@gmail.com")
          .subject("Burak Cakir")
          .html(html);
      });

      return response.send({ message: "Mail sent successfully", code : 200 });
    } catch (error) {
      return response.status(500).json({ error: "Internal Server Error" });
    }
  }

  public async show({ response }: HttpContextContract) {
    try {
      const messages = await Database.from("supports").select("id","name","email","subject","message","isReplied","created_at");
      return response.json(messages);
    } catch (error) {
      console.log(error);
    }
  }

  public async update({ request, response }: HttpContextContract) {
    try {
      const { id } = request.params();
      const message = await Support.firstOrFail(id);
      message.isReplied = "evet";
      await message.save();
      response.json({
        message : "Kayit islemi basarili"
      });
    } catch (error) {

    }
  }
}
