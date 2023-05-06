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
```

## Stack in this project
* MongoDB
* Nest
* Docker
* Mongoose
