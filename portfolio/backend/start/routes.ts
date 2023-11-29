import Route from '@ioc:Adonis/Core/Route'

Route.get('/user', 'UsersController.user').middleware("token");
Route.put("/user", "UsersController.update").middleware("token");
Route.get('/getPublicUser', 'UsersController.getPublicUser');

/* skills */
Route.post("/skill", "SkillsController.create").middleware("token");
Route.delete("/skill/:id", "SkillsController.destroy").middleware("token");
Route.get("/skills", "SkillsController.index");

Route.get("/socialmedia", 'SocialmediasController.index');
Route.post("/social-media", "SocialmediasController.create").middleware("token");

Route.get("/job-and-edu", 'JobAndEdusController.index');
Route.get("/job-and-edu/:id", 'JobAndEdusController.show');
Route.post("/job-and-edu", 'JobAndEdusController.create').middleware("token");


Route.post("/messages", 'MessagesController.create');
Route.get("/messages", 'MessagesController.show');
Route.put("/messages/:id", 'MessagesController.update');


Route.post("/work", 'WorksController.create').middleware("token");
Route.get("/work", 'WorksController.show');

// Login / Register Routes Start
Route.post("/login", 'AuthController.login');


