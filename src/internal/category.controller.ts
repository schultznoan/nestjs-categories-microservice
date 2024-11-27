import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common'

import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger'

import { CategoryService } from './category.service'

import { ICategoryResponse } from '../interface/category-response.interface'

import { CategoryResponseOk, CategoryResponseError } from '../dtos/category-response.dto'
import { CategoriesParamsDto } from '../dtos/category-params.dto'

@ApiTags('Категории')
@Controller('categories')
export class CategoryController {
  constructor(private categoriesService: CategoryService) {}

  @ApiOperation({
    summary: 'Получение списка категорий'
  })
  @ApiQuery({
    name: 'page',
    description: 'Текущая страница пагинации',
    required: false
  })
  @ApiQuery({
    name: 'limit',
    description: 'Максимальное количество результатов',
    required: false
  })
  @ApiQuery({
    name: 'sort',
    description: 'Направление сортировки (asc | desc)',
    required: false
  })
  @ApiResponse({
    status: 200,
    type: CategoryResponseOk
  })
  @ApiResponse({
    status: 400,
    type: CategoryResponseError
  })
  @Get()
  @HttpCode(HttpStatus.OK)
  getAll (@Query() params: CategoriesParamsDto): Promise<ICategoryResponse> {
    return this.categoriesService.getAll(params)
  }
}
