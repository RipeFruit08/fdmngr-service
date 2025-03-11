## Description

This project was created with the [Nest](https://github.com/nestjs/nest)
framework TypeScript starter repository.

## Project setup

Install packages.

```bash
$ npm install
```

[Prisma](https://www.prisma.io) is being as the project's ORM. See
`prisma/schema.prisma` file for the project's data model. This project is using
postgres for the database and it is expecting a database named `fdmngr`. The
project expects a `DATABASE_URL` config set in `.env` file. See `.env.sample`
for a sample env for this project.

### Setting up postgres as a docker instance

```bash
$ docker pull postgres
$ docker run --name postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
```

This will create a docker container running postgres on port 5432. Take note of the value set to `POSTGRES_PASSWORD` as that will be the password for the `postgres` user. You should now be able to access the postgres instance using something like [pgAdmin](https://www.pgadmin.org/download/)

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
