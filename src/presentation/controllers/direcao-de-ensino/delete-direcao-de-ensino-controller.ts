import { DeleteDirecaoDeEnsino } from '@/domain/usecases/direcao_de_ensino'
import { Controller, HttpResponse, Validation } from '@/presentation/interfacestypes'
import { badRequest, notFound, ok, serverError } from '@/presentation/helpers/'
import { NotFoundError } from '@/presentation/errors/not-found-error'

export class DeleteDirecaoDeEnsinoController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly deleteDirecaoDeEnsino: DeleteDirecaoDeEnsino
  ) { }

  async handle (request: DeleteDirecaoDeEnsinoController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) return badRequest(error)
      const DirecaoDeEnsino = await this.deleteDirecaoDeEnsino.delete({
        id: request.id,
        nivel_ensino: request.nivel_ensino,
        telefone: request.telefone
      })
      return ok(DirecaoDeEnsino)
    } catch (error) {
      if (error instanceof NotFoundError) return notFound(error.message)
      return serverError(error)
    }
  }
}

export namespace DeleteDirecaoDeEnsinoController {
  export type Request = DeleteDirecaoDeEnsino.Params
}
