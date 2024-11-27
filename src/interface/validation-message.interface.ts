export interface ValidationMessage {
  statusCode: number
  message: string
  validation: Array<Record<string, string>>
}