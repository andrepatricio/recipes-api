import * as restify from 'restify'
import {Router} from '../commons/router'

class RecipesRouter extends Router{

  applyRouter(application: restify.Server){

    application.get(`/recipes`, (req, resp, next)=>{
      let ingredients = req.query.i.split(',')
      if(ingredients.length > 3){
        resp.send(400)
      }
      let result = []
      resp.json(result)
    });
  }
}

export const recipesRouter = new RecipesRouter()
