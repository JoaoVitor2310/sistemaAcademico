import { EditCampus } from '@/domain/usecases/campus'
import { Controller, HttpResponse, Validation } from '@/presentation/interfacestypes'
import { badRequest, notFound, ok, serverError } from '@/presentation/helpers'
import { NotFoundError } from '@/presentation/errors/'

export class EditCampusController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly editCampus: EditCampus
  ) { }

  async handle (request: EditCampusController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) return badRequest(error)
      const campus = await this.editCampus.edit(request)
      return ok(campus)
    } catch (error) {
      console.log(error.message)
      if (error instanceof NotFoundError) return notFound(error.message)
      return serverError(error)
    }
  }
}

export namespace EditCampusController {
  export type Request = EditCampus.Params
}
