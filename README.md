# NestJS Prisma Docker

Get started by running

```bash
npm install

npx prisma generate

docker build -t nest-api .

docker run -p 3000:3000 --env-file prisma/.env -d nest-api
```
