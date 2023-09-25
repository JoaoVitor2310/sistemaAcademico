import { DeleteDiretor } from '@/domain/usecases/diretor'
import { Controller, HttpResponse, Validation } from '@/presentation/interfacestypes'
import { badRequest, notFound, ok, serverError } from '@/presentation/helpers'
import { NotFoundError } from '@/presentation/errors/'

export class DeleteDiretorController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly deleteDiretor: DeleteDiretor
  ) { }

  async handle (request: DeleteDiretorController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) return badRequest(error)
      const diretor = await this.deleteDiretor.delete({ id: request.id })
      return ok(diretor)
    } catch (error) {
      if (error instanceof NotFoundError) return notFound(error.message)
      return serverError(error)
    }
  }
}

export namespace DeleteDiretorController {
  export type Request = DeleteDiretor.Params
}
