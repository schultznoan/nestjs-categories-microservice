import { IsNumber, IsString, IsOptional, ValidateNested } from 'class-validator'

import { ICategory } from '../interface/category.interface'

export class CategoryDto implements Pick<ICategory, 'title' | 'params' | 'parentId' | 'sort'> {
  @IsString({ message: 'Должно быть строкой' })
  title: ICategory['title']

  @ValidateNested()
  @IsOptional()
  params?: ICategory['params']

  @IsNumber({}, { message: 'Должно быть числом' })
  @IsOptional()
  parentId?: ICategory['parentId']

  @IsNumber({}, { message: 'Должно быть числом' })
  @IsOptional()
  sort?: ICategory['sort']
}