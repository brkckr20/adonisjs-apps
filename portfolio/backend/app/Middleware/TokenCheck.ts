import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class TokenCheck {

    public async handle(
    { request, auth, response }: HttpContextContract,
    next: () => Promise<void>
  ) {
      try {
        const token = request.headers().authorization?.replace('Bearer ', '');
        if (token) {
          await auth.use("api").authenticate();
          await next()
        } else {
          return response.json({ message: 'Unauthorized', isLoggedIn :false });
        }
      } catch (error) {
        console.error('Token verification failed:', error);
        return response.json({ message: 'Unauthorized', isLoggedIn :false, code : 401 });
      }

  }
}
