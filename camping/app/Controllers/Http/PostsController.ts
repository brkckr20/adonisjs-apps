import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'
import Post from 'App/Models/Post';
import slugify from 'slugify';

export default class PostsController {
  public async index({}: HttpContextContract) {}

  public async create({ request, response, session }: HttpContextContract) {
      try {
        const { title, content } = request.body();
        const post_image = request.file("post_image");
        if (post_image) {
          post_image.move(Application.tmpPath('uploads'))
          await Post.create({
            content,
            title,
            post_image: "/uploads/" + post_image.clientName,
            slug: slugify(title, {
              lower : true
            })
          })
          session.flash('bilgi', 'Kayıt işlemi başarılı')
          return response.redirect("/admin/blogposts")
        }

      } catch (error) {

      }
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
