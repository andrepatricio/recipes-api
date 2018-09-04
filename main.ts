import {Server} from './server/server'
import {recipiesRouter} from './recipies/recipies.router'

const server = new Server();

server.bootstrap([recipiesRouter]).then(server=>{
  console.log('Server is listening on:', server.app.address());
}).catch(error => {
  console.log('Erro ao iniciar o servidor');
  console.log(error)
  process.exit(1)
});
