import { Column, DataType, Model, Table } from 'sequelize-typescript'

import { ApiProperty } from '@nestjs/swagger'

import { ICategory } from '../interface/category.interface'

@Table({ tableName: 'categories' })
export class CategoryModel extends Model<CategoryModel, ICategory> {
  @ApiProperty({
    example: '1',
    description: 'Уникальный идентификатор'
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number

  @ApiProperty({
    example: 'cod_categorii',
    description: 'Код категории'
  })
  @Column({
    type: DataType.STRING(255),
    unique: true,
    allowNull: false
  })
  code: string

  @ApiProperty({
    example: 'naimenovanie_categorii',
    description: 'Наименование категории'
  })
  @Column({
    type: DataType.STRING(255),
    allowNull: false
  })
  title: string

  @ApiProperty({
    example: { isHiddenInMainPage: true },
    description: 'Дополнительные параметры'
  })
  @Column({
    type: DataType.JSON,
    allowNull: true,
    defaultValue: {}
  })
  params?: Record<string, unknown>

  @ApiProperty({
    example: 'null',
    description: 'Родительская категория'
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: null
  })
  parentId?: number

  @ApiProperty({
    example: '0',
    description: 'Сортировка'
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0
  })
  sort?: number
}
