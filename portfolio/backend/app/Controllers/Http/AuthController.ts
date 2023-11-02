import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User';
import {LoginMessages} from '../../../interfaces'

export default class AuthController {
  public async login({request,response,auth}: HttpContextContract ) {
    try {

      const username = request.body().username;
      const password = request.body().password;
      const user = await User.findBy('username', username);
      if (!user) {
        response.json({
          message: "User not found!",
          code : 404
        } as LoginMessages)
      }

      return user
    } catch (error) {

    }
  }
}
