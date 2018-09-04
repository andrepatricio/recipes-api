import * as restify from 'restify'
import {environment} from '../commons/environment'
import {Router} from '../commons/router'

export class Server{

  app:restify.Server;

  initRoutes(routers :Router[]): Promise<any>{
    return new Promise((resolve, reject)=> {
      try{
        this.app =  restify.createServer({
          name: 'recipes-api',
          version: '1.0.0'
        })

        this.app.use(restify.plugins.queryParser());

        for(let router of routers){
          router.applyRouter(this.app);
        }

        this.app.listen(environment.server.port, ()=>{
          resolve(this.app)
        });

      }catch{
        reject()
      }
    })
  }

  bootstrap(routers :Router[]): Promise<Server>{
    return this.initRoutes(routers).then(() => this)
  }
}
