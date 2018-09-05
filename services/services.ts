import * as rp from 'request-promise'
import {environment} from '../commons/environment'

export class Services{
  recipePuppyRequest(ingredients:string): Promise<any>{
    return new Promise<Services>((resolve, reject)=>{
      rp({
          uri: `${environment.services.recipePuppy.url}${ingredients}`,
          json: true
        })
        .then(resolve)
        .catch(reject)
    })
  }

  giphyRequest(query: string): Promise<any>{
    return new Promise<Services>((resolve, reject)=>{
      rp({
          uri: `${environment.services.giphy.url}`,
          qs: {
            key: environment.services.giphy.apiKey,
            q: query,
            limit: 1
          }
        })
        .then(resolve)
        .catch(reject)
    })
  }

}

export const services = new Services()
