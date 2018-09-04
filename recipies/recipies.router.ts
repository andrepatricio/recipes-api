import * as restify from 'restify'
import {Router} from '../commons/router'
import * as rp from 'request-promise'

class RecipiesRouter extends Router{

  applyRouter(application: restify.Server){
    application.get(`/recipies`, (req, resp, next)=>{
      let ingredients = req.query.i.split(',')
      if(ingredients.length > 3){
        resp.send(400)
        return next()
      }
      rp({
          uri: `http://www.recipepuppy.com/api/?i=${ingredients}`,
          json: true
        }).then(result=>{
          resp.json(result)
        }).catch(next)
    });
  }
}

export const recipiesRouter = new RecipiesRouter()
