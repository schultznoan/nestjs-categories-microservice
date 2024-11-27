import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

import { ValidationPipe } from './pipes/validation.pipe'

async function start () {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(process.env.PORT ?? 3000)

  console.log(`Microservice is running on: ${await app.getUrl()}`)
}

start()