

import { ApiProperty } from '@nestjs/swagger'

import { CategoryModel } from '../internal/category.model'

import { ICategoryResponse, ICategoryMeta } from '../interface/category-response.interface'

import { ValidationMessage } from '../interface/validation-message.interface'

class CategoryMeta implements ICategoryMeta {
  @ApiProperty({ example: '1', description: 'Текущая страница' })
  currentPage: ICategoryMeta['currentPage']

  @ApiProperty({ example: '20', description: 'Лимит товаров на странице' })
  perPage: ICategoryMeta['perPage']

  @ApiProperty({ example: '2', description: 'Количество страниц' })
  pageCount: ICategoryMeta['pageCount']

  @ApiProperty({ example: '20', description: 'Всего категорий' })
  totalCount: ICategoryMeta['totalCount']
}

export class CategoryResponseOk implements ICategoryResponse {
  @ApiProperty({ type: [CategoryModel], description: 'Массив категорий' })
  data: CategoryModel[];

  @ApiProperty({ type: CategoryMeta, description: 'Мета информация' })
  meta: CategoryMeta
}

export class CategoryResponseError implements ValidationMessage {
  @ApiProperty({ example: '400', description: 'Код ошибки' })
  statusCode: ValidationMessage['statusCode']

  @ApiProperty({ example: 'Ошибка валидации', description: 'Сообщение' })
  message: ValidationMessage['message']

  @ApiProperty({ example: [{ title: 'Обязательное поле' }], description: 'Список полей, непройденных валидацию' })
  validation: ValidationMessage['validation']
}