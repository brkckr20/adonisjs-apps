import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Socialmedia from '../../Models/Socialmedia';
import Database from '@ioc:Adonis/Lucid/Database';

export default class SocialmediasController {
  public async index({}: HttpContextContract) {}

  async create({ request, response }: HttpContextContract) {
    console.log(request.body())
    try {
      await Database.insertQuery().table("socialmedias").insert(request.body())
      response.json({message : "Kayıt işlemi başarılı"})
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
