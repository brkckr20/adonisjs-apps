import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

/* Home için */
import Slider from 'App/Models/Slider';
import CampType from 'App/Models/CampType';
import Post from 'App/Models/Post';

export default class PagesController {

  public async Home({view} : HttpContextContract) {
    const sliders = await Slider.all();
    const campTypes = await CampType.all();
    const posts = await Post.all();
    return view.render('home', {
      title: "home",
      sliders: sliders,
      campTypes: campTypes,
      posts : posts,
    })
  }

  public async AboutUs({ view }: HttpContextContract) {
    return view.render("about_us", {
      title : "pages"
    })
  }

  public async Activities({ view }: HttpContextContract) {
    return view.render('activities', {
      title : "pages"
    })
  }

  public async Contact({ view }:HttpContextContract) {
    return view.render('contact', {
      title : "pages"
    })
  }

  public async Error404({ view }: HttpContextContract) {
    return view.render('error404')
  }
}
