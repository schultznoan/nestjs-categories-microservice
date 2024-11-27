import { HttpException, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'

import { CategoryModel } from './category.model'

import { CategoriesParamsDto } from '../dtos/category-params.dto'

import { ICategoryResponse } from '../interface/category-response.interface'

import { SORT_DIRECTION } from '../constant'

@Injectable()
export class CategoryService {
  constructor(@InjectModel(CategoryModel) private categoriesModel: typeof CategoryModel) {}

  public async getAll ({ page = 1, limit = 20, sort = SORT_DIRECTION.ASC }: CategoriesParamsDto): Promise<ICategoryResponse> {
    try {
      const { rows, count } = await this.categoriesModel.findAndCountAll({
        order: [ ['sort', sort] ],
        limit,
        offset: (page - 1) * limit
      })

      return {
        data: rows,
        meta: {
          currentPage: page,
          perPage: limit,
          pageCount: Math.ceil(limit / count),
          totalCount: count
        }
      }
    } catch (error) {
      console.error(error)
      throw new HttpException(error.message, error.status)
    }
  }
}

