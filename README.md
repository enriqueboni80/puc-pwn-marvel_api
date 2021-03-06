# pwn-marvel-api

Sistema utilizando NodeJs onde é possível consultar todos os heróis da Marvel pelo nome e obter detalhes sobre cada personagem. 
Esta essa solução segue seguintes requisitos:
* Consultar a API da marvel para desenvolver essa solução (https://developer.marvel.com/);
* Para fins de marketing pós-evento, o sistema deve possuir algum tipo de autenticação (login e
logout utilizando passport.js, auth0, firebase auth, manualmente na base de dados ou qualquer
outro tipo de autenticação);
* Deverá ser possível buscar por nome do personagem;
* Os resultados da busca devem ser paginados de 10 em 10 (caso houver mais de 10 resultados na
busca);
* O site deverá possibilitar cada usuário marcar/desmarcar os personagens como favoritos;
* Deverá ter uma tela de listagem dos personagens favoritos;
* Quando clicar em algum personagem, deverá levar o usuário para uma página com os seguintes
detalhes: Nome; Foto; Descrição;

## Configuracoes Iniciais
##### Configurar as variaveis de ambiente
```
copy .env__default .env
```
* Configurar o arquivo .env seguindo as instrucoes que estao dentro do proprio arquivo]
##### Instalar as dependências GLOBAIS
```
npm run install-globals
```
##### Instalar as dependências
```
npm install
```
##### Rodar a migrate para criar o banco
```
npm run knex migrate:latest
```
##### rodar seed para primeira inserção nas tabelas
```
npm run knex seed:run
```
##### Start na aplicacao
```
npm start
```
