
import Route from '@ioc:Adonis/Core/Route'

Route.get('/user', 'UsersController.user').middleware("token")

// daha sonra acilabilir
// Route.post('/user', 'UsersController.create')
// Route.put('/user', 'UsersController.update')


// Login / Register Routes Start
Route.post("/login", 'AuthController.login');

Route.post("/social-media", "SocialmediasController.create");
