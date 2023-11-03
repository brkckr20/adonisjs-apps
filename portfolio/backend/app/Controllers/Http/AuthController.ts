import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from '../../Models/User';
import { LoginMessages } from '../../../interfaces'

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
        return;
      }
      if (user?.parola !== password) {
        response.json({
          message: "Incorrect password",
          code : 404
        } as LoginMessages)
        return;
      }

      const jwt = await auth.use("api").generate(user, { expiresIn: "1 day" });
      return response.json({
        token: jwt,
        code : 200
      })

    } catch (error) {
      console.log(error);
    }
  }
}
