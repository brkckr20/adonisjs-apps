import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Skill from '../../Models/Skill';

export default class SkillsController {
  public async index({ response }: HttpContextContract) {
    try {
      const skills = await Skill.all();
      response.json(skills);
    } catch (error) {
      console.log(error);
    }
  }

  public async create({ request, response, auth }: HttpContextContract) {
    try {
      const skill = {
        userId: auth.user.id,
        ...request.body()
      }
      await Database.insertQuery().table("skills").insert(skill);
      response.json({message : "Kayıt işlemi başarılı", code : 201})
    } catch (error) {
      console.log(error)
    }
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({ request, response }: HttpContextContract) {
    const {id} = request.params();
    try {
      const skill = await Skill.firstOrFail(id);
      await skill.delete();
      response.json({message : "Silme işlemi başarılı", code : 200})
    } catch (error) {

    }
  }
}
