import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import Message from '../../Models/Message';
import Mail from '@ioc:Adonis/Addons/Mail';

export default class MessagesController {
  public async create({ request, response }: HttpContextContract) {
    try {
      const { name, email, subject, message } = request.body();
      const mail = await Message.findBy("email", email);

      if (mail) {
        if (!mail.isReplied) {
          return response.json({ message: "Cevaplanmamış mailleriniz var!", code: 400});
        }
      }
      await Database.insertQuery().table("messages").insert(request.body());
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
}
