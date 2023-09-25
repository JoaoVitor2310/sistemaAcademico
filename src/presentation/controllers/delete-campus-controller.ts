import { DeleteCampus } from '@/domain/usecases/campus'
import { Controller, HttpResponse, Validation } from '@/presentation/interfacestypes'
import { badRequest, notFound, ok, serverError } from '@/presentation/helpers'
import { NotFoundError } from '@/presentation/errors/'

export class DeleteCampusController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly deleteCampus: DeleteCampus
  ) { }

  async handle (request: DeleteCampusController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) return badRequest(error)
      const campus = await this.deleteCampus.delete({ id: request.id })
      return ok(campus)
    } catch (error) {
      if (error instanceof NotFoundError) return notFound(error.message)
      return serverError(error)
    }
  }
}

export namespace DeleteCampusController {
  export type Request = DeleteCampus.Params
}
