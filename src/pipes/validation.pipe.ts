import { ArgumentMetadata, HttpStatus, Injectable, PipeTransform } from '@nestjs/common'
import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'
import { ValidationException } from '../exceptions/validation.exception'

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform (value: any, metadata: ArgumentMetadata) {
    const obj = plainToClass(metadata.metatype, value)
    const errors = await validate(obj)

    if (!errors.length) {
      return value
    }

    const messages = errors.map(error => {
      return {
        [error.property]: Object.values(error.constraints).join('; ')
      }
    })

    throw new ValidationException({
      statusCode: HttpStatus.BAD_REQUEST,
      message: 'Ошибка валидации',
      validation: messages
    })
  }
}