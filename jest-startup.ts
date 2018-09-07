import {Server} from './server/Server'
import {environment} from './commons/environment'
import {recipiesRouter} from './recipies/recipies.router'
import * as jestCli from 'jest-cli'

let server: Server

const beforeAllTests = () =>{
  environment.server.port = process.env.SERVER_PORT || 3031
  server = new Server()
  return server.bootstrap([recipiesRouter]).then(server=>{
    console.log('Server is listening on:', server.app.address());
  }).catch(error => {
    console.log('Erro ao iniciar o servidor');
    console.log(error)
    process.exit(1)
  })
}

const afterAllTests = () => {
  return server.shutdown()
}

beforeAllTests()
  .then(()=>jestCli.run())
  .then(()=> afterAllTests())
  .catch(console.error)
