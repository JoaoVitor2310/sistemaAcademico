import { GetCampus } from '@/domain/usecases/campus'
import { Controller, HttpResponse, Validation } from '@/presentation/interfacestypes'
import { badRequest, notFound, ok, serverError } from '@/presentation/helpers'
import { NotFoundError } from '@/presentation/errors/'

export class GetCampusController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly getCampus: GetCampus
  ) { }

  async handle (request: GetCampusController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) return badRequest(error)
      const campus = await this.getCampus.get({ nome: request.nome })
      return ok(campus)
    } catch (error) {
      if (error instanceof NotFoundError) return notFound(error.message)
      return serverError(error)
    }
  }
}

export namespace GetCampusController {
  export type Request = GetCampus.Params
}
