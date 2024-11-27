import { HttpException, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'

import { CategoryModel } from './category.model'

@Injectable()
export class CategoryService {
  constructor(@InjectModel(CategoryModel) private categoriesModel: typeof CategoryModel) {}

  public async getAll (): Promise<CategoryModel[]> {
    try {
      return await this.categoriesModel.findAll()
    } catch (error) {
      console.error(error)
      throw new HttpException(error.message, error.status)
    }
  }
}

