import type { CategoryModel } from "../internal/category.model"

export interface ICategoryMeta {
  currentPage: number
  perPage: number
  pageCount: number
  totalCount: number
}

export interface ICategoryResponse {
  data: CategoryModel[],
  meta: ICategoryMeta
}