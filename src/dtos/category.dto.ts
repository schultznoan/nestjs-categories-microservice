import { IsNumber, IsString, IsOptional, ValidateNested } from 'class-validator'

import { ApiProperty } from '@nestjs/swagger'

import { ICategory } from '../interface/category.interface'

export class CategoryDto implements Pick<ICategory, 'title' | 'params' | 'parentId' | 'sort'> {
  @ApiProperty({ example: '1', description: 'Наименование категории' })
  @IsString({ message: 'Должно быть строкой' })
  title: ICategory['title']

  @ApiProperty({ description: 'Параметры категории' })
  @ValidateNested()
  @IsOptional()
  params?: ICategory['params']

  @ApiProperty({ description: 'Родительская категория' })
  @IsNumber({}, { message: 'Должно быть числом' })
  @IsOptional()
  parentId?: ICategory['parentId']

  @ApiProperty({ description: 'Сортировка' })
  @IsNumber({}, { message: 'Должно быть числом' })
  @IsOptional()
  sort?: ICategory['sort']
}