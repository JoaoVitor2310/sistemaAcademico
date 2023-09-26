import { GetCampus } from '@/domain/usecases/campus'
import { Controller, HttpResponse, Validation } from '@/presentation/interfacestypes'
import { badRequest, ok, serverError } from '@/presentation/helpers'

export class GetCampusController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly getCampus: GetCampus
  ) { }

  async handle (request: GetCampusController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) return badRequest(error)
      const output = await this.getCampus.get({ nome: request.nome })
      if (!output) return badRequest(new Error('Invalid params values'))
      return ok(output)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace GetCampusController {
  export type Request = GetCampus.Params
}
