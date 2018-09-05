import 'jest'
import {services} from './services'

test('GET GIPHY API', ()=>{
  return services.giphyRequest('Simple Jalapeno Salsa')
                  .then(response=>{
                    expect(response).toBeDefined()
                  })
})

test('GET Recipe Puppy API', ()=>{
  return services.recipePuppyRequest('onion,tomato,garlic')
                  .then(response=>{
                    expect(response).toBeDefined()
                  })
})
