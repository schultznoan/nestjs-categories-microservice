import { Module } from '@nestjs/common';

import { SequelizeModule } from '@nestjs/sequelize'

import { CategoryController } from './category.controller';

import { CategoryService } from './category.service'

import { CategoryModel } from './category.model'

@Module({
  imports: [
    SequelizeModule.forFeature([CategoryModel])
  ],
  controllers: [CategoryController],
  providers: [CategoryService]
})

export class CategoryModule {}