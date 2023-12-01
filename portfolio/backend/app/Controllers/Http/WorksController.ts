import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'
import Database from '@ioc:Adonis/Lucid/Database'
import Work from '../../Models/Work';


export default class WorksController {
  public async index({ request,response }: HttpContextContract) {
    try {
      const params = request.params();
      const work = await Work.findByOrFail("slug", params.slug, params);
      return response.json(work);
    } catch (error) {
      return response.status(404).json({ error: 'Work not found' });
    }
  }

  public async create({ request }: HttpContextContract) {
    try {
      const body = request.body();

      const fileFields = ["mainImage", "image1", "image2", "image3", "image4"];
      const fileValues: Record<string, string> = {};

      for (const field of fileFields) {
        const file = request.file(field);
        if (file) {
          const newFileName = `work-${file.clientName}`;
          await file.move(Application.tmpPath("uploads/work"), {
            name: newFileName,
          });
          fileValues[field] = newFileName;
        }
      }

      const values = {
        title: body.title,
        category: body.category,
        description: body.description,
        year: body.year,
        ...fileValues,
      };

      await Database.insertQuery().table("works").insert(values);

      return { message: "Kayıt işlemi başarılı" };
    } catch (error) {
      console.error(error);
      return { error: "Kayıt işlemi başarısız" };
    }
  }



  public async store({}: HttpContextContract) {}

  public async show({ response }: HttpContextContract) {
    try {
      const works = await Work.all();
      return response.send(works);
    } catch (error) {
      console.log(error)
    }
  }

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
