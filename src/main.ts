import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { ValidationPipe } from './pipes/validation.pipe'

async function start () {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes(new ValidationPipe())

  const config = new DocumentBuilder()
    .setTitle('Микросервис categories')
    .setDescription('Документация REST API')
    .build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('/categories/swagger', app, document)


  await app.listen(process.env.PORT ?? 3000)

  console.log(`Microservice is running on: ${await app.getUrl()}`)
}

start()