import { DeleteDiretorDeEnsino } from '@/domain/usecases/diretor_de_ensino'
import { Controller, HttpResponse, Validation } from '@/presentation/interfacestypes'
import { badRequest, notFound, ok, serverError } from '@/presentation/helpers/'
import { NotFoundError } from '@/presentation/errors/not-found-error'

export class DeleteDiretorDeEnsinoController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly deleteDiretorDeEnsino: DeleteDiretorDeEnsino
  ) { }

  async handle (request: DeleteDiretorDeEnsinoController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) return badRequest(error)
      const DiretorDeEnsino = await this.deleteDiretorDeEnsino.delete({
        id: request.id,
        dataIni: request.dataIni,
        dataFim: request.dataFim
      })
      return ok(DiretorDeEnsino)
    } catch (error) {
      if (error instanceof NotFoundError) return notFound(error.message)
      return serverError(error)
    }
  }
}

export namespace DeleteDiretorDeEnsinoController {
  export type Request = DeleteDiretorDeEnsino.Params
}
