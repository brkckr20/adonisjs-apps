
import Route from '@ioc:Adonis/Core/Route'

Route.get('/user', 'UsersController.user')

// daha sonra acilabilir
//Route.post('/user', 'UsersController.create')
//Route.put('/user', 'UsersController.update')

Route.post("/social-media", "SocialmediasController.create");
