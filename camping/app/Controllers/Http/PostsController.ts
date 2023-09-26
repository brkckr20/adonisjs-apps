import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post';

export default class PostsController {
  public async index({}: HttpContextContract) {}

  public async create({ request,response }: HttpContextContract) {
      try {
        const { post_image, title, content } = request.body();
        await Post.create({
          post_image,
          content,
          title
        })
      } catch (error) {

      }
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
