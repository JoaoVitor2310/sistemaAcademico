import { Controller, HttpResponse, Validation } from '@/presentation/interfacestypes'
import { badRequest, serverError, noContent } from '@/presentation/helpers'
import { AddNivelDeEnsino } from '@/domain/usecases/nivel_de_ensino'

export class AddNivelDeEnsinoController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addNivelDeEnsino: AddNivelDeEnsino
  ) {}

  async handle (request: AddNivelDeEnsinoController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      const uuid: string = crypto.randomUUID()
      await this.addNivelDeEnsino.add({
        ...request,
        id: uuid

      })
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace AddNivelDeEnsinoController {
  export type Request = Omit<AddNivelDeEnsino.Params, 'id'>

}
