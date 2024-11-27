import { IsNumber, IsEnum, IsOptional } from 'class-validator'
import { Transform } from 'class-transformer'

import { ICategoryParams } from '../interface/category-params.interface'

import { SORT_DIRECTION } from '../constant'

export class CategoriesParamsDto implements ICategoryParams {
  @IsNumber({}, { message: 'Должно быть числом' })
  @IsOptional()
  @Transform(({ value }) => +value)
  page?: ICategoryParams['page']

  @IsNumber({}, { message: 'Должно быть числом' })
  @IsOptional()
  @Transform(({ value }) => +value)
  limit?: ICategoryParams['limit']

  @IsEnum(SORT_DIRECTION, { message: 'Сортировка может осуществляться только по ASC или DESC' })
  @IsOptional()
  @Transform(({ value }) => value.toUpperCase())
  sort?: ICategoryParams['sort']

}
