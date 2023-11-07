
import Route from '@ioc:Adonis/Core/Route'

Route.get('/user', 'UsersController.user').middleware("token");
Route.put("/user", "UsersController.update").middleware("token");
Route.get('/getPublicUser', 'UsersController.getPublicUser');

Route.post("/skill", "SkillsController.create").middleware("token");
Route.get("/skills", "SkillsController.index");


// daha sonra acilabilir
// Route.post('/user', 'UsersController.create')


// Login / Register Routes Start
Route.post("/login", 'AuthController.login');

Route.post("/social-media", "SocialmediasController.create");
