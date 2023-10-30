
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'PagesController.Home')
Route.get("/about_us", "PagesController.AboutUs");
Route.get("/activities", "PagesController.Activities");
Route.get("/contact", "PagesController.Contact");
Route.get("/login", "PagesController.Login");

// auth
Route.post('/login', 'AuthController.login');
Route.post('/register', 'AuthController.register');
Route.get('/logout', 'AuthController.logout');


// Route.get('/admin/slider', 'PagesController.Slider')

Route.group(() => {
  Route.get('/admin/slider', 'PagesController.Slider')
  Route.post('/admin/slider/:id', 'SlidersController.destroy')
  Route.get("/admin/facilities", 'PagesController.Facilities')
  Route.get("/admin/blogposts", 'PagesController.BlogPost')
  Route.get("/admin", 'PagesController.AdminHome')
}).middleware(['auth']);



Route.get('/gallery', async ({ view }) => {
  return view.render('gallery' , {
    title : "gallery"
  })
})

Route.get('/blog', async ({ view }) => {
  return view.render('blog' , {
    title : "blog"
  })
})


Route.get("/slider", 'SlidersController.index');
Route.post("/slider", 'SlidersController.create');

Route.post("/facilities", "FacilitiesController.create");

Route.post("/camp-type", 'CampTypesController.create');
Route.post("/post", 'PostsController.create');


Route.get("*", "PagesController.Error404");
