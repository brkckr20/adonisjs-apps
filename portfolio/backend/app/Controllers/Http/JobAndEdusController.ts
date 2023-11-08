import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import JobAndEdu from '../../Models/JobAndEdu';

export default class JobAndEdusController {
  public async index({ response}: HttpContextContract) {
    try {
      const jau = await JobAndEdu.all();
      const data = jau.map(record => {
        return {
          info: record.$attributes,
          extra : record.$extras
        }
      });
      response.json(data);
    } catch (error) {
      console.log(error);
    }
  }

  public async create({ request, response }: HttpContextContract) {
    try {
      await Database.insertQuery().table("job_and_edus").insert(request.body());
      response.json({ message: "Kayıt işlemi başarılı" });
    } catch (error) {
      console.log(error)
    }
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
