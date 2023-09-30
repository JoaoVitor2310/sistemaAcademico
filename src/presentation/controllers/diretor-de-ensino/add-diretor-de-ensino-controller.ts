import { Controller, HttpResponse, Validation } from '@/presentation/interfacestypes'
import { badRequest, serverError, noContent } from '@/presentation/helpers'
import { AddDiretorDeEnsino } from '@/domain/usecases/diretor_de_ensino'
import crypto from 'crypto'

export class AddDiretorDeEnsinoController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addDiretorDeEnsino: AddDiretorDeEnsino
  ) {}

  async handle (request: AddDiretorDeEnsinoController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      const uuid: string = crypto.randomUUID()
      await this.addDiretorDeEnsino.add({
        ...request,
        id: uuid

      })
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace AddDiretorDeEnsinoController {
  export type Request = Omit<AddDiretorDeEnsino.Params, 'id'>

}
