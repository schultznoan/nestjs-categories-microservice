import { Module } from '@nestjs/common'

import { SequelizeModule } from '@nestjs/sequelize'

import { ConfigModule } from '@nestjs/config'

import { CategoryModule } from './internal/category.module'
import { CategoryModel } from './internal/category.model'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [CategoryModel],
      autoLoadModels: true
    }),
    CategoryModule
  ]
})

export class AppModule {}
