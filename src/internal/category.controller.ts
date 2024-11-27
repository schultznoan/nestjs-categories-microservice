import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common'

import { CategoryService } from './category.service'

import { ICategoryResponse } from '../interface/category-response.interface'

import { CategoriesParamsDto } from 'src/dtos/category-params.dto'

@Controller('categories')
export class CategoryController {
  constructor(private categoriesService: CategoryService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getAll (@Query() params: CategoriesParamsDto): Promise<ICategoryResponse> {
    return this.categoriesService.getAll(params)
  }
}
