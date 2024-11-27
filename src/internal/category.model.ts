import { Column, DataType, Model, Table } from 'sequelize-typescript'

import { ICategory } from '../interface/category.interface'

@Table({ tableName: 'categories' })
export class CategoryModel extends Model<CategoryModel, ICategory> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number

  @Column({
    type: DataType.STRING(255),
    unique: true,
    allowNull: false
  })
  code: string

  @Column({
    type: DataType.STRING(255),
    allowNull: false
  })
  title: string

  @Column({
    type: DataType.JSON,
    allowNull: true,
    defaultValue: {}
  })
  params?: Record<string, unknown>

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: null
  })
  parentId?: number

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0
  })
  sort?: number
}
