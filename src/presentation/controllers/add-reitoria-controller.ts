import {
  Controller,
  HttpResponse,
  Validation
} from '@/presentation/interfacestypes'
import { badRequest, serverError, noContent, existingReitoria, invalidTelefone } from '@/presentation/helpers'
import { AddReitoria } from '@/domain/usecases/reitoria'
// Importando Biblioteca
import crypto from 'crypto'
import { ExistingReitoriaError, InvalidTelefoneError } from '../errors'

export class AddReitoriaController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addReitoria: AddReitoria
  ) {}

  async handle (request: AddReitoriaController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      const uuid: string = crypto.randomUUID()
      await this.addReitoria.add({
        ...request,
        id: uuid
      })
      return noContent()
    } catch (error) {
      if (error instanceof ExistingReitoriaError) return existingReitoria(error) 
      if (error instanceof InvalidTelefoneError) return invalidTelefone(error) 


      return serverError(error)
    }
  }
}

export namespace AddReitoriaController {
  export type Request = Omit<AddReitoria.Params, 'id'>
}
