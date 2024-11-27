import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function start () {
  const app = await NestFactory.create(AppModule)

  await app.listen(process.env.PORT ?? 3000)

  console.log(`Microservice is running on: ${await app.getUrl()}`)
}

start()