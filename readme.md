# Info - Desafio Backend

Foi desenvolvida uma solução backend utilizando o framework Nestjs e banco de dados Postgres
Além do desenvolvimento do serviço backend, também foi desenvolvida uma página frontend utilizando o framework Angular 17 e containerização de todo o projeto.

## Estrutura do projeto:
O projeto contém 2 pastas contendo o backend e frontend respectivamente.
Utilizando o arquivo docker-compose.yml, é possível iniciar toda a aplicacação.

## Requisitos:
- Nodejs
- Docker

## Para iniciar o projeto:
- o arquivo docker-compose.yml contém todas as configurações necessárias.
- via terminal, entre na raiz do projeto e execute: 'docker-compose up'

## Para executar os serviços separadamente via docker:
### Bando de dados
 - via terminal, entre na raiz do projeto e execute: docker-compose up db

### Backend
 - via terminal, entre na raiz do projeto e execute: docker-compose up backend

### Frontend
 - via terminal, entre na raiz do projeto e execute: docker-compose up frontend

## Para executar os serviços localmente (sem docker):
### Backend
 - renomeie o arquivo .env.example para .env e insira a string de conexão na propriedade "DATABASE_URL"
 - via terminal, entre na pasta ./backend
 - execute:
    - npm install
    - npm run start:dev

### Frontend
 - via terminal, entre na pasta ./frontend
 - execute:
    - npm install
    - ng serve


