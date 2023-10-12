/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'PagesController.Home')
Route.get("/about_us", "PagesController.AboutUs");
Route.get("/activities", "PagesController.Activities");
Route.get("/contact", "PagesController.Contact");


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

Route.get("*", "PagesController.Error404");

Route.get("/slider", 'SlidersController.index');
Route.post("/slider", 'SlidersController.create');

Route.post("/camp-type", 'CampTypesController.create');
Route.post("/post", 'PostsController.create');
