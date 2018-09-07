import 'jest'
import * as request from 'supertest'


test('GET /recipies with three parameters', ()=>{
  const keywords = ['tomato','onion','garlic']
  return request('localhost:3030')
    .get(`/recipies?i=${keywords.join()}`)
    .then(response=>{
      expect(response.status).toBe(200)
      expect(response.body).toBeDefined()
      expect(response.body.keywords).toEqual(keywords)
      expect(response.body.recipes).toBeInstanceOf(Array)
      expect(response.body.recipes.length).toBeGreaterThan(0)
    })
})

test('GET /recipies with more than three parameters', ()=>{
  return request('localhost:3030')
    .get('/recipies?i=tomato,onion,garlic,potato')
    .then(response=>{
      expect(response.status).toBe(400)
    })
})
