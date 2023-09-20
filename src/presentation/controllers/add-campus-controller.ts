import { AddCampus } from '@/domain/usecases/campus'
import { Controller, HttpResponse, Validation } from '@/presentation/interfacestypes'
import { badRequest, noContent, serverError } from '@/presentation/helpers'

export class AddCampusController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addCampus: AddCampus
  ) { }

  async handle (request: AddCampusController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) return badRequest(error)
      const uuid = crypto.randomUUID()
      await this.addCampus.add({ ...request, id: uuid })
      return noContent()
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace AddCampusController {
  export type Request = Omit<AddCampus.Params, 'id'>
}
