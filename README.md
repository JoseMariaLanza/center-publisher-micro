<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Run in development

1. Clone repo
2. Run
```
yarn install
```

3. Have Nest CLI istalled
```
npm i -g @nestjs/cli
```

4. Up database
```
docker-compose up -d
```

5. Copy __.env.example__ file and rename to __.env__

6. Set __.env__ variables

7. Run app in development environment
```
yarn start:dev
```

8. Insert seeds
```
http://localhost:3000/api/v1/seed

#Notes
Heroku redeploy without changes
```
git commit --allow-empty -m "Trigger Heroku deploy"
git push heroku <master|main>
```

#Notes
Heroku redeploy without changes
```
git commit --allow-empty -m "Trigger Heroku deploy"
git push heroku <master|main>
```

#RUN DOCKERIZED APP IN PRODUCTION
## Steps
1. Create __.env.prod__ file
2. Set environment variables
3. Build add __-d__ for run image detached

## Build
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build

## Run
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up

## Nota
Por defecto, __docker-compose__ usa el archivo ```.env```, por lo que si tienen el archivo .env y lo configuran con sus variables de entorno de producción, bastaría con
```
docker-compose -f docker-compose.prod.yaml up --build
```

## Stack in this project
* MongoDB
* Nest
* Docker
* Mongoose
