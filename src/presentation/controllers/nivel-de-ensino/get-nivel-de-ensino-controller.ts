import { GetNivelDeEnsino } from '@/domain/usecases/nivel_de_ensino/get-nivel-de-ensino'
import { Controller, HttpResponse, Validation } from '@/presentation/interfacestypes'
import { badRequest, noContent, notFound, serverError } from '@/presentation/helpers'
import { NotFoundError } from '@/presentation/errors/not-found-error'

export class GetNivelDeEnsinoController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly getNivelDeEnsino: GetNivelDeEnsino
  ) { }

  async handle (request: GetNivelDeEnsinoController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) return badRequest(error)
      await this.getNivelDeEnsino.get({ nome: request.nome })
      return noContent()
    } catch (error) {
      if (error instanceof NotFoundError) return notFound(error.message)
      return serverError(error)
    }
  }
}

export namespace GetNivelDeEnsinoController {
  export type Request = GetNivelDeEnsino.Params
}
