import { Controller, HttpResponse, Validation } from '@/presentation/interfacestypes'
import { badRequest, serverError, noContent } from '@/presentation/helpers'
import { AddDirecaoDeEnsino } from '@/domain/usecases/direcao_de_ensino'
import crypto from 'crypto'

export class AddDirecaoDeEnsinoController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addDirecaoDeEnsino: AddDirecaoDeEnsino
  ) {}

  async handle (request: AddDirecaoDeEnsinoController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      const uuid: string = crypto.randomUUID()
      await this.addDirecaoDeEnsino.add({
        ...request,
        id: uuid

      })
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace AddDirecaoDeEnsinoController {
  export type Request = Omit<AddDirecaoDeEnsino.Params, 'id'>

}
