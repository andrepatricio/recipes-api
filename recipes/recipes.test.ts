import 'jest'
import * as request from 'supertest'


test('GET /recipes with three parameters', ()=>{
  return request('localhost:3030')
    .get('/recipes?i=tomato, onion, garlic')
    .then(response=>{
      expect(response.status).toBe(200)
    })
})

test('GET /recipes with more than three parameters', ()=>{
  return request('localhost:3030')
    .get('/recipes?i=tomato, onion, garlic, potato')
    .then(response=>{
      expect(response.status).toBe(400)
    })
})
