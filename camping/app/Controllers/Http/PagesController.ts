import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

/* Home için */
import Slider from 'App/Models/Slider';
import CampType from 'App/Models/CampType';
import Post from 'App/Models/Post';

// facilites
import Facility from 'App/Models/Facility';

export default class PagesController {

  public async Home({view,auth} : HttpContextContract) {
    const sliders = await Slider.all();
    const campTypes = await CampType.all();
    const posts = await Post.all();
    return view.render('home', {
      title: "home",
      sliders: sliders,
      campTypes: campTypes,
      posts: posts,
      username: auth.user?.username
    })
  }

  public async AboutUs({ view,auth }: HttpContextContract) {
    return view.render("about_us", {
      title: "pages",
      username: auth.user?.username
    })
  }

  public async Activities({ view,auth }: HttpContextContract) {
    return view.render('activities', {
      title: "pages",
      username: auth.user?.username
    })
  }

  public async Contact({ view,auth }:HttpContextContract) {
    return view.render('contact', {
      title: "pages",
      username: auth.user?.username
    })
  }


  public async Login({ view, auth }: HttpContextContract) {
    await auth.use('web').authenticate();
    return view.render('auth.login', {
      username: auth.user?.username
    })
  }

  public async AdminHome({ view }: HttpContextContract) {
    return view.render("auth.home");
  }
  public async Facilities({ view }: HttpContextContract) {
    const facilities = await Facility.all();
    return view.render("auth.facilities", {
      facilities : facilities
    });
  }

  public async Slider({ view, auth }: HttpContextContract) {
    await auth.use('web').authenticate();
    return view.render("auth.slider", {
      username: auth.user?.username
    });
  }

  public async Error404({ view }: HttpContextContract) {
    return view.render('error404')
  }
}
