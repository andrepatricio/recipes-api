import {Server} from './server/server'
import {recipesRouter} from './recipes/recipes.router'

const server = new Server();

server.bootstrap([recipesRouter]).then(server=>{
  console.log('Server is listening on:', server.app.address());
}).catch(error => {
  console.log('Erro ao iniciar o servidor');
  console.log(error)
  process.exit(1)
});
