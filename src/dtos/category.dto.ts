import { ICategory } from '../interface/category.interface'

export interface CategoryDto extends Pick<ICategory, 'title' | 'params' | 'parentId' | 'sort'> {}