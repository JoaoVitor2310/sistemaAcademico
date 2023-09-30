import { GetDiretorDeEnsino } from '@/domain/usecases/diretor_de_ensino/get-diretor-de-ensino'
import { Controller, HttpResponse, Validation } from '@/presentation/interfacestypes'
import { badRequest, notFound, ok, serverError } from '@/presentation/helpers'
import { NotFoundError } from '@/presentation/errors/not-found-error'

export class GetDiretorDeEnsinoController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly getDiretorDeEnsino: GetDiretorDeEnsino
  ) { }

  async handle (request: GetDiretorDeEnsinoController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) return badRequest(error)
      const DiretorDeEnsino = await this.getDiretorDeEnsino.get({
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

export namespace GetDiretorDeEnsinoController {
  export type Request = GetDiretorDeEnsino.Params
}
