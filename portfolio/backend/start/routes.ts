
import Route from '@ioc:Adonis/Core/Route'

Route.get('/user', 'UsersController.user').middleware("token");
Route.put("/user", "UsersController.update").middleware("token");
Route.get('/getPublicUser', 'UsersController.getPublicUser');

Route.post("/skill", "SkillsController.create").middleware("token");
Route.get("/skills", "SkillsController.index");

Route.get("/socialmedia", 'SocialmediasController.index');
Route.post("/social-media", "SocialmediasController.create").middleware("token");

Route.get("/job-and-edu", 'JobAndEdusController.index');
Route.post("/job-and-edu", 'JobAndEdusController.create').middleware("token");

// daha sonra acilabilir
// Route.post('/user', 'UsersController.create')


// Login / Register Routes Start
Route.post("/login", 'AuthController.login');


