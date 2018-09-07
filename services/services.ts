import * as rp from 'request-promise'
import {environment} from '../commons/environment'

export class Services{
  recipePuppyRequest(ingredients:string): rp.RequestPromise{
    return rp({
            uri: `${environment.services.recipePuppy.url}${ingredients}`,
            json: true
          })
  }

  giphyRequest(query: string): rp.RequestPromise{
    return rp({
              uri: `${environment.services.giphy.url}`,
              qs: {
                key: environment.services.giphy.apiKey,
                q: query,
                limit: 1
              },
              json: true
            })
  }

}

export const services = new Services()
