import { GetDirecaoDeEnsino } from '@/domain/usecases/direcao_de_ensino/get-direcao-de-ensino'
import { Controller, HttpResponse, Validation } from '@/presentation/interfacestypes'
import { badRequest, notFound, ok, serverError } from '@/presentation/helpers'
import { NotFoundError } from '@/presentation/errors/not-found-error'

export class GetDirecaoDeEnsinoController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly getDirecaoDeEnsino: GetDirecaoDeEnsino
  ) { }

  async handle (request: GetDirecaoDeEnsinoController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) return badRequest(error)
      const DirecaoDeEnsino = await this.getDirecaoDeEnsino.get({
        nome: request.nome,
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

export namespace GetDirecaoDeEnsinoController {
  export type Request = GetDirecaoDeEnsino.Params
}
