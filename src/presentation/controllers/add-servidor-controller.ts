import { Controller, HttpResponse, Validation } from '@/presentation/interfacestypes'
import { badRequest, serverError, noContent } from '@/presentation/helpers'
import { AddServidor } from '@/domain/usecases/servidor'

export class AddServidorController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addServidor: AddServidor
  ) {}

  async handle (request: AddServidorController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      const uuid: string = crypto.randomUUID()
      await this.addServidor.add({
        ...request,
        id: uuid

      })
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace AddServidorController {
  export type Request = Omit<AddServidor.Params, 'id'>

}
