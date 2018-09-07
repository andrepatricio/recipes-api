import 'jest'
import {services} from './services'

test('GET GIPHY API', ()=>{
  return services.giphyRequest('Simple Jalapeno Salsa')
                  .then(response=>{
                    expect(response).toBeDefined()
                    expect(response.data).toBeInstanceOf(Array)
                    expect(response.data.length).toEqual(1)
                  })
})

test('GET Recipe Puppy API', ()=>{
  return services.recipePuppyRequest('onion,tomato,garlic')
                  .then(response=>{
                    expect(response).toBeDefined()
                    expect(response.results).toBeInstanceOf(Array)
                    expect(response.results.length).toBeGreaterThan(0)
                  })
})
