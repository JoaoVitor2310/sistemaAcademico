import { Controller, HttpResponse, Validation } from '@/presentation/interfacestypes'
import { badRequest, serverError, noContent } from '@/presentation/helpers'
import { AddInstituto } from '@/domain/usecases/instituto'
import crypto from 'crypto'

export class AddInstitutoController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addInstituto: AddInstituto
  ) {}

  async handle (request: AddInstitutoController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      const uuid: string = crypto.randomUUID()
      await this.addInstituto.add({
        ...request,
        id: uuid

      })
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace AddInstitutoController {
  export type Request = Omit<AddInstituto.Params, 'id'>

}
