import { AddCampus } from '@/domain/usecases/campus'
import { Controller, HttpResponse, Validation } from '@/presentation/interfacestypes'
import { badRequest, noContent, serverError } from '@/presentation/helpers'
import crypto from 'crypto'

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
      const output = await this.addCampus.add({ ...request, id: uuid })
      if (!output) return badRequest(new Error('Invalid params values'))
      return noContent()
    } catch (error) {
      console.log(error)
      return serverError(error)
    }
  }
}

export namespace AddCampusController {
  export type Request = Omit<AddCampus.Params, 'id'>
}
