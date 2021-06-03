# NestJS Prisma Docker

> DON'T commit .env files into version control, add `.env` to `.gitignore`. `.env` files are added here as an example.

Develop the Nest application

```bash
npm install

cp .env.example .env

npx prisma generate

npm run start:dev
```

## Docker File

Get started by running

```bash
docker build -t nest-api .

docker run -p 3000:3000 --env-file .env -d nest-api
```

## Docker Compose

```bash
docker-compose up
# or detached
docker-compose up -d
```
