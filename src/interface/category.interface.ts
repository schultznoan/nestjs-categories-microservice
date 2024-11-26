export interface ICategory {
  id: number
  code: string
  title: string
  params?: Record<string, unknown>
  parentId?: number | null
  sort?: number
}