import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';

export default class AuthController {
  public async login({ request, response, auth, session }: HttpContextContract) {
    const { username, password } = request.all();
    try {
      await auth.attempt(username, password)
    } catch (error) {
      session.flash('form', 'Your username, email, or password is incorrect')
      return response.redirect().back()
    }
    return response.redirect('/')
  }

  public async register({ request, response, auth }: HttpContextContract) {
    const data = request.all();
    const user = await User.create(data)
    await auth.login(user)
    return response.redirect('/')

  }

  public async logout({ response, auth }: HttpContextContract) {
    await auth.logout()
    return response.redirect().toRoute('/');
  }
}
