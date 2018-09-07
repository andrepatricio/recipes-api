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

  getRecipies = async (req, resp, next)=>{
    services.recipePuppyRequest(req.query.i)
              .then(response=>{
                let serviceResult = {
                  keywords: req.query.i.split(','),
                  recipes: []
                }
                let recipes = response.results.map(async (elem)=>{
                  let recipe = {
                          title: elem.title,
                          link: elem.href,
                          ingredients: elem.ingredients.split(','),
                          gif: ''
                        }
                  await services.giphyRequest(elem.title).then(giphyResult =>{
                    recipe.gif = giphyResult.data[0].url
                  });
                  return recipe
                })
                Promise.all(recipes).then(resultWithGifs=>{
                  serviceResult.recipes = resultWithGifs
                  resp.json(serviceResult)
                })
              }).catch(next)
  }

  applyRouter(application: restify.Server){
    application.get(`/recipies`, [this.validateParams, this.getRecipies]);
  }
}

export const recipiesRouter = new RecipiesRouter()
