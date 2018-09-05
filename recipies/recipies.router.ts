import * as restify from 'restify'
import {Router} from '../commons/router'
import {services} from '../services/services'

class RecipiesRouter extends Router{

  validateParams = (req, resp, next)=>{
    let ingredients = req.query.i.split(',')
    if(ingredients.length > 3){
      resp.send(400)
      return next(false)
    }
    next()
  }

  getRecipies = (req, resp, next)=>{
    services.recipePuppyRequest(req.query.i)
              .then(result=>{
                console.log(result)
                resp.send(200)
              }).catch(next)
  }

  applyRouter(application: restify.Server){
    application.get(`/recipies`, [this.validateParams, this.getRecipies]);
  }
}

export const recipiesRouter = new RecipiesRouter()
