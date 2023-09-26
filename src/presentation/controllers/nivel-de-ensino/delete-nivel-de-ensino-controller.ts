import { DeleteNivelDeEnsino } from '@/domain/usecases/nivel_de_ensino'
import { Controller, HttpResponse, Validation } from '@/presentation/interfacestypes'
import { badRequest, notFound, ok, serverError } from '@/presentation/helpers/'
import { NotFoundError } from '@/presentation/errors/not-found-error'

export class DeleteNivelDeEnsinoController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly deleteNivelDeEnsino: DeleteNivelDeEnsino
  ) { }

  async handle (request: DeleteNivelDeEnsinoController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) return badRequest(error)
      const nivelDeEnsino = await this.deleteNivelDeEnsino.delete({ id: request.id })
      return ok(nivelDeEnsino)
    } catch (error) {
      if (error instanceof NotFoundError) return notFound(error.message)
      return serverError(error)
    }
  }
}

export namespace DeleteNivelDeEnsinoController {
  export type Request = DeleteNivelDeEnsino.Params
}
