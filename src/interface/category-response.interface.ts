import type { CategoryModel } from "../internal/category.model"

export interface ICategoryResponse {
  data: CategoryModel[],
  meta: {
    currentPage: number
    perPage: number
    pageCount: number
    totalCount: number
  }
}