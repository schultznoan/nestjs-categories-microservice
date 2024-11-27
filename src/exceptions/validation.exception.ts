import { HttpException, HttpStatus } from '@nestjs/common'

import { ValidationMessage } from '../interface/validation-message.interface'

export class ValidationException extends HttpException {
  readonly messages: ValidationMessage

  constructor (response: ValidationMessage) {
    super(response, HttpStatus.BAD_REQUEST)
    
    this.messages = response
  }
}