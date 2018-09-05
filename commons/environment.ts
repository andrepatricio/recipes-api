export const environment = {
  server:{
    port: process.env.SERVER_PORT || 3030
  },
  services:{
    recipePuppy:{
      url: 'http://www.recipepuppy.com/api/?i='
    },
    giphy:{
      apiKey: 'a2fSpU6c85ugdUp64P1aod53USlwBr5i',
      url: 'http://api.giphy.com/v1/gifs/search'
    }
  }
}
