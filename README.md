## Instruções para rodar o projeto

### Tecnologias utilizadas

 NodeJS versão 8.1.3
 
 NPM versão 5.0.3
 
 Typescript 2.9.2

  Após instalar as tecnologias descritas acima e baixar os arquivos desse repositório, rodar os seguintes comandos:
  ```
    npm i
  ```
  Para instalar as dependências 

  ```
    tsc
  ```
  Para compilar os arquivos typescript

  ```
    npm start
  ```

  Para rodar a API

### Rodando via Docker

  Para o desenvolvimento ultizei a versão 18.06.1-ce do docker.
  Após baixar os arquivos desse repositório e entra no diretório criado rodar o seguinte comando para criar a imagem a partir do Dockerfile:
  ```
   docker build . -t {image_name}
  ```

  Trocar {image_name} pelo nome desejado para a imagem.

  Após gerar a imagem podemos rodar o container com o seguinte comando:
  ```
    docker run -p {port}:3030 -d {image_name}
  ```
  O {image_name} deve ser o mesmo escolhido durante o build da imagem.
  O {port} deve ser substituido pela porta em que você deseja rodar a aplicação na sua máquina.

  Para testar usar o seguinte comando:
  ```
    curl -X GET localhost:3030/recipies?i=onion,garlic,tomato
  ```
