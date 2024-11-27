import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common'

import { CategoryService } from './category.service'

import { CategoryModel } from './category.model'

@Controller('categories')
export class CategoryController {
  constructor(private categoriesService: CategoryService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getAll (): Promise<CategoryModel[]> {
    return this.categoriesService.getAll()
  }
}
